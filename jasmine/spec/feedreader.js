/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).toBeGreaterThan(0);
        });

        /* Test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('URLs are correctly defined', function() {
            var len = allFeeds.length;
            for (i=0; i<len; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).toBeGreaterThan(0);
            }
         });

        /* Test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('Names are correctly defined', function() {
            var len = allFeeds.length;
            for (i=0; i<len; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).toBeGreaterThan(0);
            }
         });
    });


    describe('The menu', function() {

        /* Test  ensures the menu element is
         * hidden by default. 
         */
        it('Menu is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
   

         /* Test ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('Menu changes visibility when menu icon is clicked', function() {
            var menuIcon = $('.menu-icon-link');
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
     });

    describe('Initial Entries', function() {
        /* Test  ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });
        
        it('At least one .entry exists', function() {
            expect($('.feed').find('.entry').length).toBeGreaterThan(0);
        });

     });


    describe('New Feed Selection', function() {
        
        var oldFeed = '',
            currentFeed = '';
        
        beforeEach(function(done) {
            oldFeed = $('.feed').html();
            currentFeed = loadFeed(1, function() {
                done();
            });
        });

        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        it('loadFeed actually changes content', function() {
            expect(oldFeed).not.toEqual(currentFeed);
        });

    });


}());
