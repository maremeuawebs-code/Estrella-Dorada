"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
});

export const ContactForm = () => {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(schema)
  });
  return <form onSubmit={handleSubmit((d) => console.log(d))}><input {...register("name")} /><button>Submit</button></form>;
};
