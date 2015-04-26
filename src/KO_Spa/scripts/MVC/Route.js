var Route = (function () {
    function Route(routeName, routeRegex, controller, action) {
        this.routeName = routeName;
        this.routeRegex = routeRegex;
        this.controller = controller;
        this.action = action;
    }
    return Route;
})();
//# sourceMappingURL=Route.js.map