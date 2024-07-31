import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TasksService } from '../../services/tasks.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent {
  constructor(private title: Title) {
    this.title.setTitle('Add New Task');
  }
  private taskService = inject(TasksService);
  taskSave(title: any, description: any) {
    this.taskService.saveTask(title.value, description.value);
  }
}
