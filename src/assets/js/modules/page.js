/* global GT */

/**
 * Page Module
 *
 * Contains global page methods and inherits page-specific modules.
 */
KPS3.module.define('Page', ['jquery'], function ($) {
    'use strict';

    // Selectors used in markup
    var selectorStrings = {

    };

    // page settings
    var settings = {

    };

    // Page constructor
    var Page = function () {

        this.$w = $(window);
        this.init();

    };

    // Initialize pages
    Page.prototype.init = function () {

    };

    // Expose object instance
    return new Page ();
});
