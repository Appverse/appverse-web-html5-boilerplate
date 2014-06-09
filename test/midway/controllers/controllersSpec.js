//
// test/midway/controllers/controllersSpec.js
//
describe("Midway: Testing Controllers", function () {

    var tester;
    beforeEach(function () {
        if (tester) {
            tester.destroy();
        }
        tester = ngMidwayTester('App');
    });

    it('should load the view home.html properly when /home route is accessed', function (done) {
        tester.visit('/home', function () {
            tester.path().should.eq('/home');
            var current = tester.inject('$state').current;
            expect(current.templateUrl).to.eql('views/home.html');
            done();
        });
    });

});
