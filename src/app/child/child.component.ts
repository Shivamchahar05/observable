import { Component, Input, OnInit ,Output,EventEmitter} from '@angular/core';
import { Observable } from 'rxjs';
import { PractiseServiseService } from '../service/practise-servise.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  obdata:any;
  u_name:any
  // data!:Observable<any>;
  constructor( private practice:PractiseServiseService) { }
  @Input() parentname:any;
  @Input() empdetails:any;
  @Input() array:any
  @Input() emp_name:any
  child='shivam'
 
  chlidparent={
    name:'shivam',
    age:22,
    profile:"software developer"
  }
  shivamname='yadav'
  @Output() childtoparent:EventEmitter<any>=new EventEmitter();
  @Output() name:EventEmitter<any>=new EventEmitter();
  ngOnInit(): void {
    console.log(this.parentname,"parentname");
    new Observable(observer=>{
      setTimeout(() => {
       observer.next("PROCESSING")
      },);
      // 
      setTimeout(() => {
        observer.next("shipped")
       }, 5000);
      //  
      setTimeout(() => {
        observer.next("Delivered")
       }, 10000);
    }).subscribe(val=>{
      this.obdata=val
    })

    // 
    this.practice.username.subscribe(res=>{
      this.u_name=res
    })
  }
  send(){
    this.childtoparent.emit(this.chlidparent)
    this.name.emit(this.shivamname)
    console.log('hiiiiiiii');
  }
 

  

}
