Package.describe({
  summary: "NProgress for Meteor",
  version: "0.1.0",
  git: "https://github.com/zhouzhuojie/meteor-nprogress.git",
  name: "mrt:nprogress"
});

Package.onUse(function (api) {
  api.use('jquery@1.0.0', 'client');
  api.add_files('lib/nprogress/nprogress.js', 'client');
  api.add_files('lib/nprogress/nprogress.css', 'client');
  api.add_files('lib/main.js', 'client');
  if (api.export){
    api.export('NProgress', 'client');
  }
});

if (Package.on_test) {
  Package.on_test(function (api) {
    if (Package.onTest) {
      api.use(['mrt:nprogress@0.1.0', 'tinytest', 'test-helpers'], ['client']);
    } else {
      api.use(['nprogress', 'tinytest', 'test-helpers'], ['client']);
    }
    api.add_files('test-mrt:nprogress.js', ['client']);
  });
}
