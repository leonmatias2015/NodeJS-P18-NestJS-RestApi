import {Injectable} from '@nestjs/common';
import {TaskModel, TaskStatus} from "./task.model";
import {v4 as uuid} from 'uuid';
import {CreateTaskDto} from "./dto/create-task.dto";

@Injectable()
export class TasksService {

    private tasks: TaskModel[] = [];

    gteAllTask(): TaskModel[] {
        return this.tasks;
    }

    createTask(createTaskDto: CreateTaskDto): TaskModel {
        const {title, description} = createTaskDto;

        const task: TaskModel = {
            id: uuid(),
            title,
            description,
            status: TaskStatus.OPEN
        };

        this.tasks.push(task);
        return task;

    }

}
