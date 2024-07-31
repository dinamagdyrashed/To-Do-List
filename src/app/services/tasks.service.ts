import { Injectable } from '@angular/core';
import { Task } from '../interface/task';
import { JsonpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: Task[] = [];

  constructor() {
    let storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    } else {
      this.tasks = [];
    }
  }

  deleteTask(index: number) {
    this.tasks = this.tasks.filter((task, i) => i !== index);
    this.StoreTasks();
  }
  saveTask(title: string, description: string) {
    this.tasks.push({
      title,
      description,
      done: false,
    });
    this.StoreTasks();
  }
  updateTask(id: any, task: Task) {
    this.tasks[id] = task;
    this.StoreTasks();
  }
  StoreTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
