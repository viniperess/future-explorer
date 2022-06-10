const answerElement = document.querySelector("#answer");
const inputQuest = document.querySelector("#inputQuest"); 
const butQuest = document.querySelector("#butQuest");

const answers = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
];

function askQuestion(){

if(inputQuest.value == ""){
    alert("Digite sua Pergunta");
    return;
}

butQuest.setAttribute("disabled",true);

const quest = "<div>" + inputQuest.value + "</div>";

const totalAnswer = answers.length;
const aleatoryNumber = Math.floor(Math.random() * totalAnswer);

answerElement.innerHTML = quest + answers[aleatoryNumber];

answerElement.style.opacity = 1;

setTimeout(function() {
    answerElement.style.opacity = 0
    butQuest.removeAttribute("disabled");
}, 3000);

}