import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserManagementService } from '../user-management.service';
import { first } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css'],
})
export class UserCreationComponent implements OnInit {
  userForm: any;

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
    const id = this.activeRouter.snapshot.queryParamMap.get('userId');
    this.isEdit = id != null;

    if (this.isEdit) {
      this.userManagementService.users
        .pipe(first((items) => items.length !== 0))
        .subscribe((items) => {
          const item = items.find((items) => items._id === id);
          this.setFormValues(item);
        });
    }

    this.userForm = this.fb.group({
      _id: this.fb.control(null),
      name: this.fb.control(null),
      age: this.fb.control(null),
      gender: this.fb.control(null),
      email: this.fb.control(null),
      position: this.fb.control(null),
      maritalStatus: this.fb.control(null),
      addresses: this.fb.array([]),
    });

    this.addAddresses();
  }

  setFormValues(user: any) {
    this.userForm.setValue(user);
  }

  onSubmit() {
    if (this.isEdit) {
      this.userManagementService.updateUser(this.userForm.value);
      // Make form null again
      this.userForm.reset();
      this.router.navigate(['/user-list']);
    } else {
      this.userManagementService.addUserToData(this.userForm.value);
      // Make form null again
      this.userForm.reset();
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
      address: '',
      zipCode: '',
      city: '',
      country: '',
    });
  }

  addAddresses() {
    this.addresses.push(this.newAddresses());
  }

  removeAddress(i: number) {
    this.addresses.removeAt(i);
  }
}
