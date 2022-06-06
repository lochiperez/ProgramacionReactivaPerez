import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { Student } from '../interfaces/student.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentsData: Student[] = [ //Datos de los estudiantes
    { id: 1, name: 'Rodrigo', lastname: 'Perez', cursos: ['Angular'] },
    { id: 2, name: 'Federico', lastname: 'Perez', cursos: ['Angular', 'Node-JS'] },
    { id: 3, name: 'Victoria', lastname: 'Larraya', cursos: ['Angular', 'vueJS'] }
  ];

  studentToEdit!: Student | null;

  constructor() { }

  getStudents(): Observable<Student[]> {
    return of(this.studentsData);
  }

  setStudents(students: Student[]) {
    return new Promise((resolve, reject) => {
      //this.studentToEdit = null;
      if (students.length > 0) {
        console.log('la lista de estudiantes actualizada es: ', students)
        this.studentsData = students;
        return resolve(true)
      } else {
        reject({ message: 'No se pudo actualizar la informacion de los estudiantes' })
      }
    });
  }

  getStudentToEdit(): Observable<Student> {
    return of(this.studentToEdit!);
  }

  setStudentToEdit(student: Student | null) {
    return new Promise((resolve, reject) => {
      if (student || student === null) {
        console.log('El student a editar es: ', student)
        this.studentToEdit = student;
        return resolve(true)
      } else {
        return reject({ message: 'No se pudo setear el studentToEdit' })
      }

    });
  }


}
