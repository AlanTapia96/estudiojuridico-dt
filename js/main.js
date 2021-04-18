(function () {
  let form = document.getElementById("form");
  form.addEventListener("submit", function (e) {
    console.log("hola perroski");
    e.preventDefault();
    let valores = document.getElementsByTagName("input");
    console.log(valores);
    for (let i = 0; i < valores.length; i++) {
      valores[i].value = "";
    }
    document.getElementById("form-textarea").value = "";
  });
})();
