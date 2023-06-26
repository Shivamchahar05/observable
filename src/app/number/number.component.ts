import { Component, OnInit } from '@angular/core';
import { PractiseServiseService } from '../service/practise-servise.service';
@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getmassage(){
    const msg = new PractiseServiseService();
    msg.messagealert();
  }

}
