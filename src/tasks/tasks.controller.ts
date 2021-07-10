import {Body, Controller, Get, Post} from '@nestjs/common';
import {TasksService} from "./tasks.service";
import {TaskModel} from "./task.model";
import {CreateTaskDto} from "./dto/create-task.dto";


@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService) {
    }

    @Get()
    getAllTask(): TaskModel[] {
        return this.taskService.gteAllTask();
    }

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto): TaskModel {
        return this.taskService.createTask(createTaskDto);
    }

    // this method without dto
    // @Post()
    // createTask(@Body('title') title: string, @Body('description') description: string) {
    //     return this.taskService.createTask(title, description);
    // }


}
