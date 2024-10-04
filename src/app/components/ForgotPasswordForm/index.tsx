"use client"

import { useForm } from "react-hook-form"
import { Box } from "../Box"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Divider } from "../Divider";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { CreatePasswordRecovery } from "@/app/_server_components/(users)/passwordRecoveryActions";


const schema = z.object({
    email: z.string().email("Não é um e-mail válido")
})

export type ForgotPassword = z.infer<typeof schema>

function ForgotPasswordForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ForgotPassword>({
        resolver: zodResolver(schema),
    });

    const mutation = useMutation({
        mutationFn: async (email: string) => {
            return CreatePasswordRecovery({ email })
        },

        onError: () => { }
    })

    function onSubmit(data: ForgotPassword) {
        mutation.mutate(data.email)
    }

    return (
        <Box authOption="forgotPassword" boxType="form" >
            <form onSubmit={handleSubmit(onSubmit)}>
                <section>
                    <input {...register('email')} type="email" />
                </section>
                <button type="submit">Solicitar nova senha</button>
            </form>

            <footer>
                <Divider text="Lembrou sua senha?" />
                <Link href="/">Faça seu login</Link>
            </footer>

        </Box>
    )
}

export default ForgotPasswordForm