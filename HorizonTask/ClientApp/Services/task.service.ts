import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TasksDTO } from '../src/app/tasklist/tasklist.component';


@Injectable({
  providedIn: 'root'
})

export class TaskService {
  controls: any;

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  createTask(Data: CreateTaskDTO) {
    return this.http.put<CreateTaskDTO>(this.baseUrl + 'tasklist/createTask', Data);
  }
}


export interface CreateTaskDTO {
  taskName: string;
  taskDescription: string;
  taskPriority: number;
}

/* 
export interface TaskForm {
  name: string;
  description: string;
  priority: number;
}
*/
