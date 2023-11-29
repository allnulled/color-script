(function (factory) {
    const mod = factory();
    if (typeof window !== "undefined") {
        window.ColorScript = mod;
    }
    if (typeof global !== "undefined") {
        global.ColorScript = mod;
    }
    if (typeof module !== "undefined") {
        module.exports = mod;
    }
})(function () {
    return {
        Color: require("./color-manipulator.js").Color,
        parser: require("./color-script.parser.js")
    };
});