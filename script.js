var currentInput = "";
var currentDisplay = "";
var zeroBtn = document.getElementById("zero");
var oneBtn = document.getElementById("one");
var twoBtn = document.getElementById("two");
var threeBtn = document.getElementById("three");
var fourBtn = document.getElementById("four");
var fiveBtn = document.getElementById("five");
var sixBtn = document.getElementById("six");
var sevenBtn = document.getElementById("seven");
var eightBtn = document.getElementById("eight");
var nineBtn = document.getElementById("nine");
var clearBtn = document.getElementById("clear");
var signBtn = document.getElementById("sign-change");
var percentageBtn = document.getElementById("percentage");
var divideBtn = document.getElementById("divide");
var multiplyBtn = document.getElementById("multiply");
var plusBtn = document.getElementById("plus");
var minusBtn = document.getElementById("minus");
var equalsBtn = document.getElementById("equals");
var decimalBtn = document.getElementById("decimal");
var result = document.getElementById("result");
var lastClick = "";

zeroBtn.onclick = function () {
    lastClick = "0";
    if (result.innerHTML != "0") {
        result.innerHTML = currentDisplay + "0";
        currentDisplay += "0";
        currentInput += "0";
        if (result.offsetWidth > 200) {
            result.style.maxHeight = "70px";
            result.style.fontSize = "40px";
            result.style.marginBottom = "40px";
            var wid = result.scrollWidth;
            result.scrollTo(wid, 0);
        }
    }
}

oneBtn.onclick = function () {
    lastClick = "1";
    result.innerHTML = currentDisplay + "1";
    currentDisplay += "1";
    currentInput += "1";
    if (result.offsetWidth > 200) {
        result.style.maxHeight = "70px";
        result.style.fontSize = "40px";
        result.style.marginBottom = "40px";
        var wid = result.scrollWidth;
        result.scrollTo(wid, 0);
    }
}

twoBtn.onclick = function () {
    lastClick = "2";
    result.innerHTML = currentDisplay + "2";
    currentDisplay += "2";
    currentInput += "2";
    if (result.offsetWidth > 200) {
        result.style.maxHeight = "70px";
        result.style.fontSize = "40px";
        result.style.marginBottom = "40px";
        var wid = result.scrollWidth;
        result.scrollTo(wid, 0);
    }
}

threeBtn.onclick = function () {
    lastClick = "3";
    result.innerHTML = currentDisplay + "3";
    currentDisplay += "3";
    currentInput += "3";
    if (result.offsetWidth > 200) {
        result.style.maxHeight = "70px";
        result.style.fontSize = "40px";
        result.style.marginBottom = "40px";
        var wid = result.scrollWidth;
        result.scrollTo(wid, 0);
    }
}

fourBtn.onclick = function () {
    lastClick = "4";
    result.innerHTML = currentDisplay + "4";
    currentDisplay += "4";
    currentInput += "4";
    if (result.offsetWidth > 200) {
        result.style.maxHeight = "70px";
        result.style.fontSize = "40px";
        result.style.marginBottom = "40px";
        var wid = result.scrollWidth;
        result.scrollTo(wid, 0);
    }
}

fiveBtn.onclick = function () {
    lastClick = "5";
    result.innerHTML = currentDisplay + "5";
    currentDisplay += "5";
    currentInput += "5";
    if (result.offsetWidth > 200) {
        result.style.maxHeight = "70px";
        result.style.fontSize = "40px";
        result.style.marginBottom = "40px";
        var wid = result.scrollWidth;
        result.scrollTo(wid, 0);
    }
}

sixBtn.onclick = function () {
    lastClick = "6";
    result.innerHTML = currentDisplay + "6";
    currentDisplay += "6";
    currentInput += "6";
    if (result.offsetWidth > 200) {
        result.style.maxHeight = "70px";
        result.style.fontSize = "40px";
        result.style.marginBottom = "40px";
        var wid = result.scrollWidth;
        result.scrollTo(wid, 0);
    }
}

sevenBtn.onclick = function () {
    lastClick = "7";
    result.innerHTML = currentDisplay + "7";
    currentDisplay += "7";
    currentInput += "7";
    if (result.offsetWidth > 200) {
        result.style.maxHeight = "70px";
        result.style.fontSize = "40px";
        result.style.marginBottom = "40px";
        var wid = result.scrollWidth;
        result.scrollTo(wid, 0);
    }
}

eightBtn.onclick = function () {
    lastClick = "8";
    result.innerHTML = currentDisplay + "8";
    currentDisplay += "8";
    currentInput += "8";
    if (result.offsetWidth > 200) {
        result.style.maxHeight = "70px";
        result.style.fontSize = "40px";
        result.style.marginBottom = "40px";
        var wid = result.scrollWidth;
        result.scrollTo(wid, 0);
    }
}

nineBtn.onclick = function () {
    lastClick = "9";
    result.innerHTML = currentDisplay + "9";
    currentDisplay += "9";
    currentInput += "9";
    if (result.offsetWidth > 200) {
        result.style.maxHeight = "70px";
        result.style.fontSize = "40px";
        result.style.marginBottom = "40px";
        var wid = result.scrollWidth;
        result.scrollTo(wid, 0);
    }
}


clearBtn.onclick = function () {
    lastClick = "C";
    currentInput = "";
    currentDisplay = "";
    result.innerHTML = "0";
    result.style.maxHeight = "130px";
    result.style.marginBottom = "10px";
    result.style.fontSize = "90px";

}

