import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { TaskStatus } from '../task.model';

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  description: string;
}
export class GetTaskFilterDto {
  @IsOptional()
  @IsNotEmpty()
  search: string;
  @IsOptional()
  @IsIn([TaskStatus.DONE, TaskStatus.IN_PROGRESS, TaskStatus.OPEN])
  status: TaskStatus;
}
