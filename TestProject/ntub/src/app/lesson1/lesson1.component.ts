import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.css']
})
export class Lesson1Component implements OnInit {
  // @Input()money: number = 0
  @Input('tw')money: number = 0
  @Output() countChange:EventEmitter<number> = new EventEmitter<number> ()
  constructor() { }

  ngOnInit() {
  }

  putNum(){
    this.countChange.emit(this.money)
  }
}
