import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { dummyTasks } from '../../fake-tasks-data';
import { NewTaskComponent } from '../new-task/new-task.component';
import { type INewTaskData } from '../../models/itask';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  providers: [],
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  // constructor
  constructor(private _tasksService: TasksService) {}

  // tasks = dummyTasks;

  isAddingTask: boolean = false;

  // @Input() name:string | undefined;
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string; // mean string or undefined
  @Input({ required: true }) avatar!: string;

  get selectedUserTasks() {
    // return this.tasks.filter((task) => task.userId === this.userId);
    return this._tasksService.getUserTasks(this.userId);
  }

  // property that get the image path
  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  // onCompleteTask(id: string) {
  //   //...
  //   // this.tasks = this.tasks.filter((task) => {
  //   //   return task.id !== id;
  //   // });

  //   // this._tasksService.deleteTask(id);
  // }

  onStartAddingTask(): void {
    this.isAddingTask = true;
  }

  onCloseAddTask(): void {
    this.isAddingTask = false;
  }

  // onSubmitForm(taskData: INewTaskData): void {
  //   console.log(taskData); //? just for testing

  //   // this.tasks.unshift({
  //   //   id: new Date().getTime().toString(),
  //   //   title: taskData.title,
  //   //   summary: taskData.summary,
  //   //   dueDate: taskData.date,
  //   //   userId: this.userId,
  //   // });

  //   this._tasksService.addTask(taskData, this.userId);

  //   this.isAddingTask = false; //? to close the form after adding task and show the list of tasks agan
  // }
}
