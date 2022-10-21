import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent implements OnInit {
  @Output() userAdded = new EventEmitter<{
    userFullName: string;
    userNickName: string;
    userEmail: string;
    userUserName: string;
  }>();
  @Output() deleted = new EventEmitter();
  buttonclick: boolean = false;
  @ViewChild('nickNameInput') nickNameInput: ElementRef;
  @ViewChild('userNameInput') userNameInput: any;
  activeButton: boolean = false;

  constructor() {}

  ngOnInit(): void {
    alert('I am Form Input');
    this.repeatTime();
  }

  repeatTime() {
    setTimeout(() => {
      this.activeButton = true;
    }, 2000);
  }

  ngAfterViewInit(): void {
    // console.log(
    //   `The command has initialized the component and user has been added. Thank you!`
    // );
    console.log('input ngAfterViewInit');
  }
  ngDoCheck(): void {
    console.log('input ngDoChecks');
  }

  ngOnDestroy(): void {
    console.log('Destroy Compenent');
  }

  ngAfterContentInit(): void {
    console.log('input ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('input ngAfterContentChecked');
  }

  ngAfterViewChecked(): void {
    console.log('input ngAfterViewChecked');
  }

  onAddNewUser(fullNameInput: HTMLInputElement, emailInput: HTMLInputElement) {
    this.userAdded.emit({
      userFullName: fullNameInput.value,
      userNickName: this.nickNameInput.nativeElement.value,
      userEmail: emailInput.value,
      userUserName: this.userNameInput.nativeElement.value,
    });
    this.nickNameInput.nativeElement.value = '';
    this.userNameInput.nativeElement.value = '';
    fullNameInput.value = '';
    emailInput.value = '';
  }
}
