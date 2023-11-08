import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserInfo } from 'src/app/types/UserInfo';
import { TypedFormGroup } from 'src/app/types/TypedFormGroup';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LocalStorageService } from 'src/app/services/local-storage.service';

type LoginInfo = Omit<UserInfo, "id">
type LoginForm = TypedFormGroup<LoginInfo>;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule
  ],
})
export class LoginComponent {
  loginForm: LoginForm;
  fb = inject(FormBuilder)
  storage = inject(LocalStorageService);

  constructor(public dialogRef: MatDialogRef<LoginComponent>) {
    this.loginForm = this.fb.group<LoginInfo>({
      name: '', surname: ''
    })
  }

  saveUserInfo(){
    this.storage.userInfo=this.loginForm.value as UserInfo;
    this.dialogRef.close();
  }
}
