import RegisterPage from "../pages/RegisterPage";
import { text, user } from "../data/register.data";
import LoginPage from "../pages/LoginPage";

describe('TEST REGISTER', () => {
    before(() => {
        RegisterPage.open();
    })

    it('should verify header text', () => {
        expect(RegisterPage.header.getText()).eq(text.header);
    });

    it('should populate fields and submit form', () => {
        RegisterPage.firstNameField.setValue(user.firstName);
        RegisterPage.lastNameField.setValue(user.lastName);
        RegisterPage.phoneField.setValue(user.phone);
        RegisterPage.emailField.setValue(user.email);
        RegisterPage.passwordField.setValue(user.password);
        RegisterPage.submitForm();
        browser.waitUntil(() => RegisterPage.successMsgDisplayed());
    });
})
