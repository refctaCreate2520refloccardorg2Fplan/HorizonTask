import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, signal, Injectable } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { TaskService } from 'Services/task.service';
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

  /*Task: string = "no data";
    Description: string = "no data";
    Priority: number = 0;*/

  form = new FormControl('');
  taskForm = new FormGroup({
  Task: new FormControl(''),
  Description: new FormControl(''),
  Priority: new FormControl('')
  })


  private destroy$ = new Subject<void>();
  public TaskData: TasksDTO[] = [];
  newTask = signal<TasksDTO>(undefined);

  constructor(
    private route: ActivatedRoute, http: HttpClient,
    private router: Router,
    private taskService: TaskService,
    @Inject("BASE_URL") baseUrl: string) {
    http.get<TasksDTO[]>(baseUrl + 'tasks').subscribe(result => { this.TaskData = result; }, error => console.error(error));

  }
  onAddTask() {
    if (this.form.valid) {
      this.taskForm.createTask({
        Task: this.taskForm.controls['Task'].value,
        Description: this.taskForm.controls['Description'].value,
        Priority: this.taskForm.controls['Priority'].value

      }).pipe(takeUntil(this.destroy$)).subscribe(Tas => { this.newTask.set(guildDetail); });
    }
  }
}

export interface TasksDTO {
  id: number;
  name: string;
  description: string;
  priority: number;
  isDone: boolean;
  deadline: Date;
}
