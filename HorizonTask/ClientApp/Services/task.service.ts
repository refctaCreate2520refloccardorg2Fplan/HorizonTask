import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TasksDTO } from '../src/app/tasklist/tasklist.component';


@Injectable({
  providedIn: 'root'
})

export class TaskService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  createTask(Task: CreateTaskDTO) {
    return this.http.put<CreateTaskDTO>(this.baseUrl + 'tasklist/createTask', Task);
  };
}


export interface CreateTaskDTO {
  taskName: string;
  taskDescription: string;
  taskPriority: number;
}

