using Microsoft.AspNetCore.Mvc;
using ToDo.Domain.Entites;
using ToDo.Logic;

namespace ToDo.Api.Controllers;

[Route("api/[controller]")]
public class ToDoTaskController(ToDoTaskService taskService) : ControllerBase
{
    [HttpGet]
    public async Task<List<ToDoTask>> GetAsync() => await taskService.GetAsync();

    [HttpGet("{id:guid}")]
    public async Task<ActionResult<ToDoTask>> Get(Guid id)
    {
        var book = await taskService.GetAsync(id.ToString());

        if (book is null)
        {
            return NotFound();
        }

        return book;
    }

    public class ToDoTaskCreate
    {
        public required string Title { get; set; }
        public string? Description { get; set; } = null;

        public ToDoTask Map() => new() { Title = Title, Description = Description };
    }

    [HttpPost]
    public async Task<IActionResult> Post(ToDoTaskCreate task)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest();
        }

        var newTask = await taskService.CreateAsync(task.Map());
        return CreatedAtAction(nameof(Get), new { id = newTask.Id }, newTask);
    }

    [HttpPut("{id:guid}")]
    public async Task<IActionResult> Update(Guid id, ToDoTaskCreate updatedTaskDto)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest();
        }

        var task = await taskService.GetAsync(id.ToString());

        if (task is null)
        {
            return NotFound();
        }

        var updatedTask = updatedTaskDto.Map();
        updatedTask.Id = task.Id;

        await taskService.UpdateAsync(id.ToString(), updatedTask);

        return NoContent();
    }

    [HttpDelete("{id:guid}")]
    public async Task<IActionResult> Delete(Guid id)
    {
        var task = await taskService.GetAsync(id.ToString());

        if (task is null)
        {
            return NotFound();
        }

        await taskService.RemoveAsync(id.ToString());

        return NoContent();
    }
}