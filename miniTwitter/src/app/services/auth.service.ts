import { Injectable } from '@angular/core';
import { LoginDto } from '../dto/login.dto';
import { LoginDtoResponse } from '../dto/login.dto.response';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Register } from '../dto/register';
import { RegisterResponse } from '../dto/register.response';

const LOGIN_URL = 'https://www.minitwitter.com:3001/apiv1/auth/login';
const REGISTER_URL = 'https://www.minitwitter.com:3001/apiv1/auth/signup';
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }
  
    login(loginDto: LoginDto): Observable<LoginDtoResponse> {
      return this.http.post<LoginDtoResponse>(
        LOGIN_URL,
        loginDto,
        httpOptions
      );
    }

    register(register: Register): Observable<RegisterResponse> {
        return this.http.post<RegisterResponse>(
            REGISTER_URL,
            register,
            httpOptions
        );
    }
  }