using ToDo.Domain.Entites;

namespace ToDo.Domain.Repositories;

public interface IToDoTaskRepository
{
    Task<List<ToDoTask>> GetAsync();
    Task<ToDoTask?> GetAsync(string id);
    Task CreateAsync(ToDoTask newBook);
    Task UpdateAsync(string id, ToDoTask updatedBook);
    Task RemoveAsync(string id);
}