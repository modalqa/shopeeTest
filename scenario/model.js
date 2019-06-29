import { Selector } from 'testcafe';

export default class Page {
    constructor () {
        //Happy Scenario or Normal Case
        this.inputEmail = Selector('#login_field');
        this.inputPass = Selector('#password');
        this.buttonLogin = Selector('.btn-primary');
        this.inputBody  = Selector('pre');
        this.public = Selector('#new_gist > div > div.form-actions > button:nth-child(1)');
        this.pilihGist = Selector('a').withText('gist:636e01e0e0cc694082f7bd3fa6836c44')
        this.seeAll = Selector('a').withText('See all of your gists');
        this.clickBtEdit = Selector('a').withText('Edit');
        this.inputDesc = Selector('#gists > input');
        this.clickUpdate = Selector('button').withText('Update public gist');
        this.buttonDelete = Selector('//*[@id="gist-pjax-container"]/div[1]/div/div[1]/ul/li[2]/form/button')
        
       


    }

}