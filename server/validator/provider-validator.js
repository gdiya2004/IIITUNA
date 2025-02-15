import { z } from "zod";

export const loginSchema = z.object({
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email" })
        .min(3, { message: "Email must be at least 3 characters" })
        .max(255, { message: "Email must not exceed 255 characters" }),

    password: z
        .string({ required_error: "Password is required" })
        .min(7, { message: "Password must be at least 7 characters" })
        .max(1024, { message: "Password must not exceed 1024 characters" }),
});
export const signupSchema = loginSchema.extend({
    name: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be at least 3 characters" })
        .max(255, { message: "Name must not exceed 255 characters" }),

    phone: z
        .string({ required_error: "Phone number is required" })
        .trim()
        .min(10, { message: "Phone number must be at least 10 characters" })
        .max(20, { message: "Phone number must not exceed 20 characters" }),

    service: z
        .string({ required_error: "Service is required" })
        .trim()
        .min(3, { message: "Service must be at least 3 characters" })
        .max(255, { message: "Service must not exceed 255 characters" }),

    contact: z
        .string({ required_error: "Contact details are required" })
        .trim()
        .min(3, { message: "Contact must be at least 3 characters" })
        .max(255, { message: "Contact must not exceed 255 characters" }),

    location: z
        .string({ required_error: "Location is required" })
        .trim()
        .min(3, { message: "Location must be at least 3 characters" })
        .max(255, { message: "Location must not exceed 255 characters" }),

    price: z
        .string({ required_error: "Price is required" })
        .trim()
        .min(1, { message: "Price must be specified" })
        .max(100, { message: "Price description must not exceed 100 characters" }),
});
