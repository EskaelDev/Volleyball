import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewEventComponent } from './components/new-event/new-event.component';
import { MainPageComponent } from './components/main-page/main-page.component';

const routes: Routes = [
  // { path: '', component: MainPageComponent },
  // { path: 'new-event', component: NewEventComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
