import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { ApiService } from './api.service';
import { SessionDataService } from './session-data.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private api: ApiService, private sessionData: SessionDataService) { }

  login(username:string, password: string) {
    this.api.login(username, password).subscribe((resp) =>{
      let role = 'time-keeper';
      let jwt: string = resp.headers.get('Authorization');
      this.sessionData.startSession(jwt, username, role);
    });
  }

  logout() {
    this.sessionData.terminate();
  }
}
