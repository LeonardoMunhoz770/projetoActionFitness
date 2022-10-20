let containerButton = document.querySelector(".containerStart")

document.querySelector("#showButton").addEventListener("click", function(){
    if(containerButton.style.display === 'none'){
            containerButton.style.display = "block"
            containerButton.style.display = 'flex'
    }else{
        containerButton.style.display = 'none'
        
    }
    
})



document.querySelector('#pesquisar').addEventListener('click', pesquisarAluno)

function pesquisarAluno(){
    cpf = document.querySelector("#cpf").value;
    
    if(cpf.length == 0){
        Swal.fire({
            icon:'warning',
            title: 'Oops...',
            text: 'Preencha o campo CPF!',
            timer: 2000
        })
    }else{
        const btn = document.querySelector('.button');
        btn.classList.add('button--loading')

        fetch('http://localhost:3000/buscarMatricula',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'        
            },
            body: JSON.stringify({
                cpf: cpf
            })
        }).then(response => response.json())
        .then((response) =>{
            document.querySelector('#nomeAluno').value = response.nome
            document.querySelector('#cadastroCPF').value = response.Cpf
            document.querySelector('#genero').value = response.genero
            document.querySelector('#telefone').value = response.telefone
            document.querySelector('#nascimento').value = response.nasc
            document.querySelector('#email').value = response.email
            document.querySelector('#plano').value = response.tipoPlano
            document.querySelector('#vigencia').value = response.vigencia
            document.querySelector('#vencimento').value = response.vencimento
            document.querySelector('#rua').value = response.endereco
            document.querySelector('#numero').value = response.numero
            document.querySelector('#bairro').value = response.bairro
            document.querySelector('#cep').value = response.cep

        }).catch((error) =>{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo deu errado',
                footer: `<label>Contate o administrador! ${error}</label>`,
                timer: 2000
            })
        }).finally(() =>{
            setTimeout(btn.classList.remove("button--loading"), 3000)
        })
    }
    
}

const inputCpf = document.querySelector("#cpf")


inputCpf.addEventListener('keypress', function(){
    let inputLength = inputCpf.value.length
    if(inputLength === 3 || inputLength === 7){
        inputCpf.value += '.'
    }else if(inputLength === 11){
        inputCpf.value += '-'
    }
})


function enviarDados(){
    campo_nome = document.getElementById("nome").textContent;
    console.log(campo_nome)
}
function mensagemErro(){
    Swal.fire({
        icon: 'error',
        title: "Oops...",
        text: 'Estamos desenvolvendo esta tela :/'
    })
}
