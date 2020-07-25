import BasePage from "./BasePage";

class HomePage extends BasePage{
    get loginLink(){ return $('[qa="login-link"]') }
    get registerLink(){ return $('[qa="register-link"]') }

    open() {
        super.open('/');
    }
}

export default new HomePage();