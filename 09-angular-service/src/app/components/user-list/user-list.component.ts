import {
  Component,
  OnInit
}
from '@angular/core';

import { User }
from '../../models/user';

import { UserService }
from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl:
    './user-list.component.html'
})
export class UserListComponent
implements OnInit {

  users: User[] = [];

  constructor(
    private userService:
      UserService
  ) {}

  ngOnInit(): void {

    this.userService
      .getUsers()
      .subscribe(users => {

        this.users = users;

      });

  }

}