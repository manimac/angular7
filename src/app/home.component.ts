import { Component } from '@angular/core';
import { customService } from './customservice';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  providers:[customService]
})
export class HomeComponent {
  private service;
  private testArr;showDiv;showClass;styleProp;
  constructor (private _customService : customService){
    _customService.setValue('test the service');
    this.service = _customService.getContent();
    this.testArr = [
      {
        name : 'Aravind',
        age : 25
      },
      {
        name : 'Dinesh',
        age : 23
      },
      {
        name : 'Ragu',
        age : 22
      }
    ]
    this.showDiv = false;
    this.showClass = false;
    this.styleProp = {
      background:'green',
      color:'white'
    }
  }
  
  
}
