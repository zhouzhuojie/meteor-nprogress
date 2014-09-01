//Tests
Tinytest.add('NProgress can be initalized', function (test) {
  test.isNotNull(NProgress, 'nprogres should exist');
  test.isTrue(typeof(NProgress) === "object", 'nprogres should be an object');
  test.isTrue(typeof(NProgress.start) === "function", 'nprogres should be a function');
});
