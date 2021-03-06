import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private newCategory: string;
  private newTask: string;
  private categories: any = [];
  private tasks: any = [];
  @ViewChild('newTaskInput') newTaskInput;
  constructor() { }

  ngOnInit() {
  }

  addNewCategory(cat) {
    let object = {
      id: new Date(),
      categoryName: cat
    }

    this.categories.push(object);
    this.newCategory = '';
  }

  addTask(data) {
    let object = {
      id: new Date(),
      taskName: data.task,
      categoryId: data.cat
    }
    this.newTaskInput.callMe();
    this.tasks.push(object);
  }

  removeTask(i) {
    this.tasks.splice(i, 1);
  }

}
