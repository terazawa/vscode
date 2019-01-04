var StartUp = /** @class */ (function () {
    function StartUp() {
    }
    StartUp.main = function () {
        var user = "Keiji Terazawa";
        console.log(new StartUp().greeter(user));
        return 0;
    };
    StartUp.prototype.greeter = function (person) {
        return "Hello" + person;
    };
    return StartUp;
}());
StartUp.main();
