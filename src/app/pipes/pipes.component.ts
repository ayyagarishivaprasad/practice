import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  title: string;
  todaydate: Date;
  jsonval: { name: string; age: string; address: { a1: string; a2: string; }; };
  months: string[];

  constructor() { }

  ngOnInit() {

    this.title = 'my-first-app';  
    this.todaydate = new Date();  
    this.jsonval = {name: 'Alex', age: '25', address:{a1: 'Paris', a2: 'France'}};  
    this.months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun',  
      'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];  
  }

}
