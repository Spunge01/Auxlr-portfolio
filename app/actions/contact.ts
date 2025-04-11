"use server"

import { createServerSupabaseClient } from "@/lib/supabase/server"
import { z } from "zod"

// Define a schema for form validation
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Validate form data
    const validatedData = contactFormSchema.parse(formData)

    // Initialize Supabase client
    const supabase = createServerSupabaseClient()

    // Insert data into contacts table
    const { data, error } = await supabase.from("contacts").insert([validatedData]).select()

    if (error) {
      console.error("Error submitting contact form:", error)
      return { success: false, message: "Failed to submit form. Please try again later." }
    }

    return {
      success: true,
      message: "Thank you for your message! We'll get back to you shortly.",
    }
  } catch (error) {
    console.error("Error in submitContactForm:", error)
    if (error instanceof z.ZodError) {
      // Return validation errors
      return {
        success: false,
        message: "Please check your form inputs.",
        errors: error.errors,
      }
    }

    return { success: false, message: "An unexpected error occurred. Please try again later." }
  }
}
