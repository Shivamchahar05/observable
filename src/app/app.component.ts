import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  child:any
  title = 'practice';
  name='shivam chahar'
  employee_name='harsh'
  rec:any;
  empdetails={
    Name:'shivam chahar',
    age:22,
    profile:'software developer',
    company:'appinventiv technology'
  }
  array=[1,2,3,4,5,6,7,8,9,]
  recived(event:any){
    this.child=event
    console.log(event,'hiiiii');
    
  }
  reciv(event:any){
    this.rec=event
  }
  ngOnInit() {
  }
  
}
