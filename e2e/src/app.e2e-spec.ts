import { browser } from 'protractor';

describe('Madres Conectadas App', () => {
it('debería tener un título', async () => {
await browser.get('http://localhost:8100');
const title = await browser.getTitle();
expect(title).toEqual('MadresConectadas2.0');
});
});
