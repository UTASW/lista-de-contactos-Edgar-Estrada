import { Component, OnInit } from '@angular/core';
import {MyServiceService} from '../../services/my-service.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss'],
})
export class MyComponentComponent implements OnInit {

  constructor(public myService: MyServiceService) { }

  ngOnInit() {
    // tslint:disable-next-line: no-unused-expression
    this.myService.arrPersonas;
  }

}
