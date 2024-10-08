'use client';

import {
  CreateCategory,
  GetCategories,
  GetCategoryById,
  UpdateCategory,
} from '@/app/_server_components/(dashboard)/categories/action';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import styles from './styles.module.scss';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  description: z.string(),
  category_mother: z.string(),
  name: z.string(),
});

type CategorySchema = z.infer<typeof schema>;

function CreateEditCategory() {
  const params = useParams();

  const query = useQuery({
    queryKey: ['userid'],
    queryFn: () => GetCategoryById(params?.id),
  }).data;

  const queryCategories = useQuery({
    queryKey: ['userid'],
    queryFn: () => GetCategories(),
  }).data;

  const { handleSubmit, register } = useForm<CategorySchema>({
    resolver: zodResolver(schema),
  });

  function onSubmit(data: CategorySchema) {
    queryCategories ? UpdateCategory(param.id, data) : CreateCategory(data);
  }

  return (
    <section className={styles.sectionWrapper}>
      <h2>{query ? query.name : 'Criar categoria'}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.userForm}>
        <div className={styles.userFormWrapper}>
          <div>
            <label>
              Nome
              <input value={query?.name} {...register('name')} type="text" />
            </label>

            <label>
              Categoria mãe
              <select>
                {queryCategories?.items?.map((item) => (
                  <option
                    {...register('category_mother')}
                    value={query?.category_mother}
                  >
                    {item?.name}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label>
            Descrição
            <input
              value={query?.description}
              type="text"
              {...register('description')}
            />
          </label>
        </div>

        <div className={styles.controller}>
          <button type="button">Cancelar</button>
          <button type="submit">
            {query ? 'Salvar alterações' : 'Criar categoria'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default CreateEditCategory;
