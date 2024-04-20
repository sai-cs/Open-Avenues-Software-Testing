import BlogPage from '../pages/components/blog-page.js';

describe('Blog', () => {
    it('Get a list of All Recent Posts & Assert their Length', async () => {
        // Open the blog page
        await BlogPage.open();

        // Get all the recent post elements
        const recentPostList = await BlogPage.postList;

        // Iterate over each item and assert that their lengths are greater than 10 characters
        for (const item of recentPostList) {
            const text = await item.getText();
            expect(text.length).toBeGreaterThan(10);
        }

        // Assert the total count of rows is equal to 5
        expect(recentPostList.length).toBe(5); 
    });

});
