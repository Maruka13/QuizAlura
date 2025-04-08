// PARTE 1: Lista de perguntas e respostas
perguntas = [
    {
        "pergunta": "Qual é o pai do Luke Skywalker?",
        "respostas": [
            { "opcao": "Han Solo", "correto": false },
            { "opcao": "Darth Vader", "correto": true },
            { "opcao": "Mestre Yoda", "correto": false }]
    },
    {
        "pergunta": "Qual a composição do esqueleto do Wolverine?",
        "respostas": [
            { "opcao": "Platina", "correto": false },
            { "opcao": "Titanium", "correto": false },
            { "opcao": "Adamântium", "correto": true }]
    },
    {
        "pergunta": "Qual o nome dos dragões da Daenerys Targaryen?",
        "respostas": [
            { "opcao": "Drogon, Viserion e Rhaegal", "correto": true },
            { "opcao": "Bellion, Kaisel e Igris", "correto": false },
            { "opcao": "Smarag, Agheel e Placidusax", "correto": false }]
    },
    {
        "pergunta": "Qual a raça do Goku?",
        "respostas": [
            { "opcao": "Saiyajin", "correto": true },
            { "opcao": "Shin-jin", "correto": false },
            { "opcao": "Tsufurujin", "correto": false }]
    },
    {
        "pergunta": "Qual o nome da princesa do Mário?",
        "respostas": [
            { "opcao": "Leia", "correto": false },
            { "opcao": "Bowser", "correto": false },
            { "opcao": "Peach", "correto": true }]
    },
 
];

// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
    progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
    const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
    perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

    respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

    // Percorre todas as respostas da pergunta atual
    for (let i = 0; i < perguntaAtual.respostas.length; i++) {

        // Pega a resposta atual com base no índice 'i'
        const resposta = perguntaAtual.respostas[i];

        // Cria um novo elemento 'button' (botão)
        const botao = document.createElement("button");

        // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
        botao.classList.add("botao-resposta");

        // Define o texto do botão com a opção de resposta (resposta.opcao)
        botao.innerText = resposta.opcao;

        // Adiciona um evento de clique no botão
        botao.onclick = function () {

            // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
            if (resposta.correto) {
                acertos++; // Incrementa o contador de acertos
            }

            // Avança para a próxima pergunta
            indiceAtual++;

            // Se ainda houver perguntas, carrega a próxima pergunta
            if (indiceAtual < perguntas.length) {
                carregarPergunta(); // Carrega a próxima pergunta
            } else {
                // Se não houver mais perguntas, finaliza o jogo
                finalizarJogo();
            }
        };

        // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
        respostasElemento.appendChild(botao);
    }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
    textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
    conteudo.style.display = "none"; // Esconde as perguntas
    conteudoFinal.style.display = "flex"; // Mostra a tela final
}

// PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta();
