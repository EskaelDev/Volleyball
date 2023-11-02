import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserInfo } from 'src/app/types/UserInfo';
import { TypedFormGroup } from 'src/app/types/TypedFormGroup';

type LoginInfo = Omit<UserInfo, "id">
type LoginForm = TypedFormGroup<LoginInfo>;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, ReactiveFormsModule, FormsModule],
})
export class LoginComponent {
  loginForm: LoginForm;
  fb = inject(FormBuilder)

  constructor(public dialogRef: MatDialogRef<LoginComponent>) {
    this.loginForm = this.fb.group<LoginInfo>({
      name: '', surname: ''
    })
  }
}
