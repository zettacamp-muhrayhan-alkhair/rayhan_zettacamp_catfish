import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserManagementService } from '../user-management.service';

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css'],
})
export class UserCreationComponent implements OnInit {
  userForm = this.fb.group({
    _id: this.fb.control(null, Validators.required),
    first_name: this.fb.control(null, Validators.required),
    last_name: this.fb.control(null, Validators.required),
    civility: this.fb.control(null, Validators.required),
  });

  constructor(
    private fb: FormBuilder,
    private userManagementService: UserManagementService,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(newPost: any) {
    if (this.userForm.valid) {
      this.userManagementService.addUser(newPost);
      // Make form null again
      this.userForm.reset();
      this.router.navigate(['users']);
      Swal.fire({
        title: 'Congratulation!',
        text: 'You have added new user',
        icon: 'success',
      });
    } else {
      Swal.fire({
        title: 'Bad Attitude',
        text: 'You have bad attitude',
        icon: 'error',
      });
    }
  }
}
