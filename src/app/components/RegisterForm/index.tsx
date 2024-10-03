"use client";

import { z } from "zod";
import { Box } from "../Box";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Divider } from "../Divider";
import { CreateUser } from "../../_server_components/(users)/userActions";
import './styles.module.scss'

const schema = z
    .object({
        username: z
            .string()
            .min(7, "Insira um username com pelo menos 7 letras"),

        email: z
            .string()
            .email("Insira um e-mail válido")
            .toLowerCase(),

        emailVisibility: z.boolean()
            .default(true),

        password: z
            .string()
            .min(8, "Por favor, insira um senha com pelo menos 8 caracteres"),

        passwordConfirm: z
            .string()
            .min(8, "Por favor, insira um senha com pelo menos 8 caracteres"),
        name: z
            .string().min(5),

        type: z.
            string().default("student"),
    })


type CreateUserSchema = z.infer<typeof schema>;

export function RegisterForm() {
    const {
        register,
        handleSubmit,
        formState: { isValid, isDirty, errors },
    } = useForm<CreateUserSchema>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: any) => {
        try {
            CreateUser(data)
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <Box boxType="form" authOption="createAccount">
            < form onSubmit={handleSubmit(onSubmit)} >
                <section>
                    <input
                        placeholder="Digite seu nome"
                        type="text"
                        required
                        {...register("name")}
                    />

                    <div>
                        <input
                            placeholder="Digite seu e-mail"
                            type="email"
                            {...register("email")}
                        />

                        <input
                            placeholder="Seu username"
                            type="text"
                            required
                            {...register("username")}
                        />
                    </div>

                    <input
                        placeholder="Sua senha"
                        minLength={8}
                        type="password"
                        {...register("password")}
                    />
                    {errors.password?.message}

                    <input
                        placeholder="Confirme sua senha"
                        type="password"
                        {...register("passwordConfirm")}
                    />
                    {errors.passwordConfirm?.message}
                </section>

                <button type="submit">
                    {isDirty
                        ? "Criar minha conta"
                        : "Por favor, preencha os campos acima"}
                </button>
            </form >

            <footer>
                <Divider text="Já possui conta?" />
                <Link href="/">Faça seu login</Link>
            </footer>
        </Box >
    );
}
