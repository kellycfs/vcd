import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  form_login(f: NgForm) {
    if (!f.valid) {
      return;
    }
    this.loginService.login(f.controls.email.value, f.controls.senha.value)
    .then(ok => this.getUsuario());

    f.controls.email.setValue('');
    f.controls.senha.setValue('');
  }

  getUsuario() {

  }
}
