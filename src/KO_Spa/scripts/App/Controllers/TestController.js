var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TestController = (function (_super) {
    __extends(TestController, _super);
    function TestController() {
        _super.call(this, "TestController");
    }
    TestController.prototype.Index = function (model) {
        return { view: "index", model: model };
    };
    return TestController;
})(BaseController);
//# sourceMappingURL=TestController.js.map