import { Injectable } from '@angular/core';
import { UserService } from '../../../@core/services/user.service';
import { Observable } from 'rxjs';
import { Iuser } from '../../../@core/models/user.model';
import {HttpClient , HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  constructor(
    private userService: UserService,
    private http: HttpClient,

  ) { }


  login(credentials: any): Observable<any> {
    const loginUrl = 'https://postman-echo.com/basic-auth';
    console.log(loginUrl);

    // const headers = new Headers();
    console.log(this.userService.getToken());
    const encodedToken = btoa(credentials.email+':'+credentials.password);

    // headers.append('Authorization', `Basic ${encodedToken}`);


    const headerDict = {
      Authorization: 'Basic '+ encodedToken,
    };
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    // return this.http.post(
    //   `${this.userService.baseUrl}/login`,
    //   credentials
    // );

    return this.http.get(loginUrl , requestOptions);
  }

  signUp(user: Iuser): Observable<any> {
    return this.http.post(
      this.userService.baseUrl + `signup`,
      user
    );
  }

    // Change password http request - requires a slightly different headers object
    changePassword(body: any, accessToken: string): Observable<any> {
      const headers = new Headers();
      body.token = accessToken['token'];
      // console.log('body', body);
      return this.http.post(
        this.userService.baseUrl + `/reset-password`,
        body,
        // { headers: headers }
      );
    }

    resetPassword(email: any): Observable<any> {
      return this.http.post(
        this.userService.baseUrl + `/forgot-password`,
        email
      );
    }
}
