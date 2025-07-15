exports.config = {
  framework: 'jasmine',
  specs: ['./src/*.e2e-spec.ts'],
  capabilities: {
    browserName: 'chrome'
  },
  directConnect: true, // 👈💥 Aquí está la magia: NO usa Selenium
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
  }
};
