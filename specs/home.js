import HomePage from '../pages/components/home-page.js';

describe('Home', () => {
    it('Open Browser and Assert Title', async() => {
        //Open Browser
        await HomePage.open();

        //Assert Title
        await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
    });

});

describe('Get Started', () => {
    it('Click Get Started Button', async() => {

        // Open Browser
        await HomePage.open();

        // Click Get Started Button
        await HomePage.getStartedBtn.click();

        //Assert the URL contains the text
        await expect(browser).toHaveUrlContaining('get-started');

        
    });

    it('Click Logo & Assert URL does not contain get started', async() => {

        // Open Browser
        await HomePage.open();

        // Click Logo Button
        await HomePage.imageLogo.click();

        // Assert the URL does NOT contain get started
        await expect(browser).not.toHaveUrlContaining('get-started');
    
        
    });

});




// PREVIOUS CODE (Without using the functions from home-page.js) :

/*
describe('Home', () => {
    it('Open Browser and Assert Title', async() => {
        //Open Browser
        await browser.url('https://practice.sdetunicorns.com/');

        //Assert Title
        await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
    });

});

describe('Get Started', () => {
    it('Click Get Started Button', async() => {

        // Open Browser
        await browser.url('https://practice.sdetunicorns.com/');

        // Click Get Started Button
        await $('#get-started').click();

        //Assert the URL contains the text
        await expect(browser).toHaveUrlContaining('get-started');

        
    });

    it('Click Logo & Assert URL Started Button', async() => {

        // Open Browser
        await browser.url('https://practice.sdetunicorns.com/');

        // Click Logo Button
        await $('.custom-logo-link').click();

        // Assert the URL does NOT contain the text
        await expect(browser).not.toHaveUrlContaining('get-started');
    
        
    });

});
*/