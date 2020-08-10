import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isAuth = false;

  constructor(private router: Router) {}

  login() {
    this.isAuth = true;
    alert('isAuth  true');
  }

  logout() {
    this.isAuth = false;
    this.router.navigate(['/']);
    alert('isAuth  false');
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise(res =>
      setTimeout(() => {
        res(this.isAuth);
      }, 1000),
    );
  }
}
