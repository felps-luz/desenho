let canvas = document.getElementById("canvas"); // Este é o canvas
        let contexto = canvas.getContext("2d"); // Tipo de desenho
        let desenhando = false; // Confirma se estamos desenhando
        let seletor = document.getElementById("cor");

        // Função para alterar a cor de desenho
        function alterarCor() {
            contexto.strokeStyle = seletor.value;
        }

        seletor.addEventListener("change", alterarCor);

        canvas.addEventListener("mousedown", function (event) {
            desenhando = true; // Vai saber se estamos clicando
            contexto.beginPath(); // Novo
            contexto.moveTo(
                event.clientX - canvas.offsetLeft,
                event.clientY - canvas.offsetTop
            ); // Verificar a posição do mouse
        });

        canvas.addEventListener("mousemove", function (event) {
            if (desenhando) {
                contexto.lineTo(
                    event.clientX - canvas.offsetLeft,
                    event.clientY - canvas.offsetTop
                ); // Vai identificar o mouse desenhando
                contexto.stroke();
            }
        });

        canvas.addEventListener("mouseup", function (event) {
            desenhando = false;
        });
