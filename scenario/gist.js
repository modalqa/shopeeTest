import { Selector } from 'testcafe';
import Page from './model';
import config from './config';

const page = new Page();

fixture `Fixture`
    .page `${config.baseUrl}`;

test('create', async t => {
    await t
    .maximizeWindow()
    .setTestSpeed(0.5)
    .typeText(page.inputEmail, 'depfaris@gmail.com')
    .typeText(page.inputPass, 'Cermat123')
    .click(page.buttonLogin)
    .navigateTo('https://gist.github.com/')
    .typeText(page.inputBody, 'f')
    .click(page.public)
});
test('see all', async t => {
    await t 
    .maximizeWindow()
    .typeText(page.inputEmail, 'depfaris@gmail.com')
    .typeText(page.inputPass, 'Cermat123')
    .click(page.buttonLogin)
    .navigateTo('https://gist.github.com/')
    .click(page.seeAll)
   
});

test('edit', async t => {
    await t 
    .maximizeWindow()
    .typeText(page.inputEmail, 'depfaris@gmail.com')
    .typeText(page.inputPass, 'Cermat123')
    .click(page.buttonLogin)
    .navigateTo('https://gist.github.com/')
    .click(page.seeAll)
    .click(page.pilihGist)
    .click(page.clickBtEdit)
    .typeText(page.inputDesc, 'faris test')
    .click(page.clickUpdate)
   
});

test('delete', async t => {
    await t 
    .maximizeWindow()
    .typeText(page.inputEmail, 'depfaris@gmail.com')
    .typeText(page.inputPass, 'Cermat123')
    .click(page.buttonLogin)
    .navigateTo('https://gist.github.com/')
    .click(page.pilihGist)
    .click(page.buttonDelete)
   
});

