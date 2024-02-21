namespace HorizonTask.DTO
{
    public class CreateTaskDTO
    {
        public string taskName { get; set; }
        public string? taskDescription { get; set; }
        public int taskPriority { get; set; }
    }
}
