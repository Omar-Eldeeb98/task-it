import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  OnInit,
  output,
  Output,
  signal,
} from '@angular/core';
import { DUMMY_USERS } from '../../fake-users-data';
import { IUser } from '../../models/iuser';
import { CardComponent } from '../../shared/card/card.component';

// global const
// const randomUsers = Math.floor(Math.random() * DUMMY_USERS.length)

//? this is type alias
// type User =  {
//     id:string;
//     avatar:string;
//     name:string;
//   };

//? this is interface that represent my object getted form the parent component
// interface User {
//     id:string;
//     avatar:string;
//     name:string;
//  }

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  // هيستقبل داتا من الاب بالشكل ده [old way]
  // @Input({required:true}) avatar!:string;
  // @Input({required:true}) name!:string;
  // @Input({required:true}) id!:string;

  // accepting object as input [الابن هيستقبل داتا من الاب]
  @Input({ required: true }) user!: IUser;

  @Input({ required: true }) selected!: boolean;

  // هيستقبل داتا من الاب بالشكل ده [new way using signals]
  //  readonly avatar = input.required<string>(); // input signal
  //  readonly name = input.required<string>(); // input signal

  // @Output() --> decorator  [used to share data form child to parent]
  // @Output() select = new EventEmitter<string>();

  // another way for initilaize output() function,  [send data from child to parent]
  readonly select = output<string>();

  // properties
  //   selectedUser = signal(DUMMY_USERS[randomUsers]);
  //   pathImage = computed(()=>{
  //   return 'assets/users/' + this.selectedUser().avatar;
  //  } )

  //   pathImage = computed(()=>{
  //   return 'assets/users/' + this.avatar();
  //  } )

  // this is a pathImage path getter [prop]
  get pathImage() {
    return 'assets/users/' + this.user.avatar;
  }

  // constructor
  constructor() {}

  // component life cycle
  ngOnInit(): void {}

  // methods
  onSelectUser(): void {
    // alert('user is selectec!');
    // console.log(this.name);

    this.select.emit(this.user.id);

    // console.log(this.selectedUser);

    // const randomUsers = Math.floor(Math.random() * DUMMY_USERS.length)
    // this.selectedUser = DUMMY_USERS[randomUsers]
    // this.selectedUser.set(DUMMY_USERS[randomUsers])  // set new value to signal variable
  }
}
