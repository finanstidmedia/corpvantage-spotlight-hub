import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Namn krävs").max(100, "Max 100 tecken"),
  email: z.string().trim().email("Ogiltig e-postadress").max(255, "Max 255 tecken"),
  company: z.string().trim().max(100, "Max 100 tecken").optional(),
  message: z.string().trim().min(1, "Meddelande krävs").max(2000, "Max 2000 tecken"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      // Save to database
      const { error: dbError } = await supabase
        .from("contact_submissions")
        .insert({
          name: data.name,
          email: data.email,
          company: data.company || null,
          message: data.message,
        });

      if (dbError) {
        console.error("Database error:", dbError);
        throw new Error("Kunde inte spara meddelandet");
      }

      // Send email notification
      const { error: fnError } = await supabase.functions.invoke(
        "send-contact-notification",
        {
          body: data,
        }
      );

      if (fnError) {
        console.error("Function error:", fnError);
        // Don't throw - the message was saved, just notification failed
      }

      toast({
        title: "Tack för ditt meddelande!",
        description: "Vi återkommer så snart som möjligt.",
      });

      form.reset();
    } catch (error: any) {
      console.error("Submit error:", error);
      toast({
        title: "Något gick fel",
        description: "Försök igen eller kontakta oss via e-post.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Namn *</FormLabel>
                <FormControl>
                  <Input placeholder="Ditt namn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-post *</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="din@epost.se" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Företag</FormLabel>
              <FormControl>
                <Input placeholder="Ditt företag (valfritt)" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Meddelande *</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Berätta hur vi kan hjälpa dig..."
                  className="min-h-[120px] resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Skickar...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Skicka meddelande
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
