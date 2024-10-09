import { Courses } from '@/app/entities/Courses';
import { pbUrl } from '@/app/lib/pBUrl';
import Pocketbase from 'pocketbase';

const pb = new Pocketbase(pbUrl);
export async function CreateCourse(data: Courses) {
  console.log(data);
  await pb.collection('courses').create(data);
}

export async function GetCourses() {
  const coursesList = await pb.collection('courses').getList(1, 10);

  return coursesList;
}

export async function GetCourseById(id: string) {
  const course = await pb.collection('courses').getOne(id);

  return course;
}

export async function UpdateCourse(id: string, data?: Courses) {
  await pb.collection('courses').update(id, data);
}

export async function DeleteCourse(id: string) {
  await pb.collection('courses').delete(id);
}
