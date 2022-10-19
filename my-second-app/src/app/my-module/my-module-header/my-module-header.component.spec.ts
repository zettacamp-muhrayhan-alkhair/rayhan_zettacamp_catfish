import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyModuleHeaderComponent } from './my-module-header.component';

describe('MyModuleHeaderComponent', () => {
  let component: MyModuleHeaderComponent;
  let fixture: ComponentFixture<MyModuleHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyModuleHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyModuleHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
