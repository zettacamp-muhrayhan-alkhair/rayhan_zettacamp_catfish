import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css'],
})
export class UserCreationComponent implements OnInit {
  addresses = new FormGroup({
    address: new FormControl(null),
    zipCode: new FormControl(null),
    city: new FormControl(null),
    country: new FormControl(null),
  });

  userForm = new FormGroup({
    _id: new FormControl(null),
    name: new FormControl(null),
    age: new FormControl(null),
    gender: new FormControl(null),
    email: new FormControl(null),
    position: new FormControl(null),
    maritalStatus: new FormControl(null),
    addresses: this.addresses,
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.userForm.value);
    // Make form null again
    this.addresses = new FormGroup({
      address: new FormControl(null),
      zipCode: new FormControl(null),
      city: new FormControl(null),
      country: new FormControl(null),
    });

    this.userForm = new FormGroup({
      _id: new FormControl(null),
      name: new FormControl(null),
      age: new FormControl(null),
      gender: new FormControl(null),
      email: new FormControl(null),
      position: new FormControl(null),
      maritalStatus: new FormControl(null),
      addresses: this.addresses,
    });
  }
}
