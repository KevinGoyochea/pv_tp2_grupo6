document.getElementById("text-input").addEventListener("input", function(event) {
    const text = event.target.value;
    const output = document.getElementById("output-text");

    output.textContent = text;

    // Cambiar color de fondo si el texto supera los 20 caracteres
    if (text.length > 20) {
        output.style.backgroundColor = "#ffd1d1"; // Color de fondo cuando supera 20 caracteres
    } else {
        output.style.backgroundColor = "#f9f9f9"; // Color de fondo por defecto
    }
});