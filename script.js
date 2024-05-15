let pratoSelecionado;
let bebidaSelecionada;
let sobremesaSelecionada;

const menuPedidos = document.querySelector(".menu-pedidos");
const fecharCarrinhoBtn = document.querySelector(".fechar-carrinho-btn");
const total = document.querySelector(".total-preco");



function selecionarPrato(botao) {
    const botaoSelecionadoAntes = document.querySelector(".prato-cardapio .selecionado")
    const fecharPedidoBtn = document.querySelector(".fechar-pedido-btn");

    if(botaoSelecionadoAntes !== null) {
        botaoSelecionadoAntes.classList.remove("selecionado")
    }

    botao.classList.add("selecionado");
    pratoSelecionado = botao;
    verificarAtualizacao()
}

function selecionarBebida(botao) {
    const botaoSelecionadoAntes = document.querySelector(".bebida-cardapio .selecionado")

    if(botaoSelecionadoAntes !== null) {
        botaoSelecionadoAntes.classList.remove("selecionado")
    }

    botao.classList.add("selecionado");
    bebidaSelecionada = botao;
    verificarAtualizacao()
}

function selecionarSobremesa(botao) {
    const botaoSelecionadoAntes = document.querySelector(".sobremesa-cardapio .selecionado")

    if(botaoSelecionadoAntes !== null) {
        botaoSelecionadoAntes.classList.remove("selecionado")
    }

    botao.classList.add("selecionado");
    sobremesaSelecionada = botao;
    verificarAtualizacao()
}
//-----------------------------------------------------------------//

function verificarAtualizacao() {
    const pratoSelecionado = document.querySelector(".prato-cardapio .selecionado");
    const bebidaSelecionada = document.querySelector(".bebida-cardapio .selecionado");
    const sobremesaSelecionada = document.querySelector(".sobremesa-cardapio .selecionado");

    if(pratoSelecionado !== null && bebidaSelecionada !== null && sobremesaSelecionada !== null) {
        fecharPedido() ;      
    }
}

function fecharPedido() {  
        const fecharPedidoBtn = document.querySelector(".fechar-pedido-btn");
        
        fecharPedidoBtn.textContent = "Fechar pedido";
        fecharPedidoBtn.style.background = 'rgba(80, 208, 116, 1)';
        
    
}

function mostrarMenu() {
    const pratoSelecionado = document.querySelector(".prato-cardapio .selecionado");
    const bebidaSelecionada = document.querySelector(".bebida-cardapio .selecionado");
    const sobremesaSelecionada = document.querySelector(".sobremesa-cardapio .selecionado");
    const menuPedidos = document.querySelector(".menu-pedidos");
    const fecharPedidoBtn = document.querySelector(".fechar-pedido-btn");
    const pedidoItens = document.querySelector(".pedido-itens");

    if (pratoSelecionado !== null && bebidaSelecionada !== null && sobremesaSelecionada !== null) {
        pedidoItens.innerHTML = "";

        const pratoItem = document.createElement("div");
        const bebidaItem = document.createElement("div");
        const sobremesaItem = document.createElement("div");

        pratoItem.textContent = pratoSelecionado.querySelector("h1").textContent + " ---------------------- " + pratoSelecionado.querySelector("p").textContent; 

        bebidaItem.textContent = bebidaSelecionada.querySelector("h1").textContent + " ---------------------- " + bebidaSelecionada.querySelector("p").textContent; 

        sobremesaItem.textContent = sobremesaSelecionada.querySelector("h1").textContent + " ---------------------- " + sobremesaSelecionada.querySelector("p").textContent; 

        
        pedidoItens.appendChild(pratoItem);
        pedidoItens.appendChild(bebidaItem);
        pedidoItens.appendChild(sobremesaItem);

        pratoItem.style.marginBottom = "10px";
        bebidaItem.style.marginBottom = "10px";
        sobremesaItem.style.marginBottom = "10px";

        pratoItem.style.width = "100%";
        bebidaItem.style.width = "100%";
        sobremesaItem.style.width = "100%";
        pratoItem.style.display = "flex";
        bebidaItem.style.display = "flex";
        sobremesaItem.style.display = "flex";
        pratoItem.style.justifyContent = "space-between";
        bebidaItem.style.justifyContent = "space-between";
        sobremesaItem.style.justifyContent = "space-between";

        fecharPedido();
        menuPedidos.style.display = 'flex';
        calcularTotal()
        
    } else {
        alert("Por favor, selecione um prato, uma bebida e uma sobremesa.");
    }
}

function calcularTotal() {
    const pratoPreco = parseFloat(pratoSelecionado.querySelector("p").textContent.replace("R$", "").trim().replace(",", "."));
    const bebidaPreco = parseFloat(bebidaSelecionada.querySelector("p").textContent.replace("R$", "").trim().replace(",", "."));
    const sobremesaPreco = parseFloat(sobremesaSelecionada.querySelector("p").textContent.replace("R$", "").trim().replace(",", "."));

    const precoTotal = pratoPreco + bebidaPreco + sobremesaPreco;
    document.querySelector(".total-preco").textContent = "R$ " + precoTotal.toFixed(2);
}


fecharCarrinhoBtn.addEventListener("click", function() {
    menuPedidos.style.display = "none"
})

menuPedidos.addEventListener("click", function(event) {
    if(event.target == menuPedidos){
        menuPedidos.style.display = "none"
    }
})

function botaoFinalizarPedido() {
    const podePedirBtn = document.querySelector(".finalizar-pedido")
    podePedirBtn.addEventListener("click", function() {
        finalizarPedido()
    })
}


function finalizarPedido() {
    
    if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada) {
        const prato = pratoSelecionado.querySelector("h1").textContent;
        const bebida = bebidaSelecionada.querySelector("h1").textContent;
        const sobremesa = sobremesaSelecionada.querySelector("h1").textContent;
        const precoTotal = document.querySelector(".total-preco").textContent;

        calcularTotal()
        const mensagemTexto = `Olá, gostaria de fazer o pedido:\n- Prato: ${prato}\n- Bebida: ${bebida}\n- Sobremesa: ${sobremesa}\nTotal: ${precoTotal}`;
        const message = encodeURIComponent(mensagemTexto)
        const phone = "21981378621"
        

        window.open(`https://wa.me/${phone}?text=${message}`, "_blank")
    } else {
        alert("Por favor, selecione um prato, uma bebida e uma sobremesa antes de finalizar o pedido.");
    }
}



