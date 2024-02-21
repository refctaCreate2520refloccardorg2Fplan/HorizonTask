﻿namespace HorizonTask.DTO
{
    public class TasksDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Priority { get; set; }
        public bool IsDone { get; set; }
        public DateOnly Deadline { get; set; }
    }
}
