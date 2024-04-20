class HomePage {

    open() {
        return browser.url('/');
    }

    get getStartedBtn() {
        return $('#get-started');
    }

    get imageLogo() {
        return $('.custom-logo-link');
    }

    get textHeading() {
        return $('.elementor-widget-container h1');
    }
}

export default new HomePage();