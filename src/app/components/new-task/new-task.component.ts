import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type INewTaskData } from '../../models/itask';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  providers: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  constructor(private _tasksService: TasksService) {}

  @Input({ required: true }) userId: string = '';

  @Output() close = new EventEmitter<void>();

  //* to send data from child to parent we use event emmiter
  // @Output() add = new EventEmitter<INewTaskData>();

  // props for two way data binging
  // enteredTittle:string = '';
  // enteredSummary:string = '';
  // enteredDate:string = '';

  // two way data binging using signals [this is new way]
  enteredTittle = signal<string>('');
  enteredSummary = signal<string>('');
  enteredDate = signal<string>('');

  onCancelAddingTask(): void {
    this.close.emit();
  }

  onSubmitForm(): void {
    // this.add.emit({
    //   title: this.enteredTittle(),
    //   summary: this.enteredSummary(),
    //   date: this.enteredDate(),
    // });

    this._tasksService.addTask(
      {
        title: this.enteredTittle(),
        summary: this.enteredSummary(),
        date: this.enteredDate(),
      },
      this.userId
    );

    this.close.emit(); // to close the modal
  }
}
