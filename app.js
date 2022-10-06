"use strict";
var TYPE;
(function (TYPE) {
    TYPE[TYPE["addition"] = 0] = "addition";
    TYPE[TYPE["subtraction"] = 1] = "subtraction";
    TYPE[TYPE["multiplication"] = 2] = "multiplication";
    TYPE[TYPE["division"] = 3] = "division";
})(TYPE || (TYPE = {}));
function add(n1, n2, type) {
    let result = `The result of the ${type} is ${n1 + n2}`;
    return result;
}
