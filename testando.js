// A idade é 20 anos, se for MENOR QUE 18 mostrar "Idade não permitida" se for igual ou superior a 18 mostrar "pode entrar"

function compararIdade () {
    let idade = 17;
    if (idade >= 18) {
    console.log('entrada liberada');
    } else {
        console.log('idade não permitida');
    };
};
compararIdade();