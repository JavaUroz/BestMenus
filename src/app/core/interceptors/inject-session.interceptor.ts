import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";

@Injectable()
export class InjectSessionInterceptor implements HttpInterceptor {
  constructor (private cookieService: CookieService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { 
    try{
      const token = this.cookieService.get('token')
      let newRequest = req.clone(
        {
          setHeaders: {
            authorization:`Bearer ${token}`
          }
        }
      )
      return next.handle(newRequest)
    } catch(err) {
      console.log('Error!', err)
      return next.handle(req)
    }
  }
}