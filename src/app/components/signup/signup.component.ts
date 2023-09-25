import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterModel } from 'src/app/models/register-model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;
  registerModel: RegisterModel;
  success = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router:Router) {
    this.registerForm = this.formBuilder.group({
      username: '',
      email: '',
      firstName:'',
      lastName:'',
      password: '',
      confirmPassword: ''
    });
    this.registerModel = {
      username: '',
      email: '',
      firstName:'',
      lastName:'',
      password: '',
      confirmPassword: ''
    };
  }

  ngOnInit() {
  }

  onSubmit() {
    this.registerModel.username = this.registerForm.get('username')?.value;
    this.registerModel.email = this.registerForm.get('email')?.value;
    this.registerModel.firstName = this.registerForm.get('firstName')?.value;
    this.registerModel.lastName = this.registerForm.get('lastName')?.value;
    this.registerModel.password = this.registerForm.get('password')?.value;
    this.registerModel.confirmPassword = this.registerForm.get('confirmPassword')?.value;

    debugger
    this.authService.register(this.registerModel).subscribe({
      complete: ()=>{
        debugger;
        console.log('register succes');
        this.success = true;
        //this.router.navigateByUrl('/register-success');
      },
      error: (e)=>{
        console.log(e);
        
      }
    });
  
  }
  
}
