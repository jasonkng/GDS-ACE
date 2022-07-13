import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class APIInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(environment.production);
    const apiReq = environment.production ? request.clone({url: `https://football-jason.herokuapp.com/${request.url}`}) : 
    request.clone({url: `http://localhost:5000/${request.url}`})
    return next.handle(apiReq);
  }
}
