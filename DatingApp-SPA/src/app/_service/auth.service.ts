import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}
  baseUrl = 'http://localhost:5000/api/auth/';

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model).pipe(
      map((response: any) => {
        const users = response;
        if (users) {
          localStorage.setItem('token', users.token);
        }
      })
    );
  }

  register(model: any){
    return this.http.post(this.baseUrl + 'register', model);
  }
}
