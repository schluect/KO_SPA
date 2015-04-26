var BaseController = (function () {
    function BaseController(name, config) {
        if (typeof (name) === "string") {
            this.controllerName = name;
        }
        else {
            throw "Controller name is required.";
        }
        if (typeof (config) === "object") {
            this.controllerConfig = config;
        }
        //ControllerFactory.RegisterController(this);
    }
    BaseController.prototype.GetName = function () {
        return this.controllerName;
    };
    return BaseController;
})();
//# sourceMappingURL=BaseController.js.map