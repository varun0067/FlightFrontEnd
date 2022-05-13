import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { RegisterUserComponent } from './register-user.component';

describe('RegisterUserComponent', () => {
  let component: RegisterUserComponent;
  let fixture: ComponentFixture<RegisterUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule],
      declarations: [ RegisterUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form with 8 controls',() =>{
    expect(component.registrationForm.contains('name')).toBeTruthy();
    expect(component.registrationForm.contains('email')).toBeTruthy();
    expect(component.registrationForm.contains('mobile')).toBeTruthy();
    expect(component.registrationForm.contains('age')).toBeTruthy();
    expect(component.registrationForm.contains('gender')).toBeTruthy();
    expect(component.registrationForm.contains('password')).toBeTruthy();
    expect(component.registrationForm.contains('confirmPassword')).toBeTruthy();
    expect(component.registrationForm.contains('admin')).toBeTruthy();
  });

  it('name control should not contain numbers',() =>{
    let control = component.registrationForm.get('name');
    control.setValue('abc12');
    expect(control.valid).toBeFalsy();
  });

  it('name control should not contain special charecters',() =>{
    let control = component.registrationForm.get('name');
    control.setValue('abc12@-');
    expect(control.valid).toBeFalsy();
  });

  it('name control should only contain alphabets and spaces',() =>{
    let control = component.registrationForm.get('name');
    control.setValue('test test');
    expect(control.valid).toBeTruthy();
  });

  it('email control should contain both (@ and .)',() =>{
    let control = component.registrationForm.get('email');
    control.setValue('test@gmail');
    expect(control.valid).toBeFalsy();
  });

  it('email control should contain both (@ and .)',() =>{
    let control = component.registrationForm.get('email');
    control.setValue('test.com');
    expect(control.valid).toBeFalsy();
  });

  it('email control should contain both (@ and .)',() =>{
    let control = component.registrationForm.get('email');
    control.setValue('test@test.com');
    expect(control.valid).toBeTruthy();
  });

  it('Mobile Number control should contain 10 digits and must start with (6 or 7 or 8 or 9)',() =>{
    let control = component.registrationForm.get('mobile');
    control.setValue('85269875');
    expect(control.valid).toBeFalsy();
  });

  it('Mobile Number control should contain 10 digits and must start with (6 or 7 or 8 or 9)',() =>{
    let control = component.registrationForm.get('mobile');
    control.setValue('4236985478');
    expect(control.valid).toBeFalsy();
  });

  it('Mobile Number control should contain 10 digits and must start with (6 or 7 or 8 or 9)',() =>{
    let control = component.registrationForm.get('mobile');
    control.setValue('8310200746');
    expect(control.valid).toBeTruthy();
  });

  it('should make the password control required',() =>{
    let control = component.registrationForm.get('password');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('password control should be minimum of length 6',() =>{
    let control = component.registrationForm.get('password');
    control.setValue('abc');
    expect(control.valid).toBeFalsy();
  });

  it('password control should be minimum of length 6',() =>{
    let control = component.registrationForm.get('password');
    control.setValue('abcdeg');
    expect(control.valid).toBeTruthy();
  });

  it('should make the gender control required',() =>{
    let control = component.registrationForm.get('gender');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });


});
