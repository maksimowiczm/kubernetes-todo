using Microsoft.Extensions.DependencyInjection;
using MongoDB.Driver;
using ToDo.Domain.Repositories;
using ToDo.Persistence.MongoDb.Core;
using ToDo.Persistence.MongoDb.repositories;

namespace ToDo.Persistence.MongoDb;

public static class DependencyInjection
{
    public static IServiceCollection AddMongoDb(this IServiceCollection services)
    {
        services.AddScoped<IMongoClient, MyMongoClient>();
        services.AddScoped<IToDoTaskRepository, ToDoTaskRepository>();
        return services;
    }
}