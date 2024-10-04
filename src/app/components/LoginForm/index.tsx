"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";


import Link from "next/link";
import { Divider } from "../Divider";
import { Box } from "../Box";
import { useMutation } from "@tanstack/react-query";
import { CreateSession } from "../../_server_components/(users)/userActions";

const schema = z.object({
    email: z.string(),
    password: z.string()
})

type LoginSchema = z.infer<typeof schema>


export function LoginForm() {
    const { register, handleSubmit, formState: { errors, disabled } } = useForm<LoginSchema>({
        resolver: zodResolver(schema),
    })

    const mutation = useMutation({
        mutationFn: async (data: LoginSchema) => {
            await CreateSession({ email: data.email, password: data.password })
        },
    })

    const onSubmit = async (data: LoginSchema) => {
        mutation.mutate({ email: data.email, password: data.password })
    }


    return (
        <Box boxType="form" authOption="auth">
            <form onSubmit={handleSubmit(onSubmit)}>
                <section>
                    <input placeholder="Digite seu e-mail" type="email" {...register('email')} />
                    <Link className="link-text" href="/password-recover">Esqueceu sua senha?</Link>
                    <input placeholder="Sua senha" type="password" {...register('password')} />
                </section>
                <button disabled={mutation.isPending} type="submit">Fazer login</button>
            </form>

            <footer>
                <Divider text="Não possui conta?" />
                <Link href="/create-account">Criar uma conta</Link>
            </footer>
        </Box>
    )
}