import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthenticateService} from "../services/authenticate.service";
import {PhotoService} from "../services/photo.service";

@Component({
  selector: 'app-login',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login: string = "";
  password: string = "";
  hello: string = "";

  constructor(private loginService: AuthenticateService) {}
  onSubmitLogin(): void {
    this.loginService.loginUser(this.login, this.password);
  }
}
