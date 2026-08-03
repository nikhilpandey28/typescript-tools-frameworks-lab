import { Injectable }
from '@angular/core';

import { Observable, of }
from 'rxjs';

import { User }
from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUsers():
    Observable<User[]> {

    return of([
      {
        id: 1,
        name: 'Nikhil'
      },
      {
        id: 2,
        name: 'Rahul'
      }
    ]);

  }

}