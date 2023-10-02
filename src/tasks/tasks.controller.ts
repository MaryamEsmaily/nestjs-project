import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto, GetTaskFilterDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskServices: TasksService) {}

  @Get()
  getTasks(@Query() filterDto: GetTaskFilterDto): Task[] {
    if (Object.keys(filterDto).length) {
      return this.taskServices.getFilteredTasks(filterDto);
    }
    return this.taskServices.getAllTasks();
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.taskServices.getTaskById(id);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string) {
    return this.taskServices.deleteTask(id);
  }

  @Post()
  createNewTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.taskServices.createNewTask(createTaskDto);
  }

  @Patch('/:id/status')
  updateTaskStatus(@Body() status: TaskStatus, @Param('id') id: string): any {
    return this.taskServices.updateTaskStatus(id, status);
  }
}