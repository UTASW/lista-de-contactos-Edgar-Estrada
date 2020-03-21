import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {MyServiceService} from '../services/my-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public alertController: AlertController, public myService: MyServiceService) {}
}
