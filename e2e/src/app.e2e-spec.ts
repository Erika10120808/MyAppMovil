const { browser, by, element } = require('protractor');

describe('MadresConectadas App', () => {
beforeEach(() => {
browser.get('/');
});

it('debería mostrar el título de la página de login', async () => {
const titulo = await element(by.css('ion-title')).getText();
expect(titulo).toContain('Inicio'); 
});
});
