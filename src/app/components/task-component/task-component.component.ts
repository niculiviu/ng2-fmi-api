import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-task-component',
  templateUrl: './task-component.component.html',
  styleUrls: ['./task-component.component.css']
})
export class TaskComponentComponent implements OnInit {
@Input() task;
@Input() category;

  constructor() { }

  ngOnInit() {
  }

}
