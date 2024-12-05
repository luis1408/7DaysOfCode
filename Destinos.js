alert('Bem vindo ao Jogo dos Destinos!');
let frontOrBack = prompt ('Para qual área vc deseja seguir, Font-End ou Back-End? Digite 1 Font-End para e 2 para Back-End.');
let linguagem;

    if (frontOrBack == 1) {
        linguagem = prompt('Vc quer aprender React ou Vue? Digite 1 para React e 2 para Vue.');
            if(linguagem == 1){
                alert('Muito bem! React é uma área muito boa.');
            }else if (linguagem == 2){
                alert('Muito bem! Vue é uma área muito boa.');
            }else {
                alert('Erro! Responda com 1 ou 2.');
            }
    }else if (linguagem == 2) {
        linguagem = prompt('Vc quer aprender C# ou Java? Digite 1 para C# e 2 para Java.');
            if(linguagem == 1){
                alert('Muito bem! C# é uma área muito boa.');
            }else if (linguagem == 2){
                alert('Muito bem! Java é uma área muito boa.');
            }else {
                alert('Erro! Responda com 1 ou 2.');
            }
    }else {
        alert('Erro! Responda com 1 ou 2.');
    }

const decisao = prompt('Vc deseja seguir se especializando em sua área ou seguir se desenvolvendo para se tornar um Fullstack? Digite 1 para sua área  e 2 para Fullstack.');

    if (decisao == 1) {
        alert(`Continue se especializando em ${linguagem} para dominar a área de ${frontOrBack}!`);
    }else if (decisao == 2) {
        alert(`Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se tornar Fullstack!`);
    }else {
        alert('Erro! Responda com 1 ou 2.');
    }

let tecnologia = prompt('Tem mais alguma tecnologia que vc queira aprender? Digite 1 para SIM e 2 para NÃO.');
while(tecnologia == 1){
        if (tecnologia == 1) {
            const tecnologiaEscolhida = prompt('Qual?');
            alert(`${tecnologiaEscolhida} é uma ótima linguagem!`);
            tecnologia = prompt('Tem mais alguma tecnologia que vc queira aprender? Digite 1 para SIM e 2 para NÃO.');
        }
}