import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserManagementService } from '../user-management.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css'],
})
export class UserCreationComponent implements OnInit {
  userForm = new FormGroup({
    _id: new FormControl(null),
    name: new FormControl(null),
    age: new FormControl(null),
    gender: new FormControl(null),
    email: new FormControl(null),
    position: new FormControl(null),
    maritalStatus: new FormControl(null),
    addresses: new FormGroup({
      address: new FormControl(null),
      zipCode: new FormControl(null),
      city: new FormControl(null),
      country: new FormControl(null),
    }),
  });

  constructor(private userManagementService: UserManagementService) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.userForm.value);
    // Make form null again
    this.userForm.reset();
  }
}
