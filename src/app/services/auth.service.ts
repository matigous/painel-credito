import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'auth_token';

  isAuthenticated = signal(false);

  login() {
    const token = this.generateMockToken();

    localStorage.setItem(this.tokenKey, token);
    this.isAuthenticated.set(true);
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.isAuthenticated.set(false);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  decodeToken() {
    const token = this.getToken();

    if (!token) return null;

    try {
      return JSON.parse(atob(token));
    } catch {
      return null;
    }
  }

  isTokenExpired(): boolean {
    const payload = this.decodeToken();

    if (!payload?.exp) return true;

    const now = Math.floor(Date.now() / 1000);

    return payload.exp < now;
  }

  private generateMockToken(): string {
    const payload = {
      sub: 'user123',
      name: 'Usuário Teste',
      role: 'admin',
      exp: Math.floor(Date.now() / 1000) + 60 * 60, // 1h
    };

    return btoa(JSON.stringify(payload));
  }
}
