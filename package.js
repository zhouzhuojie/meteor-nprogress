Package.describe({
    summary: "NProgress for Meteor",
    version: "0.2.0",
    git: "https://github.com/zhouzhuojie/meteor-nprogress.git",
    name: "mrt:nprogress"
});

Package.onUse(function (api) {
    api.use('jquery@1.0.0', 'client');
    api.add_files('lib/nprogress/nprogress.js', 'client');
    api.add_files('lib/nprogress/nprogress.css', 'client');
    api.add_files('lib/main.js', 'client');
    api.export('NProgress', 'client');
});

Package.onTest(function (api) {
    api.use(['mrt:nprogress', 'tinytest'], 'client');
    api.add_files('test-mrt:nprogress.js', 'client');
});
