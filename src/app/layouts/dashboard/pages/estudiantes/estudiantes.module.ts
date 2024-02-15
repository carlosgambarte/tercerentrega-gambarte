import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudiantesComponent } from './estudiantes.component';
import {MatTableModule} from '@angular/material/table';
import { FormEstudianteComponent } from './componentes/form-estudiante/form-estudiante.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EstudiantesComponent,
    FormEstudianteComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
    
  ],
  exports: [EstudiantesComponent ],
})
export class EstudiantesModule { }
