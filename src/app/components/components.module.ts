import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyComponentComponent} from '../components/my-component/my-component.component';



@NgModule({
  declarations: [MyComponentComponent],
  imports: [
    CommonModule
  ],
  exports:[
    MyComponentComponent
  ]
})
export class ComponentsModule { }