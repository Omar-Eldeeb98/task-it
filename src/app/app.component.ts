import { Component, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { DUMMY_USERS } from './fake-users-data';
import { TasksComponent } from './components/tasks/tasks.component';
// import { CardComponent } from './shared/card/card.component';
// import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  // props
  title = 'first-angular-app';
  users = DUMMY_USERS;

  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  // ctor
  constructor() {}

  // lifecycle hook
  ngOnInit(): void {}

  // methods
  onSelectUser(id: string): void {
    // console.log(`the selected user id is : ${event}`);  //? just for testing
    this.selectedUserId = id;
  }
}
