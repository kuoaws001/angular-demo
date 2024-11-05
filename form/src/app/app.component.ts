import { Component } from '@angular/core';

import { LoginComponent } from './auth/login/login.component';
import { UsersComponent } from './users/users.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [LoginComponent, UsersComponent],
})
export class AppComponent {}
