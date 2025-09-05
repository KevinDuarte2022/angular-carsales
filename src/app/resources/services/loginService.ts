import { Injectable } from '@angular/core';
import { RequestLogin } from '../models/RequestLogin';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ResponseLogin } from '../models/ResponseLogin';
import { AuthenticatorService } from './authenticator-service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
 constructor(
  private httpClient: HttpClient,
  private authenticatorService: AuthenticatorService

 ) {}

  public doLogin (requestLogin: RequestLogin): Observable<ResponseLogin>{
    return this.httpClient
    .post<ResponseLogin>('http://localhost:8080/api/login', requestLogin)
    .pipe(
      tap((loginResponse: ResponseLogin) => (this.authenticatorService.loginResponse = loginResponse))
    )
  }
}
