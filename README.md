Overview
==========================
A simple example of writing munit tests for a meteor package. This example shows you how to write the same tests for the
meteor session package as munit tests, instead of tinytests. This package does not include the Session source code, it
just depends on the session package.


Running the tests
=================

```
git clone https://github.com/spacejamio/meteor-session-munit-tests.git
cd meteor-session-munit-tests
# Install meteorite dependencies
mrt install
# So meteor can find the packages meteorite installed
export PACKAGE_DIRS=`pwd`/packages
meteor test-packages ./
```

Resources
=========

* [munit package](https://atmospherejs.com/package/munit)
* [session meteor package source](https://github.com/meteor/meteor/tree/devel/packages/session)
* [session_munit_tests.js](https://github.com/spacejamio/meteor-session-munit-tests/blob/master/session_munit_tests.js)
