import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form with 2 controls',() =>{
    expect(component.loginForm.contains('email')).toBeTruthy();
    expect(component.loginForm.contains('password')).toBeTruthy();
    expect(component.loginForm.contains('admin')).toBeTruthy();
  });

  it('should make the email control required',() =>{
    let control = component.loginForm.get('email');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
  

  it('should make the password control required',() =>{
    let control = component.loginForm.get('password');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('Admin feild should always false',() =>{
    let control = component.loginForm.get('admin');

    expect(control.value).toBeFalse();
  });

});
