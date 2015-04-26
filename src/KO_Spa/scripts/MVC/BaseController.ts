class BaseController {
    controllerName: String
    controllerConfig: any
    constructor(name: String, config?: any) {
        if (typeof (name) === "string") {
            this.controllerName = name;
        } else {
            throw "Controller name is required.";
        }

        if (typeof (config) === "object") {
            this.controllerConfig = config;
        }
        //ControllerFactory.RegisterController(this);
    }
    GetName() {
        return this.controllerName;
    }
}