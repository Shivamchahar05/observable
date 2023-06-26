import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PractiseServiseService {

  constructor() { }
  messagealert(){
    alert("subscribe the channal and did not dislike");
  } 

  username = new BehaviorSubject<string>("she")
   

}
