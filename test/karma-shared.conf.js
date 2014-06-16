module.exports = function () {
    return {
        basePath: '../',
        frameworks: ['mocha'],

        // coverage reporter generates the coverage
        reporters: ['progress', 'coverage'],

        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'app/scripts/{*!(api)/*.js,!(app).js}': 'coverage'
        },

        // optionally, configure the reporter
        coverageReporter: {
            type: 'lcov',
            dir: 'test/coverage/'
        },

        browsers: ['Chrome'],
        autoWatch: true,

        // these are default values anyway
        singleRun: false,
        colors: true,

        files: [
            //3rd Party Code
            'app/bower_components/jquery/jquery.min.js',
            'app/bower_components/angular/angular.min.js',
            'app/bower_components/angular-touch/angular-touch.min.js',
            'app/bower_components/modernizr/modernizr.js',
 //            'app/bower_components/bootstrap-sass/js/*.js',
            'app/bower_components/angular-bootstrap/ui-bootstrap.min.js',
            'app/bower_components/angular-cookies/angular-cookies.min.js',
            'app/bower_components/angular-ui-router/release/angular-ui-router.min.js',
            'app/bower_components/angular-resource/angular-resource.min.js',
            'app/bower_components/angular-cache/dist/angular-cache.min.js',

            //App-specific Code
            'app/bower_components/lodash/dist/lodash.underscore.min.js',
            'app/bower_components/restangular/dist/restangular.min.js',

            'app/scripts/api/modules/api-cache.js',
            'app/scripts/api/modules/api-configuration.js',
            'app/scripts/api/modules/api-detection.js',
 //            'app/scripts/api/modules/api-logging.js',
            'app/scripts/api/modules/api-main.js',

            'app/bower_components/lodash/dist/lodash.underscore.min.js',
            'app/bower_components/restangular/dist/restangular.min.js',
            'app/scripts/api/modules/api-rest.js',

            'app/scripts/api/modules/api-security.js',

            'app/scripts/api/modules/api-utils.js',

            'app/scripts/api/directives/*.js',
            'app/scripts/app.js',
            'app/scripts/controllers/*.js',
            'app/scripts/states/*.js',

            //Test-Specific Code
            'node_modules/chai/chai.js',
            'test/lib/chai-should.js',
            'test/lib/chai-expect.js'
        ]
    };
};
