"use client"

import { useForm } from "react-hook-form";
import { Box } from "../Box";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateLogin, CreateSession } from "@/app/actions";
import { useEffect } from "react";


const schema = z.object({
    email: z.string(),
    password: z.string()
})

type LoginSchema = z.infer<typeof schema>

export function LoginForm() {

    const { register, handleSubmit, formState: {
        isValid, isDirty } } = useForm<LoginSchema>({
            resolver: zodResolver(schema),
        })


    const onSubmit = (data?: LoginSchema) => { }


    return (
        <Box boxType="form" authOption="auth">
            <form onSubmit={handleSubmit(onSubmit)}>
                <section>
                    <input placeholder="Digite seu e-mail" type="email" {...register('email')} />
                    <input placeholder="Sua senha" type="password" {...register('password')} />
                </section>

                <button>{(!isDirty || isValid) ? 'Fazer login' : 'Por favor, preencha os campos acima'}</button>
            </form>

            <button onClick={() => onSubmit()}>Teste</button>
            <button onClick={() => CreateSession({ email: 'silvaviniciusdev@gmail.com', password: '88499879a' })}></button>
        </Box>
    )
}