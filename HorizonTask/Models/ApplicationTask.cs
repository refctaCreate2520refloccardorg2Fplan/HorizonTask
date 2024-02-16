﻿using System.ComponentModel.DataAnnotations;

namespace HorizonTask.Models
{
    public class ApplicationTask
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Priority { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public bool IsDone { get; set; } = false;
    }
}
