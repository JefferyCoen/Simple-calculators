//For Basic Calculator
function insert(num) {
    document.resultWindow.resultText.value = document.resultWindow.resultText.value+num
}


function clr() {
    document.resultWindow.resultText.value = "";
}

function del() {
    var exp = document.resultWindow.resultText.value;
    document.resultWindow.resultText.value = exp.substring(0, exp.length - 1)
}

function equals() {
    var exp = document.resultWindow.resultText.value;
    if(exp){
        document.resultWindow.resultText.value = eval(exp)
    }
}

function sqrRoot() {
    var squareRoot = Math.sqrt(document.resultWindow.resultText.value)
    document.resultWindow.resultText.value = squareRoot
}

//For BMI Calculator
function hideMetric() {
    document.getElementById("metricForm").style.visibility="hidden";
    document.getElementById("USForm").style.visibility="visible";
}

function hideUS() {
    document.getElementById("metricForm").style.visibility="visible";
    document.getElementById("USForm").style.visibility="hidden";
}