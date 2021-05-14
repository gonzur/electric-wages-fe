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
  private logoutRoute = this.apiBase + "logout";

  constructor(private httpClient: HttpClient, private sessionData: SessionDataService) { }


  public logout(): Observable<any> {
    return this.httpClient.get<any>(this.logoutRoute);
  }
  
}
