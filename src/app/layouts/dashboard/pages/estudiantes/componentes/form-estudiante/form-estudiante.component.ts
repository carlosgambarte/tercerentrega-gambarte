import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-estudiante',
  templateUrl: './form-estudiante.component.html',
  styleUrl: './form-estudiante.component.scss'
})
export class FormEstudianteComponent {
  formEstudiante: FormGroup;

  @Output()
  estudianteSubmitted= new EventEmitter();

  constructor (private fb: FormBuilder ) {
    this.formEstudiante= this.fb.group ({
      nombre: this.fb.control("", Validators.required),
      apellido: this.fb.control ("", Validators.required),
      email: this.fb.control ("", Validators.required),
      edad: this.fb.control ("", Validators.required),
    })

  }

  onSubmit() : void {

    if (this.formEstudiante.invalid) {
      this.formEstudiante.markAllAsTouched();
    } else {
      this.estudianteSubmitted.emit(this.formEstudiante.value);
      
    }
  
      
  }
  
    
   
}
