const inputs = document.querySelectorAll('.input')
const msgErro = document.querySelectorAll('.msg-erro')
const submit = document.getElementById('btn-submit')
const btnTeste = document.querySelector('.btn-teste')

function validaCamposVazios() {
    inputs.forEach((campo,index) =>{
        if(campo.value === ''){
            campo.classList.add('input-erro')
            msgErro[index].classList.add('opacity')
        }
    })
}

function limpaErros() {
        inputs.forEach((campo, index) =>{
        if(campo.value !== ''){
            campo.classList.remove('input-erro')
            msgErro[index].classList.remove('opacity')

        }
    })
}

inputs.forEach(campo =>{
    campo.addEventListener('input',()=>{
        limpaErros()
    })
})

submit.addEventListener('click', ()=>{
    validaCamposVazios()
})





