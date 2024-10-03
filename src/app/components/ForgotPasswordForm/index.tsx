"use client"
import { useForm } from "react-hook-form"
import { Box } from "../Box"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Divider } from "../Divider";
import Link from "next/link";

const schema = z.object({
    email: z.string().email("Não é um e-mail válido")
})

type ForgotPassword = z.infer<typeof schema>

function ForgotPasswordForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ForgotPassword>({
        resolver: zodResolver(schema),
    });

    function onSubmit(data: ForgotPassword) {

    }

    return (
        <Box authOption="forgotPassword" boxType="form" >
            <form onSubmit={handleSubmit(onSubmit)}>
                <section>
                    <input {...register('email')} type="email" />
                    {/* {errors.email && <span>{errors.email.message}</span>} */}
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