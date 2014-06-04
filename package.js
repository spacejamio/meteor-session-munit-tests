Package.describe({
  summary: "Examples of munit tests for the Meteor session package."
});

Package.on_use(function (api) {
  api.use(['session','munit']);
});

Package.on_test(function (api) {
  api.use([ 'munit', 'meteor-session-munit-tests']);
//  api.use('deps');
//  api.use('mongo-livedata');
  api.add_files('session_munit_tests.js', 'client');
});
