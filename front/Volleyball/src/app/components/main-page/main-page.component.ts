import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnInit {
  dialog = inject(MatDialog);
  localStorage = inject(LocalStorageService)
  title = 'Volleyball';

  displayLoginPage(): boolean {
    return !this.localStorage.userInfo
  }

  ngOnInit(): void {
    if (this.displayLoginPage())
      this.openDialog()
  }

  openDialog(): void {
    this.dialog.open(LoginComponent, {
      width: '400px'
    });
  }
}
