function criarInputs() {
    var quantidade = parseInt(document.getElementById('quantidade').value);
    var inputsContainer = document.getElementById('inputsContainer');
    inputsContainer.innerHTML = '';
    
    for (var i = 1; i <= quantidade; i++) {
        var input = document.createElement('input');
        input.type = 'text';
        input.classList.add('texto-input'); 
        inputsContainer.appendChild(input);
    }

    inputsContainer.addEventListener('input', function() {
        var inputs = document.querySelectorAll('.texto-input');
        var soma = 0;
        var count = 0;
        
        inputs.forEach(function(input) {
            var valor = input.value.toLowerCase().trim();
            var pontuacao = converterParaVariavel(valor);
            
            if (pontuacao !== undefined) { 
                soma += pontuacao;
                count++;
            }
        });
        
        var media = count > 0 ? soma / count : 0; 
        var resultadoMedia = converterParaValor(media);
        var resultadoElement = document.getElementById('resultado');
        resultadoElement.textContent = "A média das suas menções é: " + resultadoMedia;

    });
}

function converterParaVariavel(inputValor) {
    switch(inputValor) {
        case "mb":
            return 10;
        case "b":
            return 8;
        case "r":
            return 6;
        case "i":
            return 4;
        default:
            return undefined;
    }
}

function converterParaValor(media) {
    if (media >= 9) {
        return "MB";
    } else if (media >= 7 && media < 9) {
        return "B";
    } else if (media >= 5 && media < 7) {
        return "R";
    } else {
        return "I";
    }
}

