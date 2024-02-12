using Microsoft.Extensions.DependencyInjection;

namespace ToDo.Logic;

public static class DependencyInjection
{
    public static IServiceCollection AddLogic(this IServiceCollection services)
    {
        services.AddScoped<ToDoTaskService>();
        return services;
    }
}
