import { Component } from '@angular/core';
import { customService } from './customservice';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  providers:[customService]
})
export class HomeComponent {
  private service;
  private testArr;showDiv;showClass;styleProp;price1;price2;price3;
  constructor (private _customService : customService,private _http:HttpClient){
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
    this.getUsers();
    this.price1 = 20;
    this.price2 = 30;
    this.price3 = 50;
  }
  
  getUsers(){
    this._http.get('http://localhost:4200/assets/test.txt')
    .subscribe((data)=>{
      console.log(data)
      this.testArr = data;
    })
  }
  
}
