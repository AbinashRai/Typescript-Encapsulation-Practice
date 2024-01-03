var Car = /** @class */ (function () {
    function Car() {
        this.name = "honda";
        this.modal = "civic";
    }
    Car.prototype.goForward = function () {
        console.log("the car is moving forward");
    };
    return Car;
}());
console.log("hello");
