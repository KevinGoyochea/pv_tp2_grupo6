const colores = ["red", "orange", "blue", "green", "yellow", "pink", "gray", "purple"];
const btn = document.getElementById("cambiarcolor");

btn.addEventListener("click", () => {
  const coloraleatorio = colores[Math.floor(Math.random() * colores.length)];
  document.body.style.backgroundColor = coloraleatorio;
  console.log("Color de fondo cambiado a: "+coloraleatorio);
});
