document.querySelector("button").addEventListener("click", () => {
  const texto = document.querySelector("textarea").value.trim();
  if (!texto) return alert("Escribí cómo usaste Markdor");

  const activacion = document.createElement("li");
  activacion.textContent = `✅ ${texto} — activado`;
  document.querySelector(".activaciones ul").appendChild(activacion);

  document.querySelector("textarea").value = "";
});
