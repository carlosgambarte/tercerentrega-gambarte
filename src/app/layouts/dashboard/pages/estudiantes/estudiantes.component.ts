import { Component, OnInit } from '@angular/core';
import { estudiantes } from './modelos';
import { AlumnService } from '../../../../core/services/alumn.service';
import { LoadingService } from '../../../../core/services/loading.service';





@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrl: './estudiantes.component.scss'
})
export class EstudiantesComponent implements OnInit{
  displayedColumns: string[] = ['id', 'nombre',"apellido","email","edad",];
  dataSource : estudiantes[] = [];

  

  constructor(private alumnservice: AlumnService, private loadingService: LoadingService){}
  
  ngOnInit(): void {

    this.loadingService.setIsLoading(true);
     this.alumnservice.getUsers().subscribe({
      next: (estudiantes)=>{
        this.dataSource=estudiantes;
      },
      complete:()=> {
        this.loadingService.setIsLoading(false);
      }
      
     })
  }
;
  onEstudianteSubmitted(ev:estudiantes): void{
    
    
    this.dataSource = [...this.dataSource, {...ev, id: new Date(). getTime()}];
    
  }
}


 