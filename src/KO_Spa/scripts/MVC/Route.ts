class Route {
    routeName: string
    routeRegex: string
    controller: string
    action: string
    constructor(routeName: string, routeRegex: string, controller?: string, action?: string) {
        this.routeName = routeName;
        this.routeRegex = routeRegex;
        this.controller = controller;
        this.action = action;
    }
}