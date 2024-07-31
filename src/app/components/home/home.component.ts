import { Component, inject, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from 'zone.js/lib/zone-impl';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private title: Title) {
    this.title.setTitle('To Do list');
  }
  tasks: Task[] = [];
  done: boolean = false;
  public tasksService = inject(TasksService);

  deleteTask(i: number) {
    this.tasksService.deleteTask(i);
  }
  taskDone(i: number) {
    this.tasksService.tasks[i].done = true;
    this.tasksService.StoreTasks();
  }
}
