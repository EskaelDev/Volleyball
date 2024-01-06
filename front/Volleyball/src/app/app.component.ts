import { Component, inject } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
localStorage = inject(LocalStorageService)

get userName(){
  return this.localStorage.userInfo.name;
}
}
