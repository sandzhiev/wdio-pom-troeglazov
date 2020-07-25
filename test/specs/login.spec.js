import RegisterPage from "../pages/RegisterPage";
import {user} from "../data/register.data";
import LoginPage from "../pages/LoginPage";

describe('VERIFY SUCCESSFUL LOGIN', () => {
    it('should register new user and verify login is successful', () => {
        RegisterPage.open();
        RegisterPage.registerNewUser(user);
        // LoginPage.open();
        LoginPage.loginAs(user);
        browser.waitUntil(() => LoginPage.successMsgDisplayed())
    });
})
