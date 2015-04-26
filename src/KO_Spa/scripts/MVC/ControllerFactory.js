var ControllerFactory = (function () {
    function ControllerFactory() {
    }
    ControllerFactory.FindController = function (controllerName) {
        return this.controllers[controllerName];
    };
    ControllerFactory.RegisterController = function (controller) {
        if (typeof (this.controllers[controller.GetName()]) !== "undefined") {
            throw "Controller has already been registed";
        }
        this.controllers[controller.GetName()] = controller;
    };
    return ControllerFactory;
})();
//# sourceMappingURL=ControllerFactory.js.map