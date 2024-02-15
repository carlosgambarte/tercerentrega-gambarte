import { Injectable } from '@angular/core';
import { estudiantes } from '../../layouts/dashboard/pages/estudiantes/modelos';
import {  delay, of } from 'rxjs';

const alumnos_DB: estudiantes[]=[{
  id:1,
    nombre: "ismael",
    apellido:"gambarte",
    email: "gambarteismael01@gmail.com",
    edad: 34,
  
},
{
     id:2,
    nombre: "carlos",
    apellido:"gamba",
    email: "gambarte01@gmail.com",
    edad: 35,
  
}

]

@Injectable({
  providedIn: 'root'
})
export class AlumnService {

  constructor() { }

  getUsers(){
    return of(alumnos_DB).pipe(delay(3000))
  }
}
