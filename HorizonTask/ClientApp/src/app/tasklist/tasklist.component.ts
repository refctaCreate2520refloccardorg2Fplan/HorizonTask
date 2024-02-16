import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css'
})
export class TasklistComponent {
  public TaskData: TasksDTO[] = [];

  constructor(
    http: HttpClient,
    @Inject("BASE_URL") baseUrl: string) {
    http.get<TasksDTO[]>(baseUrl + 'Tasks').subscribe(result => { this.TaskData = result; }, error => console.error(error));}
}

export interface TasksDTO {
  id: number;
  name: string;
  description: string;
  priority: number;
  isDone: boolean;
}
