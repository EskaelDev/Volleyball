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
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

type NewEvent = {
  time: string;
  date: Date;
  blik: number;
  bankAccount: number;
}

type NewEventForm = TypedFormGroup<NewEvent>;

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
    MatCardModule,
    MatIconModule,
    MatDialogModule,],
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewEventComponent {

  newEventForm: NewEventForm;
  fb = inject(FormBuilder);
  constructor() {
    this.newEventForm = this.fb.group({
      time: new FormControl<string>('', [Validators.required, Validators.pattern('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$')]),
      date: new FormControl<Date>(null!, Validators.required),
      blik: new FormControl<number>(null!, [Validators.required, Validators.max(999999999), Validators.min(100000000)]),
      bankAccount: new FormControl<number>(null!, Validators.required)
    });
  }
  selectedDate: Date | null;

  createNewEvent() {
    this.newEventForm.controls.date.setValue(this.selectedDate)
    
    console.log(this.newEventForm.value);
    console.log(this.newEventForm.valid);
    console.log(this.newEventForm.errors);
  }
}
