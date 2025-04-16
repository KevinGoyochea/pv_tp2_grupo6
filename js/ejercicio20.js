const pais = document.getElementById("pais");
const capital = document.getElementById("capital");

const capitales = {
    argentina: "Buenos Aires",
    brasil: "Brasilia",
    ecuador: "Quito",
    peru: "Lima",
    chile: "Santiago de Chile",
    colombia: "Bogotá",
    venezuela: "Caracas"
};

pais.addEventListener("change", () => {
    capital.innerHTML = "";

    const paisSeleccionado = pais.value;
    const suCapital = capitales[paisSeleccionado];

    let opcionCap = document.createElement("option");
    opcionCap.value = suCapital;
    opcionCap.textContent = suCapital;
    capital.appendChild(opcionCap);

});