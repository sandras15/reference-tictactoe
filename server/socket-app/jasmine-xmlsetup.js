require('./globals');

var reporters = require('jasmine-reporters');

var junitReporter = new reporters.JUnitXmlReporter({
    savePath: './xmltests',
    consolidateAll: false
});
jasmine.getEnv().addReporter(junitReporter);