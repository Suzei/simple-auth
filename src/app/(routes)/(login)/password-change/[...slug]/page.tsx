"use client"

import { ConfirmPasswordChange } from "@/app/_server_components/(users)/passwordRecoveryActions"
import { Box } from "@/app/components/Box"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { useParams } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"

const schema = z.object({
    password: z.string(),
    passwordConfirm: z.string(),
})

type ConfirmPassword = z.infer<typeof schema>

export default function PasswordChange() {

    const params = useParams()

    const { handleSubmit, register, formState: { errors } } = useForm<ConfirmPassword>({
        resolver: zodResolver(schema)
    },)

    const mutation = useMutation({
        mutationFn: (data: ConfirmPassword) => {
            return ConfirmPasswordChange({ password: data.password, passwordConfirm: data.passwordConfirm, passwordResetToken: params.slug[0] })

        }
    })

    function onSubmit(data: ConfirmPassword) {
        mutation.mutate(data)
    }

    return (
        <Box boxType="form" authOption="forgotPassword">
            <form onSubmit={handleSubmit(onSubmit)}>
                <section>
                    <input type="password" {...register('password')} />
                    <input type="password" {...register('passwordConfirm')} />
                </section>

                <button>Criar nova senha</button>
            </form>
        </Box>
    )
}