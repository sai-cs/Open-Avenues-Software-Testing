During our 8-week micro-internship session, we worked to create automated software test cases to examine and assess the functionality of the website: https://practice.sdetunicorns.com/

We utilized JavaScript and WebdriverIO to create test cases for the home page, about page, contact page, and blog page. 

The home.js file runs test cases to open the browser and check whether the browser has the correct title we’re looking for, then proceeds with the next tests which check if we can click the “Get Started” button and it also makes sure that our URL after clicking the button contains “get-started”.

The about.js file runs the test case to open up the about page and check if the browser contains this URL: https://practice.sdetunicorns.com/about/

The contact.js file runs test cases to open the contact page and fill in the input fields for name, email, phone number, and message. After that, it proceeds to click the submit button and check whether we get the success text or not.

The blog.js file runs test cases to open the blog page, get a list of all recent posts, and check whether each item in the list has more than 10 characters. After that, we check if the amount of recent posts equals 5 posts or not. 

In the home.js, contact.js, and blog.js, we utilize the [spec]-page.js files within our pages/components folder to create classes for each spec that contains the open() and get functions for our CSS selectors. 

For example, contact.js would have a page file called contact-page.js with an exportable class called ContactPage(). We import these classes into our spec files to achieve greater efficiency and better readability.
