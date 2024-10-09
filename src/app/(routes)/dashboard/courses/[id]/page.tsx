'use client';

import {
  CreateCategory,
  GetCategories,
  GetCategoryById,
  UpdateCategory,
} from '@/app/_server_components/(dashboard)/categories/action';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import styles from '../../categories/[...id]/styles.module.scss';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  GetCourseById,
  UpdateCourse,
} from '@/app/_server_components/(dashboard)/(courses)/action';

const schema = z.object({
  description: z.string(),
  category_mother: z.string(),
  name: z.string(),
  objetive: z.string(),
});

type CoursesSchema = z.infer<typeof schema>;

function CreateEditCourses() {
  const params = useParams();

  const query = useQuery({
    queryKey: ['courseId'],
    queryFn: () => GetCourseById(params?.id),
  }).data;

  const queryCategories = useQuery({
    queryKey: ['categoriesList'],
    queryFn: () => GetCategories(),
  }).data;

  const { handleSubmit, register } = useForm<CoursesSchema>({
    resolver: zodResolver(schema),
  });

  function onSubmit(data: CoursesSchema) {
    query?.id ? UpdateCourse(param.id, data) : CreateCategory(data);
  }

  return (
    <section className={styles.sectionWrapper}>
      <h2>{query?.id ? query.name : 'Criar curso'}</h2>
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

          <label>
            Objetivo
            <input
              value={query?.description}
              type="text"
              {...register('objetive')}
            />
          </label>
        </div>

        <div className={styles.controller}>
          <button type="button">Cancelar</button>
          <button type="submit">
            {query ? 'Salvar alterações' : 'Criar curso'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default CreateEditCourses;
