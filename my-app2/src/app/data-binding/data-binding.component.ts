import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.styl']
})
export class DataBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  subTitle = "It's fazool to learn angular"
  number = 10
  users = {userId: 1 , firstName:"ayesha"};

  colorval="red";
  clsName='one';
  placeVal='enter the value';
  hrefVal= 'https://www.google.com/'
  updatedlink ='https://oracle.com'
  showAlert(name){
    alert("hy! " + name+ " how are you?")
  }
  showConsole(){
    console.log("hello")
  }
}
