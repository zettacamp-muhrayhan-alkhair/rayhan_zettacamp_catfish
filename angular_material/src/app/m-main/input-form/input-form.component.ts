import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent implements OnInit {
  // @Input() index: any;
  @Output() userAdded = new EventEmitter<{
    userFullName: string;
    userNickName: string;
    userEmail: string;
    userUserName: string;
  }>();
  @Output() deleted = new EventEmitter();
  buttonclick: boolean = false;
  // @Output() buttonClicked = new EventEmitter<buttonClick: boolean = !this.buttonClicked>();
  newFullName: string = '';
  newNickname: string = '';
  newEmail: string = '';
  newUsername: string = '';

  constructor() {}

  ngOnInit(): void {}

  onAddNewUser() {
    // this.buttonClicked = !this.buttonClick;
    this.userAdded.emit({
      userFullName: this.newFullName,
      userNickName: this.newNickname,
      userEmail: this.newEmail,
      userUserName: this.newUsername,
    });
  }

  // onDeleted() {
  //   this.deleted.emit(this.index);
  // }
}
