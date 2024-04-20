import ContactPage from '../pages/components/contact-page.js';

describe('About', () => {
    it('Test for the Contact Page', async () => {
        
        // Open Browser and Navigate to the Contact Page
        await ContactPage.open();

        // Fill all the input fields
        await ContactPage.nameValue.setValue('John Doe');
        await ContactPage.emailValue.setValue('johndoe1@gmail.com');
        await ContactPage.phoneValue.setValue('2958375023');
        await ContactPage.messageValue.setValue('Looking forward to this!');

        // Submit the Info
        await ContactPage.submitBtn.click();

        // Assert the success message
        await expect(ContactPage.successText).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
    });
});
