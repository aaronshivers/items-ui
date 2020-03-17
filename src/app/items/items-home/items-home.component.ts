import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-items-home',
  templateUrl: './items-home.component.html',
  styleUrls: [ './items-home.component.scss' ],
})
export class ItemsHomeComponent {

  constructor(private authService: AuthService) {}

  onLogout(): void {
    this.authService.logout();
  }
}

