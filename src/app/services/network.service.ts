import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  private isOnlineSubject = new BehaviorSubject<boolean>(navigator.onLine);
  public isOnline$ = this.isOnlineSubject.asObservable();

  constructor() {
    window.addEventListener('online', () => {
      console.log('✅ Conexão restaurada');
      this.isOnlineSubject.next(true);
    });

    window.addEventListener('offline', () => {
      console.log('🔴 Conexão perdida');
      this.isOnlineSubject.next(false);
    });
  }

  isOnline(): boolean {
    return navigator.onLine;
  }
}
