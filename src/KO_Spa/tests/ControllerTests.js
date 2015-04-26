/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />
var expect = chai.expect;
describe("Controller Tests", function () {
    describe("constructor", function () {
        var controllerName = "TestController";
        it("should have a TestController name for BaseController", function () {
            var controller = new BaseController(controllerName);
            expect(controller.GetName()).to.equal(controllerName);
        });
        it("should have a TestController name for TestController", function () {
            var controller = new TestController();
            expect(controller.GetName()).to.equal(controllerName);
        });
    });
    describe("action", function () {
        var controllerName = "TestController";
        it("action should have model and view", function () {
            var controller = new TestController();
            var model = { test: "testdata" };
            var expectedresult = { view: "index", model: model };
            var result = controller.Index(model);
            expect(JSON.stringify(result)).to.equal(JSON.stringify(expectedresult));
        });
    });
    //describe("#greets", function () {
    //    it("should throw if no target is passed in", function () {
    //        expect(function () {
    //            (new Cow()).greets();
    //        }).to.throw(Error);
    //    });
    //    it("should greet passed target", function () {
    //        var greetings = (new Cow("Kate")).greets("Baby");
    //        expect(greetings).to.equal("Kate greets Baby");
    //    });
    //});
});
//# sourceMappingURL=ControllerTests.js.map