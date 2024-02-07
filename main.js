const form = document.getElementById('form-comparison')

form.addEventListener('submit', function(e){
    e.preventDefault();



const numeroFinalA = Number(document.getElementById('a-campo').value);
const numeroFinalB = Number(document.getElementById('b-campo').value);
let formEvalido = false;
const mensagemSucesso = `O valor de B (<b>${numeroFinalB}</b>) é maior que o valor de A (<b>${numeroFinalA}</b>)`
const mensagemError = `O valor de B (<b>${numeroFinalB}</b>) é menor ou igual que o valor de A (<b>${numeroFinalA}</b>)`;


function validaComparaçao(numeroFinalA, numeroFinalB) {
    return numeroFinalA < numeroFinalB;
}

        const containerMensagemSucesso = document.querySelector('.success-message');
        const containerMensagemError = document.querySelector('.error-message');


    formEValido = validaComparaçao(numeroFinalA, numeroFinalB);
    if (formEValido) {
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        containerMensagemError.style.display = 'none';
        
    }
    else {
        containerMensagemError.innerHTML = mensagemError;
        containerMensagemError.style.display = 'block';
        containerMensagemSucesso.style.display = 'none';

    }
});