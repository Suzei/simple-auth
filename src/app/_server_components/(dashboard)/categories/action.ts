import { Categories } from '@/app/entities/Categories';
import { pbUrl } from '@/app/lib/pBUrl';
import Pocketbase from 'pocketbase';

const pb = new Pocketbase(pbUrl);

export async function CreateCategory(data: Categories) {
  await pb.collection('categories').create(data);
}

export async function GetCategories() {
  const categories = pb.collection('categories').getList(1, 10);

  return categories;
}

export async function GetCategoryById(id: string) {
  const categoryId = await pb.collection('categories').getOne(id);

  return categoryId;
}

export async function UpdateCategory(id: string, data?: Categories) {
  await pb.collection('categories').update(id, data);
}

export async function DeleteCategory(id: string) {
  await pb.collection('categories').delete(id);
}
