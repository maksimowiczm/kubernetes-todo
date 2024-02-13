using System.Diagnostics;
using Microsoft.AspNetCore.Http.HttpResults;
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

app.UseHttpsRedirection();

app.MapControllers();

var pid = Environment.ProcessId;
var id = Guid.NewGuid();
app.MapGet("/api/status", () => new { PID = pid, ID = id });

app.Run();