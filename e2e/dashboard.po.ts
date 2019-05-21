import{by ,element} from 'protractor';

export class Dashboard {
    get title() {
      return element(by.css('h1'));
    }
    
    get logoutLink() {
      return element(by.css('.header__logout'));
    }
   }