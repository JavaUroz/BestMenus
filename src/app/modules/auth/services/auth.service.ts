import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.api;

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    const body = {
            email,
            password
          }
    return this.http.post(`${this.apiUrl}/auth/login/`, body)
  }

  register(email: string, password: string): Observable<any> {
    const body = {
            email,
            password
          }
    return this.http.post(`${this.apiUrl}/auth/signup`, body)
  }
}