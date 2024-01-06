import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { LoginComponent } from '../login/login.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DataStoreService, SignedMember } from 'src/app/services/DataStore.service';
import { first } from 'rxjs';


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
    MatTableModule,
    MatDialogModule],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnInit {
  
  destroyRef = inject(DestroyRef);
  dataStore = inject(DataStoreService);
  dialog = inject(MatDialog);
  localStorage = inject(LocalStorageService)
  
  title = 'Volleyball';
  codeCtrl = new FormControl<string>('');

  dataSource: MatTableDataSource<SignedMember>;
  displayedColumns = ['name', 'signDate']
  
  goToSignups() {
    this.dataStore.GetMembers(this.codeCtrl.value as string)
      .pipe(first())
      .subscribe(data => this.dataSource = new MatTableDataSource(data));
  }
  
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
