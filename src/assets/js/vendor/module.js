(function (window, undefined) {
    'use strict';

    var definitions = {},
        cache = {};


    /**
     * Require a defined module.
     * @param  {string} module - Name of the module.
     * @returns {*} - Usually an object literal returned from module.
     */
    function require (module) {
        // module must be defined
        if (typeof definitions[module] === 'undefined' || !definitions[module]) {
            throw new Error('Module "' + module + '" has not been defined.');
        }

        // already defined - return object instance
        if (typeof cache[module] !== 'undefined') {
            return cache[module];
        }

        // add module dependencies
        var deps = [],
            moduleDeps = definitions[module].deps,
            numDeps = moduleDeps.length;

        if (numDeps) {
            for (var i = 0; i < numDeps; i++) {
                deps.push(require(moduleDeps[i]));
            }
        }

        // call module and pass dependencies
        var obj = definitions[module].fn.apply(undefined, deps);
        cache[module] = obj;
        return obj;
    }

    /**
     * Unload a required module.
     * @param  {string} module - Name of the module.
     * @param  {function} [fn] - Callback function.
     */
    function unload (module, fn) {
        if (typeof cache[module] === 'undefined') {
            return false;
        }

        // try calling module destroy method if available
        if (typeof cache[module].destroy === 'function') {
            cache[module].destroy.call(undefined);
        }

        cache[module] = null;

        if (typeof fn === 'function') {
            fn.call(undefined);
        }
    }

    /**
     * Define a module and any dependencies.
     * @param  {string} module - Name of the module being defined.
     * @param  {array|function} deps - Array of module dependencies, or module function.
     * @param  {function} [fn] - Module function.
     */
    function define (module, deps, fn) {
        if (typeof fn === 'undefined') {
            fn = deps;
            deps = [];
        }

        // add module to definitions
        definitions[module] = {
            module: module,
            deps: deps,
            fn: fn || function () { return fn; }
        };
    }


    // expose public methods
    var methods = {
        define: define,
        require: require,
        unload: unload
    };

    if (typeof window.namespace !== 'undefined') {
        window.namespace.module = methods;
    } else {
        window.module = methods;
    }

})(window);
