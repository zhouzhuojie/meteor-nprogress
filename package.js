Package.describe({
  summary: "NProgress for Meteor"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files('nprogress/nprogress.js', 'client');
  api.add_files('nprogress/nprogress.css', 'client');
  api.add_files('main.js', 'client');
  if (api.export){
    api.export('NProgress', 'client');
  }
});
