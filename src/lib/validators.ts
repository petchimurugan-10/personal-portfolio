import { z } from "zod";

const regex = /<[^>]*>|javascript:|on\w+\s*=|eval\(|expression\(|vbscript:|data:text\/html|<iframe|<script|<embed|<object/gi;

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .refine(
      (val) => !regex.test(val),
      "Name contains invalid characters or patterns"
    )
    .refine(
      (val) => !/^[\s]*$/.test(val),
      "Name cannot be only whitespace"
    ),
  
  email: z
    .email()
    .max(255, "Email must be less than 255 characters")
    .toLowerCase(),
  
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must be less than 5000 characters")
    .refine(
      (val) => !regex.test(val),
      "Message contains potentially harmful content (scripts, HTML tags, etc.)"
    )
    .refine(
      (val) => !/^[\s]*$/.test(val),
      "Message cannot be only whitespace"
    ),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
