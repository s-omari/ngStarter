import { Injectable } from '@angular/core';
import { UserService } from '../../../../@core/services/user.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iuser } from '../../../../@core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private userService: UserService,
    private http: HttpClient
    ) {

  }

  signUp(user: Iuser): Observable<any> {
    return this.http.post(
      this.userService.baseUrl + `signup`,
      user
    );
  }
}
