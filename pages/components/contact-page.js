class ContactPage {
    open() {
        return browser.url('/contact');
    }

    get nameValue() {
        return $('.contact-name input');
    }

    get emailValue() {
        return $('.contact-email input');
    }

    get phoneValue() {
        return $('.contact-phone input');
    }

    get messageValue() {
        return $('.contact-message textarea');
    }

    get submitBtn() {
        return $('.evf-submit');
    }

    get successText() {
        return $('div[role="alert"]');
    }
}

export default new ContactPage();
