import { browser, by, element } from 'protractor';

describe('MadresConectadas App', () => {

beforeEach(async () => {
await browser.get('/');
});

it('debería mostrar el título de la página de login', async () => {
const titulo = await element(by.css('ion-title')).getText();
expect(titulo.toLowerCase()).toContain('inicio'); 
});

it('debería mostrar el campo de correo electrónico', async () => {
const emailInput = element(by.css('input[type="email"]'));
expect(await emailInput.isPresent()).toBe(true);
});

it('debería mostrar el campo de contraseña', async () => {
const passwordInput = element(by.css('input[type="password"]'));
expect(await passwordInput.isPresent()).toBe(true);
});

it('debería mostrar el botón de iniciar sesión', async () => {
const loginButton = element(by.css('ion-button'));
expect(await loginButton.isPresent()).toBe(true);
});

});
