using System.Diagnostics;
using ToDo.Logic;
using ToDo.Persistence;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services
    .AddPersistence()
    .AddLogic();

var app = builder.Build();

if (app.Environment.IsDevelopment() || true)
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

var pid = Environment.ProcessId;
var id = Guid.NewGuid();
app.MapGet("/api/status", () => new { PID = pid, ID = id });

app.MapPost("/susu", () =>
{
    // 🤫🤫🤫
    Environment.Exit(0);

    // await context.Response.CompleteAsync();
    // await app.StopAsync();
});

app.UseHttpsRedirection();

app.MapControllers();

app.Run();