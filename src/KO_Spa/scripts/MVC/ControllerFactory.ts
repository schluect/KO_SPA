
class ControllerFactory {
    private static controllers: Array<BaseController>
    public static FindController(controllerName) {
        return this.controllers[controllerName];
    }
    public static RegisterController(controller) {
        if (typeof (this.controllers[controller.GetName()]) !== "undefined") {
            throw "Controller has already been registed";
        }

        this.controllers[controller.GetName()] = controller;
    }
}