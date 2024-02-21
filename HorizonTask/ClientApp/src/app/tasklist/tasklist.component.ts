import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, signal, Injectable } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { TaskService, CreateTaskDTO } from 'Services/task.service';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';


@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css',

})
export class TasklistComponent {


  taskForm = new FormGroup(
    {
      taskName: new FormControl(''),
      taskDescription: new FormControl(''),
      taskPriority: new FormControl('')
  })


  private destroy$ = new Subject<void>();
  public TaskData: TasksDTO[] = [];
 // newTask = signal<TasksDTO>(undefined);

  constructor(
    private route: ActivatedRoute, http: HttpClient,
    private router: Router,
    private taskService: TaskService,
    @Inject("BASE_URL") baseUrl: string) {
    http.get<TasksDTO[]>(baseUrl + 'tasks').subscribe(result => { this.TaskData = result; }, error => console.error(error));

  }

  taskName: string = "no data";
  taskDescription: string = "no data";
  taskPriority: number = 0;

  onAddTask() {
    if (this.taskForm.valid) {
      this.taskService.createTask({
        taskName: this.taskService.controls['taskName'].value,
        taskDescription: this.taskService.controls['taskDescription'].value,
        taskPriority: this.taskService.controls['taskPriority'].value
      }
      ).subscribe();
  }
  }

} 

export interface TasksDTO {
  id: number;
  name: string;
  description: string;
  priority: number;
  isDone: boolean;
}
