"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import Link from "next/link";
import { Divider } from "../Divider";
import { Box } from "../Box";
import { redirect } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import Pocketbase from 'pocketbase'
import { pbUrl } from "@/app/lib/pBUrl";
import { CreateSession } from "@/app/actions";

const schema = z.object({
    email: z.string(),
    password: z.string()
})

type LoginSchema = z.infer<typeof schema>


export function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginSchema>({
        resolver: zodResolver(schema),
    })

    const mutation = useMutation({
        mutationFn: async (data: LoginSchema) => {
            await CreateSession({ email: data.email, password: data.password })
        },
    })

    const onSubmit = async (data: LoginSchema) => {
        mutation.mutate({ email: data.email, password: data.password })
        console.log(data.email, data.password)
    }

    return (
        <Box boxType="form" authOption="auth">
            <form onSubmit={handleSubmit(onSubmit)}>
                <section>
                    <input placeholder="Digite seu e-mail" type="email" {...register('email')} />
                    <input placeholder="Sua senha" type="password" {...register('password')} />
                </section>
                <button disabled={mutation.isPending} type="submit">Fazer Login</button>
            </form>

            <footer>
                <Divider text="Não possui conta?" />
                <Link href="/create-account">Criar uma conta</Link>
            </footer>
        </Box>
    )
}