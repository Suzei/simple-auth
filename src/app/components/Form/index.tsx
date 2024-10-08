'use client';

import { useMutation, useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { Box } from '../Box';
import { HTMLInputTypeAttribute } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthType } from '@/app/types/AuthType';
import styles from './styles.module.scss';

export interface FormInputs {
  type?: HTMLInputTypeAttribute;
  label?: string;
  register: string;
  placeholder?: string;
  select?: { label: string; value: string }[];
}

interface FormProps {
  onSubmitFunction(data: any): void;
  updateValues?: (id: string, data: any) => void;
  schema: any;
  formType: AuthType;
  inputs: FormInputs[];
}

export function Form({
  inputs,
  onSubmitFunction,
  schema,
  formType,
}: FormProps) {
  const {
    handleSubmit,
    register,
    formState: { errors, isDirty, isValid },
  } = useForm({ resolver: zodResolver(schema) });

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      await onSubmitFunction(data);
    },
  });

  function onSubmit(data?: FormData | any) {
    mutation.mutate(data);
    console.log(data);
  }

  return (
    <>
      {formType === 'dashboard' ? (
        <form className={styles.dashboard} onSubmit={handleSubmit(onSubmit)}>
          <section>
            {inputs?.map((item) => (
              <>
                <div>
                  <label htmlFor={item.register}>{item.label}</label>
                  {item.type === 'select' || item.select ? (
                    <select {...register(item.register)}>
                      <option value="">Selecionar</option>
                      {item.select?.map((opts) => (
                        <option value={opts.value}>{opts.label}</option>
                      ))}
                    </select>
                  ) : (
                    <input {...register(item.register)} type={item.type} />
                  )}
                </div>
              </>
            ))}
          </section>
          <button type="submit">
            {mutation.isPending ? 'Carregando' : 'Enviar'}
          </button>
        </form>
      ) : (
        <Box authOption={formType}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <section>
              {inputs?.map((input) => (
                <>
                  <input
                    type={input.type}
                    {...register(input.register)}
                    placeholder={input.placeholder}
                  />
                  {errors.root?.message}

                  {}
                </>
              ))}
            </section>
            <button disabled={!isValid || !isDirty} type="submit">
              {mutation.isPending ? 'Carregando' : 'any shut'}
            </button>
          </form>
        </Box>
      )}
    </>
  );
}
