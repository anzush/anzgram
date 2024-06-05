import * as z from "zod";

export const SignupValidation = z.object({
  name: z.string().min(2, { message: "Nombre tiene que tener mas de 2 caracteres." }),
  username: z.string().min(2, { message: "Nombre tiene que tener mas de 2 caracteres." }),
  email: z.string().email(),
  password: z.string().min(8, { message: "Contraseña tiene que tener mas de 8 caracteres." }),
});

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "Contraseña tiene que tener mas de 8 caracteres." }),
});

export const PostValidation = z.object({
  caption: z.string().min(5, { message: "Mínimo 5 caracteres." }).max(2200, { message: "Máximo 2,200 caracteres" }),
  file: z.custom<File[]>(),
  location: z.string().min(1, { message: "Fallo" }).max(1000, { message: "Máximo 1000 caracteres." }),
  tags: z.string(),
});

export const ProfileValidation = z.object({
  file: z.custom<File[]>(),
  name: z.string().min(2, { message: "Nombre tiene que tener mas de 2 caracteres." }),
  username: z.string().min(2, { message: "Nombre tiene que tener mas de 2 caracteres." }),
  email: z.string().email(),
  bio: z.string(),
});