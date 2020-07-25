import HomePage from "../pages/HomePage";

describe('TEST HOMEPAGE', () => {
    it('verify login and register button is displayed', () => {
        HomePage.open();
        expect(HomePage.loginLink.isDisplayed()).true;
        expect(HomePage.registerLink.isDisplayed()).true;

    });
})
