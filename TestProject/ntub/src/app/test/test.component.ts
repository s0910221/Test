import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  tw: number = 100
  money: number = 0
  show:boolean = false
  arr:number[] = [1,2,3,4,5,6]

  users:Object[]= [
    {"name":"jack","address":"Taiwan"},
    {"name":"jack","address":"Taiwan"}
  ]


  constructor() { }

  ngOnInit() {
  }


  hello() {
    alert("Hello World!");
  }

  change(){
    this.show = !this.show
  }

}
