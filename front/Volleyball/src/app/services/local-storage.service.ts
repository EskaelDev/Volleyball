import { Injectable } from '@angular/core';
import {UserInfo} from '../types/UserInfo'

@Injectable()
export class LocalStorageService {
  private readonly keyPrefix: string = 'valbal_';
  private readonly userInfoKey: string = this.keyPrefix + 'user'
  constructor() { }

  hasKey(key: string): boolean {
    return !!localStorage.getItem(key);
  }

  setItem<T>(key: string, item: T) {
    localStorage.setItem(key, JSON.stringify(item));
  }

  getItem<T>(key: string): T {
    const item = localStorage.getItem(key);

    if (!item) {
      return null as any;
    }

    return JSON.parse(item) as T;
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }

  get userInfo(): UserInfo {
    return this.getItem<UserInfo>(this.userInfoKey);
  }

  set userInfo(data: UserInfo) {
    data.id = crypto.randomUUID();
    this.setItem(this.userInfoKey, data);
  }
}
