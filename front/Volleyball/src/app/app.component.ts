import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocalStorageService } from './services/local-storage.service';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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
      width: '250px'
    });
  }
}
