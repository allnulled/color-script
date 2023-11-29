(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){(function (){
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
            return parseInt(number, 10).toString(16);
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
            return `#${this.red.toString(16).toUpperCase()}${this.green.toString(16).toUpperCase()}${this.blue.toString(16).toUpperCase()}`;
        }
        
    }
    ColorManipulator.default = ColorManipulator;
    return ColorManipulator;
});
}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
(function (global){(function (){
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
}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./color-manipulator.js":1,"./color-script.parser.js":3}],3:[function(require,module,exports){
/*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */

"use strict";

function peg$subclass(child, parent) {
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message  = message;
  this.expected = expected;
  this.found    = found;
  this.location = location;
  this.name     = "SyntaxError";

  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
        literal: function(expectation) {
          return "\"" + literalEscape(expectation.text) + "\"";
        },

        "class": function(expectation) {
          var escapedParts = "",
              i;

          for (i = 0; i < expectation.parts.length; i++) {
            escapedParts += expectation.parts[i] instanceof Array
              ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1])
              : classEscape(expectation.parts[i]);
          }

          return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
        },

        any: function(expectation) {
          return "any character";
        },

        end: function(expectation) {
          return "end of input";
        },

        other: function(expectation) {
          return expectation.description;
        }
      };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/"/g,  '\\"')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function classEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/\]/g, '\\]')
      .replace(/\^/g, '\\^')
      .replace(/-/g,  '\\-')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = new Array(expected.length),
        i, j;

    for (i = 0; i < expected.length; i++) {
      descriptions[i] = describeExpectation(expected[i]);
    }

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== void 0 ? options : {};

  var peg$FAILED = {},

      peg$startRuleFunctions = { Language: peg$parseLanguage },
      peg$startRuleFunction  = peg$parseLanguage,

      peg$c0 = function(expr) { return expr},
      peg$c1 = "+",
      peg$c2 = peg$literalExpectation("+", false),
      peg$c3 = "-",
      peg$c4 = peg$literalExpectation("-", false),
      peg$c5 = function(head, tail) {
          return tail.reduce(function(result, element) {
            const operator = element[1];
            const term = element[3];
            const is_addition = operator === "+";
            const is_result_color = result instanceof Color;
            const is_term_color = term instanceof Color;
            if(is_result_color) {
              if(is_term_color) {
                if(is_addition) {
                  return result.addColor(term);
                } else {
                  return result.substractColor(term);
                }
              } else {
                if(is_addition) {
                  return result.addToAll(term);
                } else {
                  return result.substractFromAll(term);
                }
              }
            } else {
              if(is_term_color) {
                if(is_addition) {
                  return term.addToAll(result);
                } else {
                  return term.substractFromAll(result);
                }
              } else {
                if(is_addition) {
                  return term + result;
                } else {
                  return term - result;
                }
              }
            }
          }, head);
        },
      peg$c6 = "*",
      peg$c7 = peg$literalExpectation("*", false),
      peg$c8 = "/",
      peg$c9 = peg$literalExpectation("/", false),
      peg$c10 = function(head, tail) {
          
          return tail.reduce(function(result, element) {
            const operator = element[1];
            const term = element[3];
            const is_multiplication = operator === "*";
            const is_result_color = result instanceof Color;
            const is_term_color = term instanceof Color;
            if(is_result_color) {
              if(is_term_color) {
                if(is_multiplication) {
                  return result.multiplyByColor(term);
                } else {
                  return result.divideByColor(term);
                }
              } else {
                if(is_multiplication) {
                  return result.multiplyAllBy(term);
                } else {
                  return result.divideAllBy(term);
                }
              }
            } else {
              if(is_term_color) {
                if(is_multiplication) {
                  return term.multiplyAllBy(result);
                } else {
                  return term.divideAllBy(result);
                }
              } else {
                if(is_multiplication) {
                  return term * result;
                } else {
                  return term / result;
                }
              }
            }
          }, head);
        },
      peg$c11 = "(",
      peg$c12 = peg$literalExpectation("(", false),
      peg$c13 = ")",
      peg$c14 = peg$literalExpectation(")", false),
      peg$c15 = function(expr) { return expr; },
      peg$c16 = "rgb(",
      peg$c17 = peg$literalExpectation("rgb(", false),
      peg$c18 = ",",
      peg$c19 = peg$literalExpectation(",", false),
      peg$c20 = function(r, g, b) { return Color.create(text()) },
      peg$c21 = "#",
      peg$c22 = peg$literalExpectation("#", false),
      peg$c23 = function() { return Color.create(text()) },
      peg$c24 = /^[0-9A-Fa-f]/,
      peg$c25 = peg$classExpectation([["0", "9"], ["A", "F"], ["a", "f"]], false, false),
      peg$c26 = function() { return text() },
      peg$c27 = peg$otherExpectation("integer"),
      peg$c28 = /^[0-9]/,
      peg$c29 = peg$classExpectation([["0", "9"]], false, false),
      peg$c30 = function() { return parseInt(text(), 10); },
      peg$c31 = peg$otherExpectation("whitespace"),
      peg$c32 = /^[ \t\n\r]/,
      peg$c33 = peg$classExpectation([" ", "\t", "\n", "\r"], false, false),
      peg$c34 = "\r\n",
      peg$c35 = peg$literalExpectation("\r\n", false),
      peg$c36 = "\r",
      peg$c37 = peg$literalExpectation("\r", false),
      peg$c38 = "\n",
      peg$c39 = peg$literalExpectation("\n", false),

      peg$currPos          = 0,
      peg$savedPos         = 0,
      peg$posDetailsCache  = [{ line: 1, column: 1 }],
      peg$maxFailPos       = 0,
      peg$maxFailExpected  = [],
      peg$silentFails      = 0,

      peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildStructuredError(
      [peg$otherExpectation(description)],
      input.substring(peg$savedPos, peg$currPos),
      location
    );
  }

  function error(message, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }

  function peg$anyExpectation() {
    return { type: "any" };
  }

  function peg$endExpectation() {
    return { type: "end" };
  }

  function peg$otherExpectation(description) {
    return { type: "other", description: description };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos], p;

    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line:   details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;
      return details;
    }
  }

  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos),
        endPosDetails   = peg$computePosDetails(endPos);

    return {
      start: {
        offset: startPos,
        line:   startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line:   endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) { return; }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }

  function peg$parseLanguage() {
    var s0, s1;

    s0 = [];
    s1 = peg$parseSentence();
    while (s1 !== peg$FAILED) {
      s0.push(s1);
      s1 = peg$parseSentence();
    }

    return s0;
  }

  function peg$parseSentence() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parse_();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseExpression();
      if (s2 !== peg$FAILED) {
        s3 = peg$parse_();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c0(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseExpression() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    s0 = peg$currPos;
    s1 = peg$parseTerm();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parse_();
      if (s4 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 43) {
          s5 = peg$c1;
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c2); }
        }
        if (s5 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 45) {
            s5 = peg$c3;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c4); }
          }
        }
        if (s5 !== peg$FAILED) {
          s6 = peg$parse_();
          if (s6 !== peg$FAILED) {
            s7 = peg$parseTerm();
            if (s7 !== peg$FAILED) {
              s4 = [s4, s5, s6, s7];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parse_();
        if (s4 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 43) {
            s5 = peg$c1;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c2); }
          }
          if (s5 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 45) {
              s5 = peg$c3;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c4); }
            }
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$parse_();
            if (s6 !== peg$FAILED) {
              s7 = peg$parseTerm();
              if (s7 !== peg$FAILED) {
                s4 = [s4, s5, s6, s7];
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c5(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseTerm() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    s0 = peg$currPos;
    s1 = peg$parseFactor();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parse_();
      if (s4 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 42) {
          s5 = peg$c6;
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c7); }
        }
        if (s5 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 47) {
            s5 = peg$c8;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c9); }
          }
        }
        if (s5 !== peg$FAILED) {
          s6 = peg$parse_();
          if (s6 !== peg$FAILED) {
            s7 = peg$parseFactor();
            if (s7 !== peg$FAILED) {
              s4 = [s4, s5, s6, s7];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parse_();
        if (s4 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 42) {
            s5 = peg$c6;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c7); }
          }
          if (s5 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 47) {
              s5 = peg$c8;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c9); }
            }
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$parse_();
            if (s6 !== peg$FAILED) {
              s7 = peg$parseFactor();
              if (s7 !== peg$FAILED) {
                s4 = [s4, s5, s6, s7];
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c10(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseFactor() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 40) {
      s1 = peg$c11;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c12); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parse_();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseExpression();
        if (s3 !== peg$FAILED) {
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 41) {
              s5 = peg$c13;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c14); }
            }
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c15(s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$parseInteger();
      if (s0 === peg$FAILED) {
        s0 = peg$parseColor();
      }
    }

    return s0;
  }

  function peg$parseColor() {
    var s0;

    s0 = peg$parseColor_in_rgb();
    if (s0 === peg$FAILED) {
      s0 = peg$parseColor_in_hex();
    }

    return s0;
  }

  function peg$parseColor_in_rgb() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 4) === peg$c16) {
      s1 = peg$c16;
      peg$currPos += 4;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c17); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseInteger();
      if (s2 !== peg$FAILED) {
        s3 = peg$parse_();
        if (s3 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s4 = peg$c18;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c19); }
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parse_();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseInteger();
              if (s6 !== peg$FAILED) {
                s7 = peg$parse_();
                if (s7 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 44) {
                    s8 = peg$c18;
                    peg$currPos++;
                  } else {
                    s8 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c19); }
                  }
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parse_();
                    if (s9 !== peg$FAILED) {
                      s10 = peg$parseInteger();
                      if (s10 !== peg$FAILED) {
                        s11 = peg$parse_();
                        if (s11 !== peg$FAILED) {
                          if (input.charCodeAt(peg$currPos) === 41) {
                            s12 = peg$c13;
                            peg$currPos++;
                          } else {
                            s12 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c14); }
                          }
                          if (s12 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$c20(s2, s6, s10);
                            s0 = s1;
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseColor_in_hex() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 35) {
      s1 = peg$c21;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c22); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseHexadecimal_color_integer();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseHexadecimal_color_integer();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseHexadecimal_color_integer();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c23();
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseHexadecimal_color_integer() {
    var s0, s1, s2;

    s0 = peg$currPos;
    if (peg$c24.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c25); }
    }
    if (s1 !== peg$FAILED) {
      if (peg$c24.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c25); }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c26();
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseInteger() {
    var s0, s1, s2, s3;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parse_();
    if (s1 !== peg$FAILED) {
      s2 = [];
      if (peg$c28.test(input.charAt(peg$currPos))) {
        s3 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c29); }
      }
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          if (peg$c28.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c29); }
          }
        }
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c30();
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c27); }
    }

    return s0;
  }

  function peg$parse_() {
    var s0, s1;

    peg$silentFails++;
    s0 = [];
    if (peg$c32.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c33); }
    }
    while (s1 !== peg$FAILED) {
      s0.push(s1);
      if (peg$c32.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c33); }
      }
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c31); }
    }

    return s0;
  }

  function peg$parseEOS() {
    var s0;

    if (input.substr(peg$currPos, 2) === peg$c34) {
      s0 = peg$c34;
      peg$currPos += 2;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c35); }
    }
    if (s0 === peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 13) {
        s0 = peg$c36;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c37); }
      }
      if (s0 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 10) {
          s0 = peg$c38;
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c39); }
        }
      }
    }

    return s0;
  }


    if(typeof ColorManipulator === "undefined") {
      throw new Error("The API of color-manipulator is required in the global namespace to continue the parsing");
    }
    const Color = ColorManipulator.Color;


  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}

module.exports = {
  SyntaxError: peg$SyntaxError,
  parse:       peg$parse
};

},{}]},{},[2]);
