alert('Bem vindo ao Jogo dos Destinos!');
let frontOrBack = prompt ('Para qual área vc deseja seguir, Font-End ou Back-End? Digite 1 Font-End para e 2 para Back-End.');

    if (frontOrBack == 1) {
        const linguagemFront = prompt('Vc quer aprender React ou Vue? Digite 1 para React e 2 para Vue.');
            if(linguagemFront == 1){
                alert('Muito bem! React é uma área muito boa.');
            }else if (linguagemFront == 2){
                alert('Muito bem! Vue é uma área muito boa.');
            }else {
                alert('Erro! Responda com 1 ou 2.');
            }
    }else if (frontOrBack == 2) {
        const linguagemBack = prompt('Vc quer aprender C# ou Java? Digite 1 para C# e 2 para Java.');
            if(linguagemBack == 1){
                alert('Muito bem! C# é uma área muito boa.');
            }else if (linguagemBack == 2){
                alert('Muito bem! Java é uma área muito boa.');
            }else {
                alert('Erro! Responda com 1 ou 2.');
            }
    }else {
        alert('Erro! Responda com 1 ou 2.');
    }

const decisao = prompt('Vc deseja seguir se especializando em sua área ou seguir se desenvolvendo para se tornar um Fullstack? Digite 1 para sua área  e 2 para Fullstack.');

    if (decisao == 1) {
        alert('Que legal! Continue se especializando em sua área!');
    }else if (decisao == 2) {
        alert('Que legal! Quer se desenvolver e virar um Fullstack!');
    }else {
        alert('Erro! Responda com 1 ou 2.');
    }

let tecnologia = 1;
while(tecnologia == 1){
    prompt('Tem mais alguma tecnologia que vc queira aprender? Digite 1 para SIM e 2 para NÃO.');
        if (tecnologia === 1) {
            const tecnologiaEscolhida = prompt('Qual?');
            alert(`${tecnologiaEscolhida} é uma ótima linguagem!`);
        }
}