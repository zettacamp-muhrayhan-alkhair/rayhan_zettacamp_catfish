import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyModuleMainComponent } from './my-module-main.component';

describe('MyModuleMainComponent', () => {
  let component: MyModuleMainComponent;
  let fixture: ComponentFixture<MyModuleMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyModuleMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyModuleMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
