import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'angular_material';
  // @Input() index: any;
  userLists: {}[] = [];

  onUserAdded(userData: {
    userFullName: string;
    userNickName: string;
    userEmail: string;
    userUserName: string;
  }) {
    this.userLists.push({
      fullname: userData.userFullName,
      nickname: 'nickname : ' + userData.userNickName,
      email: 'email : ' + userData.userEmail,
      username: 'username : ' + userData.userUserName,
    });
  }
}
