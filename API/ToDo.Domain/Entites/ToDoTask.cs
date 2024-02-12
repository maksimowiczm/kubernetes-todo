namespace ToDo.Domain.Entites;

public class ToDoTask
{
    public string? Id { get; set; } = Guid.NewGuid().ToString();
    public required string Title { get; set; }
    public string? Description { get; set; } = null;
}