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