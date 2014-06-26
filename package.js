Package.describe({
  summary: "NProgress for Meteor"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files('lib/nprogress/nprogress.js', 'client');
  api.add_files('lib/nprogress/nprogress.css', 'client');
  api.add_files('lib/main.js', 'client');
  if (api.export){
    api.export('NProgress', 'client');
  }
});
