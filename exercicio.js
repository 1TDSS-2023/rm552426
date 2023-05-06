
        function changeColor(color) {
            document.body.style.background = color;
        }

        function buttonColor() {
            changeColor('green');
        }

        function addItem() { 
            var newItemText = document.getElementById("item").value;
            var newItem = document.createElement("li");
            var newItemContent = document.createTextNode(newItemText);
            newItem.appendChild(newItemContent);
            var list = document.getElementById("lista");
            list.appendChild(newItem);
            document.getElementById("item").value = "";
          }

          function trocarImagem() {
            var imagem = document.getElementById("imagem");
            if (imagem.src.endsWith("imagem1.jpg")) {
              imagem.src = "imagem2.jpg";
            } else {
              imagem.src = "imagem1.jpg";
            }
          }

          function exibirMensagem() {
            var mensagemDiv = document.getElementById("mensagem");
            mensagemDiv.innerHTML = "Olá, mundo!";
          }

          function ocultarElemento() {
            var elemento = document.getElementById("elemento-oculto");
            elemento.style.display = "none";
          }