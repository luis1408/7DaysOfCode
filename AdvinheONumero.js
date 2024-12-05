alert('Bem vindo ao jogo secreto!');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 0;

for(tentativas; tentativas < 3; tentativas++) {

    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

    if (numeroSecreto == chute) {
        alert(`Isso ai! O número secreto é ${numeroSecreto}, vc acertou usando ${tentativas} ${palavraTentativa}.`);
        break;
    } else {
        if (tentativas < 2) {
            if (numeroSecreto > chute){
                alert(`O número secreto é maior que ${chute}`);
            } else {
                alert(`O número secreto é menor que ${chute}`);
            }
        }
    }
}

if (numeroSecreto != chute) {
    alert(`Que pena, não conseguiu! O número secreto era ${numeroSecreto}`);
}