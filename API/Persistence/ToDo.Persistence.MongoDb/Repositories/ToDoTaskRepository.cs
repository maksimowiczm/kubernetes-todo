using MongoDB.Driver;
using ToDo.Domain.Entites;
using ToDo.Domain.Repositories;

namespace ToDo.Persistence.MongoDb.repositories;

internal class ToDoTaskRepository : IToDoTaskRepository
{
    private readonly IMongoCollection<ToDoTask> _tasksCollection;

    public ToDoTaskRepository(IMongoClient client)
    {
        var database = client.GetDatabase("ToDo");
        _tasksCollection = database.GetCollection<ToDoTask>("tasks");
    }
    
    public async Task<List<ToDoTask>> GetAsync() =>
        await _tasksCollection.Find(_ => true).ToListAsync();

    public async Task<ToDoTask?> GetAsync(string id) =>
        await _tasksCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(ToDoTask newTask) =>
        await _tasksCollection.InsertOneAsync(newTask);

    public async Task UpdateAsync(string id, ToDoTask updatedTask) =>
        await _tasksCollection.ReplaceOneAsync(x => x.Id == id, updatedTask);

    public async Task RemoveAsync(string id) =>
        await _tasksCollection.DeleteOneAsync(x => x.Id == id);
}