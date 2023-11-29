# color-script

Programming language to operate with addition, substraction, multiplication and division using colors and numbers.

# Online version

You can go and play directly to the online version:

- [https://allnulled.github.io/color-script](https://allnulled.github.io/color-script)

# Installation

```sh
npm install --save color-script
```

# Usage

```js
const new_color_1 = require("color-script").parser.parse("#000000 + 2");
const new_color_2 = require("color-script").Color.create("#000000");
```

# The Color API

The Color API is a embedded resource of the [`color-manipulator`](https://github.com/allnulled/color-manipulator) project. Use it at your own convenience.

# The Parser API

The Parser API is the language interpreter. It will read any text *as a color-script script* and will return the color of each operation result in an array.

## The syntax of the Parser API

The `color-script` parser follows a simple syntax where:
  - colors are like numbers
  - colors can be represented by rgb format, like `rgb(255, 0, 255)`
  - colors can be represented by hex format, like `#FF00FF`

The `color-script` parser acts as a calculator of multiple color or number operations.

Each operation is separated by a new line.

The allowed operations are: addition `+`, substraction `-`, multiplication `*` and division `/`.

Parenthesys are allowed too.

That is all.

## Examples

This is a pallette of grays.

```
#111111 * 0
#111111 * 1
#111111 * 2
#111111 * 3
#111111 * 4
#111111 * 5
#111111 * 6
#111111 * 7
#111111 * 8
#111111 * 9
#111111 * 10
#111111 * 11
#111111 * 12
#111111 * 13
#111111 * 14
#111111 * 15
```

And so, with addition, substraction, and division, also between colors, and parenthesys allowed.

The colors multiplications happens like: red by red, green by green, blue by blue.

The división happens the same way: red by red, green by green, blue by blue.

### The online version extra features

The online version also allows EJS templates syntax, so you can create variables and use them all along the script to not be repeating the same numbers, and centalize a value, and change it faster, all that. The color-script parser, though, does not allow creating variables by itself. The reason is too much complexity and time in not-so-different result of adding a layer of EJS templates. 

So, you can enter scripts like this one:

```
<% const color1 = "#201030"; %>
<%-color1%> * 0
<%-color1%> * 1
<%-color1%> * 2
<%-color1%> * 3
<%-color1%> * 4
<%-color1%> * 5
<%-color1%> * 6
<%-color1%> * 7
<%-color1%> * 8
<%-color1%> * 9
<%-color1%> * 10
<%-color1%> * 11
<%-color1%> * 12
<%-color1%> * 13
<%-color1%> * 14
<%-color1%> * 15
```

Here, as you see, you don't need to change the value in 20 places, but in 1 and only. This feature, as said, is only added to the [**ColorScript UI Online Version**](https://allnulled.github.io/color-script).


