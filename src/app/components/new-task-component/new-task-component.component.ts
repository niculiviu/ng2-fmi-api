import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-task-component',
  templateUrl: './new-task-component.component.html',
  styleUrls: ['./new-task-component.component.css']
})
export class NewTaskComponentComponent implements OnInit {
  @Input() categoryId;
  
  @Output() newTaskEvent: EventEmitter<any> =new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }


  addTask(task,cat){
    var data={
      task:task,cat:cat
    }
    this.newTaskEvent.emit(data);
  }

  callMe(){
    console.log("Am fost apelata din dashboard");
  }

}
