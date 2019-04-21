import { UserService } from '../../../../@core/services/user.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {

  constructor(
    private http: HttpClient,
    private userService: UserService,

  ) { }

  /**
   * Change password.
   * @param data old and new password
   */
  changePassword(data: any) {
    return this.http.post(
      this.userService.baseUrl + '/user/update-password',
      data
    );
  }



}
