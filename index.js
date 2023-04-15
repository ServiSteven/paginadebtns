function mostrarFrase2() {
  document.getElementById("frase1").classList.add("hidden");
  document.getElementById("frase2").classList.remove("hidden");
}

function mostrarFrase3() {
  document.getElementById("frase2").classList.add("hidden");
  document.getElementById("frase3").classList.remove("hidden");
}

function mostrarFrase4() {
  document.getElementById("frase3").classList.add("hidden");
  document.getElementById("frase4").classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", function() {
  const btn1 = document.querySelector("#frase1 button");
  const btn2 = document.querySelector("#frase2 button");
  const btn3 = document.querySelector("#frase3 button");

  btn1.addEventListener("click", mostrarFrase2);
  btn2.addEventListener("click", mostrarFrase3);
  btn3.addEventListener("click", mostrarFrase4);
});
