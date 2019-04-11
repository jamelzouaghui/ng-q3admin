import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from './../auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    
    constructor(private authService:AuthService){}
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        //let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let authToken = this.authService.getToken();
        if (authToken) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${this.authService.getToken()}`
                }
            });
        }

        return next.handle(request);
    }
}