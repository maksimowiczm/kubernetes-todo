using ToDo.Domain.Entites;
using ToDo.Domain.Repositories;

namespace ToDo.Logic;

public class ToDoTaskService(IToDoTaskRepository taskRepository)
{
    public Task<List<ToDoTask>> GetAsync() => taskRepository.GetAsync();

    public Task<ToDoTask?> GetAsync(string id) => taskRepository.GetAsync(id);

    public async Task<ToDoTask> CreateAsync(ToDoTask newTask)
    {
        await taskRepository.CreateAsync(newTask);
        return newTask;
    }

    public Task UpdateAsync(string id, ToDoTask updatedTask) => taskRepository.UpdateAsync(id, updatedTask);

    public Task RemoveAsync(string id) => taskRepository.RemoveAsync(id);
}