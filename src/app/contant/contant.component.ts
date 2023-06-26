import { Component, OnInit } from '@angular/core';
import { PractiseServiseService } from '../service/practise-servise.service';
@Component({
  selector: 'app-contant',
  templateUrl: './contant.component.html',
  styleUrls: ['./contant.component.css']
})
export class ContantComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getmassage(){
     const message = new PractiseServiseService();
     message.messagealert();
  }
}
