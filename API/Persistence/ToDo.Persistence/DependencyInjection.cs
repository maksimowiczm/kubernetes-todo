using Microsoft.Extensions.DependencyInjection;
using ToDo.Persistence.MongoDb;

namespace ToDo.Persistence;

public static class DependencyInjection
{
    public static IServiceCollection AddPersistence(this IServiceCollection services)
    {
        services.AddMongoDb();
        return services;
    }
}