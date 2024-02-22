﻿using HorizonTask.Data;
using HorizonTask.DTO;
using HorizonTask.Models;
using Microsoft.AspNetCore.Mvc;

namespace HorizonTask.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public TasksController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<TasksDTO> GetTasksList()
        {
            IEnumerable<ApplicationTask> Tasks = _context.Tasks;
            return Tasks.Select(Tasks => new TasksDTO
            {
                Id = Tasks.Id,
                Name = Tasks.Name,
                Description = Tasks.Description,
                Priority = Tasks.Priority,
                IsDone = Tasks.IsDone,
            }
            );
        }

        [HttpPut]
        [Route("createTask")]

        public CreateTaskDTO createNewTask(CreateTaskDTO task)
        {
            var taskCreate = new ApplicationTask()
            {
                Name = task.taskName,
                Description = task.taskDescription,
                Priority = task.taskPriority,
            };
            _context.Add(taskCreate);
            _context.SaveChanges();
            return task;
        }

    }
}
