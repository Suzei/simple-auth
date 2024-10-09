'use client';

import {
  DeleteCourse,
  GetCourses,
} from '@/app/_server_components/(dashboard)/(courses)/action';
import { Table } from '@/app/components/Table';

function Courses() {
  return (
    <>
      <Table
        deleteAction={DeleteCourse}
        populateTable={GetCourses}
        navigationTo="courses"
      />
    </>
  );
}

export default Courses;
