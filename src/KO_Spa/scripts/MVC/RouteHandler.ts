/// <reference path="Route.ts" />
/// <reference path="../../typings/knockout/knockout.d.ts" />
class RouteHandler {
    routeCache:any = {};
    constructor(routes?: Array<Route>) {
        routes.forEach(r=> this.addRouteToCache(r));
    }

    addRouteToCache(route: Route) {
        this.routeCache[route.routeRegex] = route;
    }
}