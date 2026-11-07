
const botoes = document.querySelectorAll(".caixap button");

const numero = "5588982198585";

botoes.forEach(botao => {

    botao.addEventListener("click", () => {

        const produto = botao.dataset.produto;

        const mensagem = `Olá! Gostaria de fazer um orçamento do produto: ${produto}.`;

        const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

        window.open(link, "_blank");

    });

});
