import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TasksService } from '../../services/tasks.service';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.scss',
})
export class TaskDetailsComponent implements OnInit {
  taskId: any;
  edit: Boolean = false;
  task: any;
  constructor(
    private route: ActivatedRoute,
    private taskService: TasksService,
    private router: Router,
    private title: Title
  ) {
    this.title.setTitle('Task Details');
  }
  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id');
    this.task = this.taskService.tasks[this.taskId];
  }
  onClick() {
    this.edit = !this.edit;
  }
  taskSave() {
    this.taskService.updateTask(this.taskId, this.task);
    this.router.navigate(['/']);
  }
}
