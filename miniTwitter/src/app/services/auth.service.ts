import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDto } from '../dto/login.dto';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/login-response.interface';
const LOGIN_URL = 'https://www.minitwitter.com:3001/apiv1/auth/login';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})
export class AuthService{
    constructor(private http: HttpClient) { }

    login(loginDto: LoginDto): Observable<LoginResponse>{
        return this.http.post<LoginResponse>(
            LOGIN_URL,
            loginDto,
            httpOptions
        );
    }
}