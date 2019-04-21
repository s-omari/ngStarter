import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { UserService } from '../services/user.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    token: string;
    baseUrl: string;

    constructor(public userService: UserService) {
        this.baseUrl = environment.baseUrl;
        console.log('auth interceptor');
        console.log('stored token: ' + this.userService.getToken());

    }
    /**
     * Intercept  http calls and add  Auth Token as request header
     *
     * If request is unsuccessful with  401 - Unauthorized status ,
     * log  user out with UserService
     */


    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<any> {
        const authReq = req.clone({
          headers: req.headers
          // add stored auth token as auth header
            .set('Authorization', `Basic ${this.userService.getToken()}`)
        });

        return next.handle(authReq)
          .do(
            (success) => {},
            (error) => {
            if (error.status === 401) {
                this.userService.logOut();
            }
          });
    }

}
