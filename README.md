meteor-nprogress
================

NProgress for Meteor

Basic usage
-------------

Simply call `start()` and `done()` to control the progress bar.

~~~ js
NProgress.start();
NProgress.done();
~~~

Using [Turbolinks] or similar? Ensure you're using Turbolinks 1.3.0+, and use 
this: (explained 
    [here](https://github.com/rstacruz/nprogress/issues/8#issuecomment-23010560))

~~~ js
$(document).on('page:fetch',   function() { NProgress.start(); });
$(document).on('page:change',  function() { NProgress.done(); });
$(document).on('page:restore', function() { NProgress.remove(); });
~~~

More
-----------

Official Documentation for NProgress: [https://github.com/rstacruz/nprogress](https://github.com/rstacruz/nprogress)

Demo: [http://ricostacruz.com/nprogress/](http://ricostacruz.com/nprogress/)
