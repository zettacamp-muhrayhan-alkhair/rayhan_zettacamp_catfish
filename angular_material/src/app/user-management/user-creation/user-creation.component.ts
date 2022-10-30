import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserManagementService } from '../user-management.service';
import { first } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css'],
})
export class UserCreationComponent implements OnInit {
  // userForm: any;
  userForm: any = this.fb.group({
    _id: this.fb.control(null, Validators.required),
    name: this.fb.control(null, Validators.required),
    age: this.fb.control(null, Validators.required),
    gender: this.fb.control(null, Validators.required),
    email: this.fb.control(null, [Validators.required, Validators.email]),
    position: this.fb.control(null, Validators.required),
    maritalStatus: this.fb.control(null, Validators.required),
    addresses: this.fb.array([]),
  });

  constructor(
    private userManagementService: UserManagementService,
    private activeRouter: ActivatedRoute,
    private router: Router,
    public translateService: TranslateService,
    private fb: FormBuilder
  ) {}

  isEdit: boolean = false;

  selectedLang: any = null;

  ngOnInit(): void {
    const id = this.activeRouter.snapshot.queryParamMap.get('id');
    this.isEdit = id != null;

    if (this.isEdit) {
      this.userManagementService.users$
        .pipe(first((items) => items.length !== 0))
        .subscribe((items) => {
          const item: any = items.find((items) => items._id === id);
          for (let i = 0; i < item.addresses.length; i++) {
            this.addAddresses();
          }
          this.userForm.patchValue(item);
        });
    } else {
      this.addAddresses();
    }
  }

  setFormValues(user: any) {
    this.userForm.setValue(user);
  }

  onSubmit() {
    if (this.isEdit) {
      this.userManagementService.updateUser(this.userForm.value);
      Swal.fire('User Updated', 'You just updated the user', 'success');
      // Make form null again
      this.userForm.reset();
      // ROute to user list
      this.router.navigate(['/user-list']);
    } else {
      this.userManagementService.addUserToData(this.userForm.value);
      Swal.fire('User Added', 'You just added new user', 'success');
      // Make form null again
      this.userForm.reset();
      // ROute to user list
      this.router.navigate(['/user-list']);
    }
  }

  setLanguage(lang: string) {
    this.selectedLang = lang;
    this.translateService.use(lang);
  }

  get addresses(): FormArray {
    return this.userForm.get('addresses') as FormArray;
  }

  newAddresses(): FormGroup {
    return this.fb.group({
      address: this.fb.control(null, Validators.required),
      zipCode: this.fb.control(null, Validators.required),
      city: this.fb.control(null, Validators.required),
      country: this.fb.control(null, Validators.required),
    });
  }

  addAddresses() {
    this.addresses.push(this.newAddresses());
  }

  removeAddress(i: number) {
    this.addresses.removeAt(i);
  }
}
