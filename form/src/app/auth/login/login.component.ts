import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  onSubmit(formData: NgForm) {
    if (formData.form.invalid) return;

    const email = formData.form.value.email
    const password = formData.form.value.password

    console.log(formData.form)

    formData.form.reset()

  }
}
