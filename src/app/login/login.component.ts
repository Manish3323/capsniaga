import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { User } from '../shared/user.model';
import { ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f')form: NgForm;
  @ViewChild('login')loginEl: ElementRef;
  @ViewChild('register')regEl: ElementRef;
  @ViewChild('activeLogin')activeLEl: ElementRef;
  @ViewChild('activeReg')activeREl: ElementRef;
  user: User = {
    username: '',
    email: '',
    password: '',
    userType: '',
    gender: '',
    contact: ''
  };
  userType: string;
  submitted = false;
  types= [ {key: 'player', value: 'Player'}, {key: 'instructor', value: 'Instructor'} ];
  genders = ['Male', 'Female'];
  constructor(private userService: UserService, private renderer: Renderer2) { }

  ngOnInit() {
     this.renderer.listen(this.activeLEl.nativeElement, 'click', (event) => {
      // Do something with 'event'
      this.renderer.addClass(this.activeLEl.nativeElement, 'active');  
     // this.renderer.removeClass(this.activeREl.nativeElement, 'active');
      this.renderer.addClass(this.loginEl.nativeElement, 'active');
      this.renderer.removeClass(this.regEl.nativeElement, 'active');
    });
     this.renderer.listen(this.activeREl.nativeElement, 'click', (event) => {
      // Do something with 'event'
      // this.renderer.addClass(this.activeREl.nativeElement, 'active');
      this.renderer.removeClass(this.activeLEl.nativeElement, 'active');
      this.renderer.removeClass(this.loginEl.nativeElement, 'active');
      this.renderer.addClass(this.regEl.nativeElement, 'active');
    });
  }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.form.value.username;
    this.user.password = this.form.value.password;
    this.user.userType = this.form.value.type;
    this.userService.onValidateUser(this.user);
    this.form.reset();
  }
}
