import { Injectable } from '@angular/core';
import { INewTaskData, ITask } from '../models/itask';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  // constructor
  constructor() {
    // const tasks = localStorage.getItem('tasks');
    // if (tasks) {
    //   this.tasks = JSON.parse(tasks);
    // }

    this.tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  }

  // tasks data array
  private tasks: ITask[] = [];

  //  get user tasks
  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  // add task
  addTask(newTaskData: INewTaskData, userId: string): void {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: newTaskData.title,
      summary: newTaskData.summary,
      dueDate: newTaskData.date,
    });

    this.saveTasksToLocalStorage(); // save tasks to local storage after adding a new task
  }

  // delete task
  deleteTask(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasksToLocalStorage(); // save tasks to local storage after deleting a task
  }

  //  save to local storage
  private saveTasksToLocalStorage(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
