import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const isAuth = !!localStorage.getItem('usuarioAutenticado');
  if (!isAuth) {
    window.location.href = '/registro';
    return false;
  }
  return true;
};
