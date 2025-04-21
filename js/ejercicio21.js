document.getElementById("text-input").addEventListener("input", function(event) {
    const text = event.target.value;
    document.getElementById("output-text").textContent = text;
});