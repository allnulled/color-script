// Simple Arithmetics Grammar
// ==========================
//
// Accepts expressions like "2 * (3 + 4)" and computes their value.
{
  if(typeof ColorManipulator === "undefined") {
    throw new Error("The API of color-manipulator is required in the global namespace to continue the parsing");
  }
  const Color = ColorManipulator.Color;
}

Language = Sentence*

Sentence = _ expr:Expression _ { return expr}

Expression = head:Term tail:(_ ("+" / "-") _ Term)*
  {
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
  }

Term = head:Factor tail:(_ ("*" / "/") _ Factor)* 
  {
    
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
  }

Factor = "(" _ expr:Expression _ ")" { return expr; } / Integer / Color
  
Color = Color_in_rgb / Color_in_hex

Color_in_rgb = "rgb(" r:Integer _ "," _ g:Integer _ "," _ b:Integer _ ")"
  { return Color.create(text()) }

Color_in_hex = "#" Hexadecimal_color_integer Hexadecimal_color_integer Hexadecimal_color_integer
  { return Color.create(text()) }

Hexadecimal_color_integer = [0-9A-Fa-f] [0-9A-Fa-f]
  { return text() }

Integer "integer"
  = _ [0-9]+ { return parseInt(text(), 10); }

_ "whitespace"
  = [ \t\n\r]*
EOS = "\r\n" / "\r" / "\n"