import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  constructor() { }

  GetMembers(code: string): Observable<SignedMember[]> {
    const members: SignedMember[] = [{
      name: 'Adam',
      signDate: new Date()
    },
    {
      name: 'Monika',
      signDate: new Date()
    },
    {
      name: 'Piotr',
      signDate: new Date()
    },
    {
      name: 'Mariusz',
      signDate: new Date()
    },
    ]

    return of(members);
  }
}


export type SignedMember = {
  name: string;
  signDate: Date;
}