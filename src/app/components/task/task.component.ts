import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { type ITask } from '../../models/itask';
import { CardComponent } from '../../shared/card/card.component';
import { CommonModule, DatePipe } from '@angular/common';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe, CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent implements OnInit {
  // constructor
  constructor(private _tasksService: TasksService) {}

  // props
  @Input({ required: true }) task!: ITask;

  // @Output() complete = new EventEmitter<string>();

  // life cycle hook
  ngOnInit(): void {
    console.log('the task component is initialized successfully!'); // just for testing
  }

  // methods
  onCompleteTask(): void {
    // this.complete.emit(this.task.id);
    this._tasksService.deleteTask(this.task.id);
  }
}
