describe('About', () => {
    it('Open the About Page', async() => {

        //Open Browser
        await browser.url('https://practice.sdetunicorns.com/about/')

        //Assert the URL
        await expect(browser).toHaveUrl('https://practice.sdetunicorns.com/about/')
    });

});
