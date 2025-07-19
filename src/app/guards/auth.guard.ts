import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isAuth = !!localStorage.getItem('usuarioAutenticado');

  if (state.url === '/login') {
    return true;
  }

  if (!isAuth) {
    router.navigate(['/login']); 
    return false;
  }

  return true;
};
