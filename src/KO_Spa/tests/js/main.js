define('appViewModel',['knockout'], function (ko) {
    return function appViewModel() {
        this.firstName = ko.observable('Bert');
        this.firstNameCaps = ko.pureComputed(function () {
            return this.firstName().toUpperCase();
        }, this);
    };
});
require.config({
    baseUrl: 'js',
    paths: {
        jquery: 'jquery',        
        knockout: 'knockout'
    }
});


require(['knockout', 'appViewModel', 'jquery'], function (ko, appViewModel, $) {
    $(function () { ko.applyBindings(new appViewModel()); });
});
var Controller =  function (name, config) {
    var controllerName,
        controllerConfig = {};
    if (typeof (name) === "string") {
        controllerName = name;
    } else {
        throw "Controller name is required.";
    }

    if (typeof (config) === "[Object]") {
        controllerConfig = config;
    }
    
    ControllerFactory.RegisterController(this);
    return {
        getName: function (){
            return controllerName;
        }
    };
};
var ControllerFactory = (function () {
    var controllers = {};
    return {
        FindController: function (controllerName) {
            return controllers[controllerName];
        },
        RegisterController: function (controller) {
            if (typeof (controllers[controller.getName()]) !== "undefined") {
                throw "Controller has already been registed";
            }
                    
            controllers[controller.getName()] = controller;
        }
    }
 }());
var RouteHandler = function () {
    return function appViewModel() {
        this.firstName = ko.observable('Bert');
        this.firstNameCaps = ko.pureComputed(function () {
            return this.firstName().toUpperCase();
        }, this);
    };
};