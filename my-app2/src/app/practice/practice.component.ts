import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.styl']
})
export class PracticeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ShowMessage= true;
  colorName ='blue'
  bgColor= '#ffffcc'
  show: boolean = true;
  showActions: boolean = true; 
  clsName ='one'
  clsName2='two'
  SwitchValue="two";
  users = [
    {userId: 1 , firstName:"ayesha"},
    {userId: 2 , firstName:"sadia"},
    {userId: 3 , firstName:"zainab"},
    {userId: 4 , firstName:"amna"},
    {userId: 5 , firstName:"nayab"},
    {userId: 6 , firstName:"jiya"},

  ]
  
  contacts =
  [
    {name: "test1", email:"test1@test1.com"},
    {name: "test2", email:"test1@test2.com"},
    {name: "test3", email:"test1@test3.com"},
    {name: "test4", email:"test1@test4.com"}
    ]
readMe() {
     console.log('button clicked');
}
}
