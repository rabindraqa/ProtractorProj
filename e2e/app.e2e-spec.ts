import {browser, protractor} from 'protractor';
import {LoginPage} from './login.po';
import { delay } from 'q';
import { Dashboard } from './dashboard.po';
let page = new LoginPage();
const EC = protractor.ExpectedConditions;
let dashboardPage = new Dashboard
describe('Login page', () => {
 beforeEach(() => {
   browser.get('/login');
   let page = new LoginPage();
   
 });
 
 it('should have correct titles and button text', () => {
  let page = new LoginPage();
  expect(page.usernameLabel.getText()).toEqual('Username');
   expect(page.passwordLabel.getText()).toEqual('Password');
   expect(page.signIn.getText()).toEqual('Sign in');
 });
 
 it ('should display an error message to the user if they provided incorrect credentials', () => {
  page.username.sendKeys('123');
   page.password.sendKeys('123');
   page.signIn.click();
   browser.wait(EC.visibilityOf(page.errorMessage));
   expect(page.errorMessage.getText()).toEqual('Incorrect username or password');

 });
 
 it ('should redirect the user to the dashboard page if they provided correct credentials', () => {
  let page = new LoginPage();
  page.username.sendKeys('correct');
  delay(20)
  page.password.sendKeys('correct');
  delay(20)
  page.signIn.click();
  browser.wait(EC.visibilityOf(dashboardPage.title));
   expect(dashboardPage.title.isPresent()).toBeTruthy();
 });
});
