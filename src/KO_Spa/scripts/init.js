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