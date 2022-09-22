import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormControl,FormBuilder} from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private formBuilder:FormBuilder, private authService:AuthService) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      user: [''],
      password: [''],
    });
  }

  formLogin:any;

  login(){
    if(this.authService.login(this.formLogin.value)){
      this.router.navigate(['inicio']);
    }else{
      alert("Login Fallido");
    }
  }
}
