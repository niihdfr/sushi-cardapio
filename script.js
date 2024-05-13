function selecionarItem(botao) {
    const botaoSelecionadoAntes = document.querySelector(".prato-cardapio .selecionado")

    if(botaoSelecionadoAntes !== null) {
        botaoSelecionadoAntes.classList.remove("selecionado")
    }

    botao.classList.add("selecionado");
}

function selecionarBebida(botao) {
    const botaoSelecionadoAntes = document.querySelector(".bebida-cardapio .selecionado")

    if(botaoSelecionadoAntes !== null) {
        botaoSelecionadoAntes.classList.remove("selecionado")
    }

    botao.classList.add("selecionado");
}

function selecionarSobremesa(botao) {
    const botaoSelecionadoAntes = document.querySelector(".sobremesa-cardapio .selecionado")

    if(botaoSelecionadoAntes !== null) {
        botaoSelecionadoAntes.classList.remove("selecionado")
    }

    botao.classList.add("selecionado");
}

