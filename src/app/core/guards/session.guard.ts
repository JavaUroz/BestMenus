import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SessionGuard implements CanActivate {

  constructor(private cookie: CookieService, private router: Router){}

  canActivate(
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise <boolean | UrlTree> | boolean | UrlTree {
  return this.checkCookieSession();
  }

  checkCookieSession(): boolean{
    try{
      const hasToken: boolean = this.cookie.check('token')
      if (!hasToken){
        this.router.navigate(['/', 'auth'])
      }
      return hasToken
    } catch(e) {
      console.log('Error:', e)
      return false
    }
  }
}