plusBtn.onclick = function () {
    if (lastClick == "-" && (currentInput.charAt(currentInput.length - 2) == "+"
        || currentInput.charAt(currentInput.length - 2) == "*"
        || currentInput.charAt(currentInput.length - 2) == "/")
    ) {
        removeMinus();
    }
    if (lastClick == "+") {
        return;
    }
    if (lastClick == "-") {
        result.innerHTML = currentDisplay.substring(0, currentDisplay.length - 5);
        currentDisplay = currentDisplay.substring(0, currentDisplay.length - 5);
        currentInput = currentInput.substring(0, currentInput.length - 1);
    }
    if (lastClick == "/" || lastClick == "*") {
        result.innerHTML = currentDisplay.substring(0, currentDisplay.length - 6);
        currentDisplay = currentDisplay.substring(0, currentDisplay.length - 6);
        currentInput = currentInput.substring(0, currentInput.length - 1);
    }
    lastClick = "+";
    result.innerHTML = currentDisplay + "&#43;";
    currentDisplay += "&#43;";
    currentInput += "+";
    if (result.offsetWidth > 200) {
        result.style.maxHeight = "70px";
        result.style.fontSize = "40px";
        result.style.marginBottom = "40px";
        var wid = result.scrollWidth;
        result.scrollTo(wid, 0);
    }

}

divideBtn.onclick = function () {
    if (lastClick == "-" && (currentInput.charAt(currentInput.length - 2) == "+"
        || currentInput.charAt(currentInput.length - 2) == "*"
        || currentInput.charAt(currentInput.length - 2) == "/")
    ) {
        removeMinus();
    }
    if (lastClick == "/") {
        return;
    }
    if (lastClick == "-" || lastClick == "+") {
        result.innerHTML = currentDisplay.substring(0, currentDisplay.length - 5);
        currentDisplay = currentDisplay.substring(0, currentDisplay.length - 5);
        currentInput = currentInput.substring(0, currentInput.length - 1);
    }
    if (lastClick == "*") {
        result.innerHTML = currentDisplay.substring(0, currentDisplay.length - 6);
        currentDisplay = currentDisplay.substring(0, currentDisplay.length - 6);
        currentInput = currentInput.substring(0, currentInput.length - 1);
    }
    lastClick = "/";
    result.innerHTML = currentDisplay + "&#247;";
    currentDisplay += "&#247;";
    currentInput += "/";
    if (result.offsetWidth > 200) {
        result.style.maxHeight = "70px";
        result.style.fontSize = "40px";
        result.style.marginBottom = "40px";
        var wid = result.scrollWidth;
        result.scrollTo(wid, 0);
    }

}

multiplyBtn.onclick = function () {
    if (lastClick == "-" && (currentInput.charAt(currentInput.length - 2) == "+"
        || currentInput.charAt(currentInput.length - 2) == "*"
        || currentInput.charAt(currentInput.length - 2) == "/")
    ) {
        removeMinus();
    }
    if (lastClick == "*") {
        return;
    }
    if (lastClick == "-" || lastClick == "+") {
        result.innerHTML = currentDisplay.substring(0, currentDisplay.length - 5);
        currentDisplay = currentDisplay.substring(0, currentDisplay.length - 5);
        currentInput = currentInput.substring(0, currentInput.length - 1);
    }
    if (lastClick == "/") {
        result.innerHTML = currentDisplay.substring(0, currentDisplay.length - 6);
        currentDisplay = currentDisplay.substring(0, currentDisplay.length - 6);
        currentInput = currentInput.substring(0, currentInput.length - 1);
    }
    lastClick = "*";
    result.innerHTML = currentDisplay + "&#215;";
    currentDisplay += "&#215;";
    currentInput += "*";
    if (result.offsetWidth > 200) {
        result.style.maxHeight = "70px";
        result.style.fontSize = "40px";
        result.style.marginBottom = "40px";
        var wid = result.scrollWidth;
        result.scrollTo(wid, 0);
    }

}

minusBtn.onclick = function () {
    if (lastClick == "-") {
        removeMinus();
        return;
    }

    lastClick = "-";
    result.innerHTML = currentDisplay + "&#45;";
    currentDisplay += "&#45;";
    currentInput += "-";
    if (result.offsetWidth > 200) {
        result.style.maxHeight = "70px";
        result.style.fontSize = "40px";
        result.style.marginBottom = "40px";
        var wid = result.scrollWidth;
        result.scrollTo(wid, 0);
    }

}

equalsBtn.onclick = function () {
    lastClick = "=";
    var prevAnswer = eval(currentInput);
    result.innerHTML = prevAnswer;
    currentDisplay = prevAnswer;
    currentInput = prevAnswer;
    if (result.offsetWidth > 200) {
        result.style.maxHeight = "70px";
        result.style.fontSize = "40px";
        result.style.marginBottom = "40px";
        var wid = result.scrollWidth;
        result.scrollTo(wid, 0);
    }

}


function removeMinus() {
    result.innerHTML = currentDisplay.substring(0, currentDisplay.length - 5);
    currentDisplay = currentDisplay.substring(0, currentDisplay.length - 5);
    currentInput = currentInput.substring(0, currentInput.length - 1);
    if (result.offsetWidth > 200) {
        result.style.maxHeight = "70px";
        result.style.fontSize = "40px";
        result.style.marginBottom = "40px";
        var wid = result.scrollWidth;
        result.scrollTo(wid, 0);
    }
    lastClick = currentInput.substring(currentInput.length - 1);
}

