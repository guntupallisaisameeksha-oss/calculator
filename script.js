let display = document.getElementById("display");

function addToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}
function calculate() {
    try {
        const expression = display.value;
        const result = eval(expression);

        display.value = result;

        const historyList = document.getElementById("historyList");

        const historyItem = document.createElement("div");
        historyItem.textContent = expression + " = " + result;

        historyList.prepend(historyItem);
    } catch {
        display.value = "Error";
    }
}
document.addEventListener("keydown", function(event) {
    const key = event.key;

    if ((key >= "0" && key <= "9") || key === "." || key === "%" ||
        key === "+" || key === "-" || key === "*" || key === "/") {
        addToDisplay(key);
    }

    else if (key === "Enter" || key === "=") {
        calculate();
    }

    else if (key === "Backspace") {
        deleteLast();
    }

    else if (key === "Escape") {
        clearDisplay();
    }
});
function clearHistory() {
    document.getElementById("historyList").innerHTML = "";
}