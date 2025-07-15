exports.config = {
framework: 'jasmine',
seleniumAddress: 'http://localhost:4444/wd/hub',
specs: ['src/app.e2e-spec.ts'],
capabilities: {
browserName: 'chrome'
},
directConnect: true,
onPrepare: function () {
require('ts-node').register({
    project: require('path').join(__dirname, './tsconfig.e2e.json')
});
}
};
