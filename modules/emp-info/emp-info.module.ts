import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EmpInfoModule { 
  empid: number;
  empname: string;
  dept: string;
  desg: string;
  salary: number;
  projid: number;
  password: string;

}

    
