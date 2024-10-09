'use client';

import { useMutation, useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { Box } from '../Box';
import { HTMLInputTypeAttribute } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthType } from '@/app/types/AuthType';
import styles from './styles.module.scss';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Loading from '../../assets/loading.webp';
import * as Switch from '@radix-ui/react-switch';

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
  getIdValues?: (id: string) => void;
  populateSelect?: () => void;
  schema: any;
  formType: AuthType;
  inputs: FormInputs[];
}

export function Form({
  inputs,
  onSubmitFunction,
  schema,
  populateSelect,
  getIdValues,
  formType,
}: FormProps) {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });

  const params = useParams();
  const route = useRouter();

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      onSubmitFunction(data);
    },

    onSuccess: () => {
      if (formType === 'dashboard') {
        route.back();
      }
    },
  });

  function onSubmit(data?: FormData | any) {
    console.log('data', data);
    mutation.mutate(data);
  }

  const selectQuery = useQuery({
    queryKey: ['select'],
    queryFn: async () => populateSelect(),
  });

  const valueQuery = useQuery({
    queryKey: ['idOnValues'],
    queryFn: () => getIdValues(params.id),
  });

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
                      {selectQuery.data?.items?.map((opt) => (
                        <option value={opt.type}>{opt.name}</option>
                      ))}
                    </select>
                  ) : (
                    <>
                      {item.type === 'checkbox' ? (
                        <Switch.Root
                          className={styles.Root}
                          {...register(item.register)}
                        >
                          <Switch.SwitchThumb className={styles.Thumb} />
                        </Switch.Root>
                      ) : (
                        <input {...register(item.register)} type={item.type} />
                      )}
                    </>
                  )}
                </div>
              </>
            ))}
          </section>
          <div className={styles.controller}>
            <button type="button">Cancelar</button>
            <button type="submit">Criar</button>
          </div>
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
                  {errors.root?.type?.valueOf}
                </>
              ))}
            </section>
            <button disabled={isSubmitting} type="submit">
              {mutation.isPending ? (
                <>
                  <Image src={Loading} alt="Carregando" width={20} /> Carregando
                </>
              ) : (
                `Por favor, preencha os campos acima`
              )}
            </button>
          </form>
        </Box>
      )}
    </>
  );
}
