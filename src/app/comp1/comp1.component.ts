import { Component, OnInit } from '@angular/core';
import { PractiseServiseService } from '../service/practise-servise.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor( private practice:PractiseServiseService) { }

  ngOnInit(): void {
  }

  onchange(name:any){
    this.practice.username.next(name.value);
  }

}
