import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {


  constructor(private api: ApiService) { }

  login() {

  }

  logout() {
  }
}
