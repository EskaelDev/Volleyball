import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TypedFormGroup } from 'src/app/types/TypedFormGroup';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';


@Component({
  selector: 'app-new-event',
  standalone: true,
  imports: [CommonModule,
    MatDatepickerModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDialogModule],
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewEventComponent {

  dateCtrl = new FormControl<string>('', [Validators.required]);

  constructor() {
  }
}
