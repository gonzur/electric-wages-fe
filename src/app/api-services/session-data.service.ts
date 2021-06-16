import { Injectable } from '@angular/core';
import { User } from "./models/User";
@Injectable({
  providedIn: 'root'
})
export class SessionDataService {
  user: User = new User("","",""); 

  constructor() { }

  startSession(jwt: string, username: string, role: string): void {
    this.user = new User(jwt,username,role); 
  }

  getUser(): User {
    return this.user;
  }

  terminate(): void {
    this.user = new User("","","");
  }
}
