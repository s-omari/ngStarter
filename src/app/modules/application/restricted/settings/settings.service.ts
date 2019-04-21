import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../../../@core/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(public http: HttpClient, public userService: UserService) { }

  public updateUser(userDetails: any): Observable<any> {
    return this.http.post(
      this.userService.baseUrl + `user`,
      userDetails
    );
  }
}
