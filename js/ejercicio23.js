document.querySelectorAll('input[name="lenguaje"]').forEach((radio) => {
    radio.addEventListener("change", (event) => {
        document.querySelectorAll(".cuadro").forEach(cuadro => {
            cuadro.classList.remove("iluminar")
        });

        document.getElementById(event.target.value).classList.add("iluminar");
        console.log("El lenguaje seleccionado fue " + event.target.value);
    });
});