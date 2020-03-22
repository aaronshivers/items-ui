import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ],
})
export class LoginComponent {
  userForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    this.userForm = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  onLogin(): void {
    const email = this.userForm.value.email;
    const password = this.userForm.value.password;

    this.authService.login({ email, password })
      .subscribe(() => this.router.navigateByUrl('/'));
  }
}
