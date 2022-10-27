import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserManagementService } from '../user-management.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css'],
})
export class UserCreationComponent implements OnInit {
  // _id = null;

  userForm: any = new FormGroup({
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

  isEdit: boolean = false;

  constructor(
    private userManagementService: UserManagementService,
    private router: ActivatedRoute
  ) {
    // if (this.router.snapshot.params['id']) {
    //   this._id = this.router.snapshot.params['id'];
    // } else {
    //   this._id = null;
    // }
  }

  ngOnInit(): void {
    const id = this.router.snapshot.queryParamMap.get('userId');
    this.isEdit = id != null;
    console.log(this.isEdit);

    if (this.isEdit) {
      this.userManagementService.users
        .pipe(first((items) => items.length !== 0))
        .subscribe((items) => {
          const item = items.find((items) => items._id === id);
          this.setFormValues(item);
        });
    }
  }

  setFormValues(user: any) {
    this.userForm.setValue(user);
  }

  onSubmit() {
    if (this.isEdit) {
      this.userManagementService.updateUser(this.userForm.value);
      // Make form null again
      this.userForm.reset();
    } else {
      this.userManagementService.addUserToData(this.userForm.value);
      // Make form null again
      this.userForm.reset();
    }
  }
  // onSubmit() {
  //   if (this.router.snapshot.params['id']) {
  //     // this.userManagementService.editUser(this._id, this.userForm.value)
  //   } else {
  //     this.userManagementService.addUserToData(this.userForm.value);
  //   }

  //   // Make form null again
  //   this.userForm.reset();
  // }

  // onSubmit() {
  //   this.userManagementService.addUserToData(this.userForm.value);
  // }
}
