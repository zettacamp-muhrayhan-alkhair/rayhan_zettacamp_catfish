import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  OnDestroy,
  AfterViewInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
} from '@angular/core';

@Component({
  selector: 'app-input-details',
  templateUrl: './input-details.component.html',
  styleUrls: ['./input-details.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class InputDetailsComponent
  implements
    OnInit,
    OnChanges,
    OnDestroy,
    AfterViewInit,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked
{
  @Input('userInputted') user: any;

  constructor() {
    console.log('constructur');
  }

  ngOnInit(): void {
    alert('User Added');
    console.log('form ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(`Add user on behalf of : ${this.user.fullname}`);
    console.log('form ngOnChanges');
  }

  ngAfterViewInit(): void {
    // console.log(
    //   `The command has initialized the component and user has been added. Thank you!`
    // );
    console.log('form ngAfterViewInit');
  }
  ngDoCheck(): void {
    console.log('form ngDoChecks');
  }

  ngOnDestroy(): void {
    console.log('Destroy Compenent');
  }

  ngAfterContentInit(): void {
    console.log('form ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('form ngAfterContentChecked');
  }

  ngAfterViewChecked(): void {
    console.log('form ngAfterViewChecked');
  }
}
