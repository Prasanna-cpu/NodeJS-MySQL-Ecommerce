import {z} from 'zod'

export const SignUpSchema=z.object({
    name:z.string(),
    email:z.string().email(),
    password:z.string().min(8,{message:"password must be 8 characters long"})
})

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "password must be 8 characters long" }),
});