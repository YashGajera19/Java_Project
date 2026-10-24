const inputText = document.getElementById("input-text");
const extraText = document.getElementById("extra-text");
const operation = document.getElementById("operation");

const outputText = document.getElementById("output-text");
const outputMessage = document.getElementById("output-message");
const selectedOperation = document.getElementById("selected-operation");
const outputLength = document.getElementById("output-length");
const copyStatus = document.getElementById("copy-status");

const detailsBox = document.getElementById("concept-details");
const detailTitle = document.getElementById("detail-title");
const detailText = document.getElementById("detail-text");

function runOperation() {
const original = inputText.value;
const extra = extraText.value;

let output = "";
let message = "";

switch (operation.value) {
    case "append":
        output = original + extra;
        message = "Text appended successfully.";
        break;

    case "insert":
        output = original.slice(0, 5) + extra + original.slice(5);
        message = "Text inserted after the first five characters.";
        break;

    case "reverse":
        output = Array.from(original).reverse().join("");
        message = "Text reversed successfully.";
        break;

    case "length":
        output = String(original.length);
        message = "Character count calculated using JavaScript string length.";
        break;

    case "uppercase":
        output = original.toUpperCase();
        message = "Text converted to uppercase.";
        break;

    case "lowercase":
        output = original.toLowerCase();
        message = "Text converted to lowercase.";
        break;

    case "replace":
        output = original.replace(/ /g, "_");
        message = "Spaces replaced with underscores.";
        break;
}

outputText.textContent = output;
outputMessage.textContent = message;

selectedOperation.textContent =
    operation.options[operation.selectedIndex].text.split(" — ")[0];

outputLength.textContent =
    output.length + (output.length === 1 ? " character" : " characters");

copyStatus.textContent = "";

}

function resetPlayground() {
inputText.value = "Hello Java";
extraText.value = " World";
operation.value = "append";
runOperation();
}

const concepts = {
string: {
title: "String — Immutable",
text: 'String objects are immutable. For example, String s = "Hello"; s.concat(" Java"); does not change s unless the result is assigned to a variable. Use String for text that does not need repeated modification.'
},


builder: {
    title: "StringBuilder — Mutable",
    text: 'StringBuilder lets you modify a character sequence using append(), insert(), delete() and reverse(). Its methods are not synchronized, making it a common choice for repeated modifications in single-threaded code.'
},

buffer: {
    title: "StringBuffer — Mutable and Synchronized",
    text: 'StringBuffer supports modification methods such as append(), insert() and reverse(). Its methods are synchronized, which can help when multiple threads access the same buffer. Synchronization does not automatically make every multi-step operation atomic.'
}


};

document.querySelectorAll("[data-concept]").forEach(button => {
button.addEventListener("click", () => {
const concept = concepts[button.dataset.concept];


    detailTitle.textContent = concept.title;
    detailText.textContent = concept.text;
    detailsBox.hidden = false;

    detailsBox.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
});


});

document.getElementById("run-button").addEventListener("click", runOperation);

document.getElementById("reset-button").addEventListener("click", resetPlayground);

document.getElementById("copy-button").addEventListener("click", async () => {
const text = outputText.textContent;


try {
    await navigator.clipboard.writeText(text);
    copyStatus.textContent = "Copied!";
} catch {
    copyStatus.textContent = "Clipboard unavailable. Copy the output manually.";
}

});

inputText.addEventListener("keydown", event => {
if (event.key === "Enter") runOperation();
});

extraText.addEventListener("keydown", event => {
if (event.key === "Enter") runOperation();
});

operation.addEventListener("change", runOperation);

runOperation();
