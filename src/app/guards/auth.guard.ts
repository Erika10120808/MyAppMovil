import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // Verifica si el usuario está autenticado (por ejemplo, en localStorage)
  const isAuth = !!localStorage.getItem('usuarioAutenticado');
  if (!isAuth) {
    window.location.href = '/registro';
    return false;
  }
  return true;
};
