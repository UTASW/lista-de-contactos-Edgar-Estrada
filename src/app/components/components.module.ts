import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyComponentComponent} from '../components/my-component/my-component.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [MyComponentComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule
  ],
  exports:[MyComponentComponent]
})
export class ComponentsModule { }
