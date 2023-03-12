import * as z from "zod";

const useValidationSchema = () =>
  z.object({
    email: z
      .string()
      .min(1, { message: "Cannot be empty" })
      .email({ message: "Must be a valid email" }),
    password: z.string().min(1, { message: "Cannot be empty" }),
  });

export default useValidationSchema;
