var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Entity = /** @class */ (function () {
    function Entity(entityId) {
        this.entityId = entityId;
    }
    return Entity;
}());
var Bank = /** @class */ (function (_super) {
    __extends(Bank, _super);
    function Bank(entityId, name) {
        return _super.call(this, entityId) || this;
    }
    return Bank;
}(Entity));
var PaymentGateaway = /** @class */ (function (_super) {
    __extends(PaymentGateaway, _super);
    function PaymentGateaway(entityId, name) {
        return _super.call(this, entityId) || this;
    }
    return PaymentGateaway;
}(Entity));
var bca = new Bank(1, "BCA");
var goto = new PaymentGateaway(2, "GoTo");
console.log(bca);
console.log("Hello world");
