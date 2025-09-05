import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { AuthenticatorService } from './authenticator-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGardianService implements CanActivate {

  constructor(private authenticatorService: AuthenticatorService){

  }

  canActivate(): boolean { 
    return this.authenticatorService.isAuthenticated()
  }
  
}
