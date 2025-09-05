import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RequestLogin } from '../../resources/models/RequestLogin';
import { LoginService } from '../../resources/services/loginService';
import { error } from 'console';
import { AlertService } from '../../resources/services/alert-service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardModule, InputTextModule, FormsModule, ButtonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class Login implements OnInit {
  public requestLogin!: RequestLogin;

  constructor(private loginService: LoginService, private alertService: AlertService){}

  ngOnInit(): void {
    this.requestLogin = new RequestLogin()
  }

  public doLogin(): void{
    this.loginService.doLogin(this.requestLogin).subscribe(
      (data) => {
       this.alertService.info('Funcionalidade ainda não implementada')
      },
      (httpError) =>{
        this.alertService.error(httpError.error.message)
      
      }
    )
  
  }

}
