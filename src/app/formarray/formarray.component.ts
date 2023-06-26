import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.css']
})
export class FormarrayComponent implements OnInit {
  reactive!: FormGroup;

  constructor() { 
    
    
    
  }

  ngOnInit(): void {
    this.reactive=new FormGroup({
      skills:new FormArray([
        new FormControl(null),
        new FormControl(null),
        new FormControl(null)
      ])
    })

  }

}
