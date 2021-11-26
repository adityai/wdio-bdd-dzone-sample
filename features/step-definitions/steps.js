const { Given, When, Then } = require('@cucumber/cucumber');

const LoginPage = require('../pages/login.page');
const SecurePage = require('../pages/secure.page');

Given('the user is on login page', function () {
    LoginPage.open();
    expect(browser).toHaveTitle('The Internet');
});

When('the user enters username as {string} and password as {string}', function (username, password) {
    LoginPage.userNameTextBox.setValue(username);
    LoginPage.passwordTextBox.setValue(password);
});

When('clicks on login button', function () {
    LoginPage.loginButton.click();
});

Then('the user must navigate to secure area page displaying a message {string}', function (successMessage) {    
    expect(SecurePage.secureAreaElement).toExist();
    expect(SecurePage.secureAreaElement).toHaveTextContaining('Secure Area');
    expect(SecurePage.messageElement).toExist();
    expect(SecurePage.messageElement).toHaveTextContaining(successMessage);
});

Then('the user must remain on login page displaying a message {string}', function (errorMessage) {
    expect(LoginPage.loginPageElement).toExist();
    expect(LoginPage.loginPageElement).toHaveTextContaining('Login Page');
    expect(LoginPage.messageElement).toExist();
    expect(LoginPage.messageElement).toHaveTextContaining(errorMessage);
});