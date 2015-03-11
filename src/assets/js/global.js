/* global jQuery, Modernizr, Pikaday, GT */

(function ($, window, document, undefined) {
	'use strict';

	// Define dependencies
	KPS3.module.define('jquery', function () { return jQuery; });
	KPS3.module.define('modernizr', Modernizr);

	function loadRequiredModules () {
		if(typeof KPS3.settings.Modules !== 'undefined') {
			for(var i=0; i<KPS3.settings.Modules.length; i++) {
				KPS3.module.require(KPS3.settings.Modules[i]);
			}
		}
	}

	$(document).ready(loadRequiredModules);

})(jQuery, window, document);
