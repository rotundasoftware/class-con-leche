/*
 * class-con-leche, v0.0.0
 * Copyright (c)2014 Rotunda Software, LLC.
 * Distributed under MIT license
 * http://github.com/rotundasoftware/class-con-leche
 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node, browserify, cartero
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.ClassConLeche = factory();
  }
}(this, function () {
    var fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;
   
    // The base Class implementation (does nothing)
    Class = function(){};
   
    // Create a new Class that inherits from this class
    Class.extend = function(prop) {
      var _super = this.prototype;

      // Instantiate a base class (but only create the instance,
      // don't run the init constructor)
      initializing = true;
      var prototype = new this();
      initializing = false;

      // Copy the properties over onto the new prototype
      for (var name in prop)
        prototype[name] = prop[name];

      // The dummy class constructor
      function Class() {
        // All construction is actually done in the initialize method
        if ( !initializing && this.initialize )
          this.initialize.apply(this, arguments);
      }

      // Populate our constructed prototype object
      Class.prototype = prototype;

      // Enforce the constructor to be what we expect
      Class.prototype.constructor = Class;

      // And make this class extendable
      Class.extend = arguments.callee;

      // for coffeescript compatibility
      Class.__super__ = _super;

      return Class;
    };

    return Class;
}));
