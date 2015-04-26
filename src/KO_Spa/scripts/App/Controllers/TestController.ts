class TestController extends BaseController{
    constructor() {
        super("TestController")
    }

    Index(model: any): any {
        return { view: "index", model: model };
    }
}