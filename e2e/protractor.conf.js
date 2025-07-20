const { SpecReporter } = require('jasmine-spec-reporter');
const path = require('path');

exports.config = {
allScriptsTimeout: 11000,
specs: ['./src/**/*.e2e-spec.ts'],
capabilities: {
browserName: 'chrome'
},
chromeDriver: path.resolve(__dirname, './drivers/chromedriver.exe'),
directConnect: true,
baseUrl: 'http://localhost:8100/',
framework: 'jasmine',
jasmineNodeOpts: {
showColors: true,
defaultTimeoutInterval: 30000,
print: function () {}
},
onPrepare() {
require('ts-node').register({
project: path.join(__dirname, './tsconfig.e2e.json')

});
jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: 'pretty' } }));
}
};
