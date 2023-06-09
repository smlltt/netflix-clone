import * as z from "zod";

const useValidationSchema = () =>
  z.object({
    username: z.string().min(1, { message: "Cannot be empty" }),
    email: z
      .string()
      .min(1, { message: "Cannot be empty" })
      .email({ message: "Must be a valid email" }),
    password: z.string().min(6, { message: "Must have at least 6 characters" }),
  });

export default useValidationSchema;
