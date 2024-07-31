import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'add-task',
    component: AddTaskComponent,
  },
  {
    path: 'task/:id',
    component: TaskDetailsComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];
