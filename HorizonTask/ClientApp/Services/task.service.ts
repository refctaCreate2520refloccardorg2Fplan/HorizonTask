import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TasksDTO } from '../src/app/tasklist/tasklist.component';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  controls: any;

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  createTask(Data: TaskForm) {
    return this.http.put<TasksDTO>(this.baseUrl + 'tasklist/createTask', Data);
  }
}


interface TaskForm {
  id: number;
  name: string;
  description: string;
  priority: number;
  isDone: boolean;
  deadline: Date;
}
