import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { SessionDataService } from './session-data.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiBase = "localhost:3000/api/";
  private loginRoute = this.apiBase + "login";

  constructor(private httpClient: HttpClient, private sessionData: SessionDataService) { }


  public login(username: string, password: string): Observable<any> {
    return this.httpClient.post(this.loginRoute,
      {
        "username": username,
        "password": password
      }, {observe: 'response'});
  }
  
}
