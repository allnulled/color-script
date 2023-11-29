(function(factory) {
    const mod = factory();
    if(typeof window !== "undefined") {
        window.ColorManipulator = mod;
    }
    if(typeof global !== "undefined") {
        global.ColorManipulator = mod;
    }
    if(typeof module !== "undefined") {
        module.exports = mod;
    }
})(function() {
    const ColorManipulator = {};
    ColorManipulator.Color = class {

        /**
         * 
         * @name `Color.prototype.calculate(expression)`
         * @type method
         * @parameter `expression` a `String` with a mathematically color expression, understood it as a expression which is valid for the `color-calculator-parser`, bundled with this project.
         * @returns `<Color>` the modified instance.
         * 
         */
        static calculate(expression) {
            return (window || global).ColorCalculatorParser.parse(expression);
        }
        
        /**
         * 
         * @name `Color.create(...args)`
         * @type static method
         * @parameters Same as in constructor.
         * @returns `<Color>`
         * 
         */
        static create(...args) {
            return new this(...args);
        }
        
        /**
         * 
         * @name `Color.hexToNumberInString(hex)`
         * @type static method
         * @parameters a `String` with an hexadecimal number
         * @returns `<Integer>`
         * 
         */
        static hexToNumber(hex) {
            return parseInt(hex, 16);
        }
        
        /**
         * 
         * @name `Color.hexToNumberInString(hex)`
         * @type static method
         * @parameters a `String` with an hexadecimal number
         * @returns `<String>`
         * 
         */
        static hexToNumberInString(hex) {
            return parseInt(hex, 16).toString(10);
        }
        
        /**
         * 
         * @name `Color.numberToHex(number)`
         * @type static method
         * @parameters `number` an `Integer` to pass to HEX format.
         * @returns `<String>`
         * 
         */
        static numberToHex(number) {
            let  hex = parseInt(number, 10).toString(16);
            if(hex.length < 2) {
                hex = "0" + hex;
            }
            return hex.toUpperCase();
        }

        /**
         * 
         * @name `Color.constructor(value)`
         * @type constructor method
         * @parameter `value` a `String` that can be either in RGB or HEX format.
         * @returns `<Color>`
         * 
         */
        constructor(value) {
            this.red = undefined;
            this.green = undefined;
            this.blue = undefined;
            let red, green, blue;
            if(typeof value !== "string") {
                throw new Error("Color argument must be a string");
            }
            if(value.startsWith("rgb(")) {
                [red, green, blue ] = value.substr(4).split("").reverse().join("").substr(1).split("").reverse().join("").split(",").map(t => parseInt(t.trim()));
            } else if(value.startsWith("#") && value.length === 7) {
                red = parseInt(value.substring(1,3), 16);
                green = parseInt(value.substring(3,5), 16);
                blue = parseInt(value.substring(5,7), 16);
            } else if(value.startsWith("#") && value.length === 4) {
                red = parseInt(value.substring(1,2) + value.substring(1,2), 16);
                green = parseInt(value.substring(2,3) + value.substring(2,3), 16);
                blue = parseInt(value.substring(3,4) + value.substring(3,4), 16);
            } else {
                throw new Error("Color format not accepted: «" + value + "»: only rgb(RRR,GGG,BBB), #RGB and #RRGGBB are valid formats");
            }
            this.red = red;
            this.green = green;
            this.blue = blue;
        }

        /**
         * @name `Color.prototype.cloned()`
         * @type method
         * @parameter `void`
         * @returns `<Color>` the modified instance.
         * 
         */
        cloned() {
            return new this.constructor(this.toHexadecimal());
        }
        
        /**
         * @name `Color.prototype.addColor(color)`
         * @type method
         * @parameter `color`
         * @returns `<Color>` the modified instance.
         * 
         */
        addColor(color) {
            this.red += color.red;
            this.green += color.green;
            this.blue += color.blue;
            return this;
        }
        /**
         * @name `Color.prototype.addToAll(number)`
         * @type method
         * @parameter `number`
         * @returns `<Color>` the modified instance.
         * 
         */
        addToAll(number) {
            this.red += number;
            this.green += number;
            this.blue += number;
            return this;
        }
        /**
         * @name `Color.prototype.addToRed(number)`
         * @type method
         * @parameter `number`
         * @returns `<Color>` the modified instance.
         * 
         */
        addToRed(number) {
            this.red += number;
            return this;
        }
        /**
         * @name `Color.prototype.addToGreen(number)`
         * @type method
         * @parameter `number`
         * @returns `<Color>` the modified instance.
         * 
         */
        addToGreen(number) {
            this.green += number;
            return this;
        }
        /**
         * @name `Color.prototype.addToBlue(number)`
         * @type method
         * @parameter `number`
         * @returns `<Color>` the modified instance.
         * 
         */
        addToBlue(number) {
            this.blue += number;
            return this;
        }
        
        /**
         * @name `Color.prototype.substractColor(color)`
         * @type method
         * @parameter `color`
         * @returns `<Color>` the modified instance.
         * 
         */
        substractColor(color) {
            this.red -= color.red;
            this.green -= color.green;
            this.blue -= color.blue;
            return this;
        }
        /**
         * @name `Color.prototype.substractFromAll(number)`
         * @type method
         * @parameter `number`
         * @returns `<Color>` the modified instance.
         * 
         */
        substractFromAll(number) {
            this.red -= number;
            this.green -= number;
            this.blue -= number;
            return this;
        }
        /**
         * @name `Color.prototype.substractFromRed(number)`
         * @type method
         * @parameter `number`
         * @returns `<Color>` the modified instance.
         * 
         */
        substractFromRed(number) {
            this.red -= number;
            return this;
        }
        /**
         * @name `Color.prototype.substractFromGreen(number)`
         * @type method
         * @parameter `number`
         * @returns `<Color>` the modified instance.
         * 
         */
        substractFromGreen(number) {
            this.green -= number;
            return this;
        }
        /**
         * @name `Color.prototype.substractFromBlue(number)`
         * @type method
         * @parameter `number`
         * @returns `<Color>` the modified instance.
         * 
         */
        substractFromBlue(number) {
            this.blue -= number;
            return this;
        }

        /**
         * @name `Color.prototype.multiplyByColor(color)`
         * @type method
         * @parameter `color` a `Color` instance.
         * @returns `<Color>` the modified instance.
         * 
         */
        multiplyByColor(color) {
            this.red = this.red * color.red;
            this.green = this.green * color.green;
            this.blue = this.blue * color.blue;
            return this;
        }
        /**
         * @name `Color.prototype.multiplyAllBy(number)`
         * @type method
         * @parameter `number`
         * @returns `<Color>` the modified instance.
         * 
         */
        multiplyAllBy(number) {
            this.red = this.red * number;
            this.green = this.green * number;
            this.blue = this.blue * number;
            return this;
        }
        /**
         * @name `Color.prototype.multiplyRedBy(number)`
         * @type method
         * @parameter `number`
         * @returns `<Color>` the modified instance.
         * 
         */
        multiplyRedBy(number) {
            this.red = this.red * number;
            return this;
        }
        /**
         * @name `Color.prototype.multiplyGreenBy(number)`
         * @type method
         * @parameter `number`
         * @returns `<Color>` the modified instance.
         * 
         */
        multiplyGreenBy(number) {
            this.green = this.green * number;
            return this;
        }
        /**
         * @name `Color.prototype.multiplyBlueBy(number)`
         * @type method
         * @parameter `number`
         * @returns `<Color>` the modified instance.
         * 
         */
        multiplyBlueBy(number) {
            this.blue = this.blue * number;
            return this;
        }

        /**
         * @name `Color.prototype.divideByColor(color)`
         * @type method
         * @parameter `color` a `Color` instance.
         * @returns `<Color>` the modified instance.
         * 
         */
        divideByColor(color) {
            this.red = this.red / color.red;
            this.green = this.green / color.green;
            this.blue = this.blue / color.blue;
            return this;
        }
        /**
         * @name `Color.prototype.divideAllBy(number)`
         * @type method
         * @parameter `number`
         * @returns `<Color>` the modified instance.
         * 
         */
        divideAllBy(number) {
            this.red = this.red / number;
            this.green = this.green / number;
            this.blue = this.blue / number;
            return this;
        }
        /**
         * @name `Color.prototype.divideRedBy(number)`
         * @type method
         * @parameter `number`
         * @returns `<Color>` the modified instance.
         * 
         */
        divideRedBy(number) {
            this.red = this.red / number;
            return this;
        }
        /**
         * @name `Color.prototype.divideGreenBy(number)`
         * @type method
         * @parameter `number`
         * @returns `<Color>` the modified instance.
         * 
         */
        divideGreenBy(number) {
            this.green = this.green / number;
            return this;
        }
        /**
         * @name `Color.prototype.divideBlueBy(number)`
         * @type method
         * @parameter `number`
         * @returns `<Color>` the modified instance.
         * 
         */
        divideBlueBy(number) {
            this.blue = this.blue / number;
            return this;
        }

        /**
         * @name `Color.prototype.rounded()`
         * @type method
         * @parameter `void`
         * @returns `<Color>` the modified instance.
         * 
         */
        rounded() {
            this.red = Math.round(this.red);
            this.green = Math.round(this.green);
            this.blue = Math.round(this.blue);
            return this;
        }

        /**
         * @name `Color.prototype.toRGB()`
         * @type method
         * @parameter `void`
         * @returns `<Color>` the modified instance.
         * 
         */
        toRGB() {
            return `rgb(${this.red},${this.green},${this.blue})`;
        }
        /**
         * @name `Color.prototype.toHexadecimal()`
         * @type method
         * @parameter `void`
         * @returns `<Color>` the modified instance.
         * 
         */
        toHexadecimal() {
            return `#${this.constructor.numberToHex(this.red)}${this.constructor.numberToHex(this.green)}${this.constructor.numberToHex(this.blue)}`;
        }
        
    }
    ColorManipulator.default = ColorManipulator;
    return ColorManipulator;
});