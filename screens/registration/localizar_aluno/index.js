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
            console.log(response)
            document.querySelector('#nomeAluno').value = response.nome
            document.querySelector('#cadastroCPF').value = response.cpf
            document.querySelector('#genero').value = response.genero
            document.querySelector('#telefone').value = response.telefone
            document.querySelector('#nascimento').value = response.nacimento
            document.querySelector('#email').value = response.email
            document.querySelector('#plano').value = response.tipoPlano
            document.querySelector('#vigencia').value = response.vigencia
            document.querySelector('#vencimento').value = response.data
            document.querySelector('#rua').value = response.endereco
            document.querySelector('#numero').value = response.numero
            document.querySelector('#bairro').value = response.bairro
            document.querySelector('#cep').value = response.cep
            document.querySelector('#vencimento').value = response.vencimento

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

const dados = {

}


function enviarDados(){
    let campo_telefone = document.querySelector("#telefone").value;
    let campo_nome = document.querySelector("#nomeAluno").value;
    let campo_cpf = document.querySelector("#cadastroCPF").value;
    let campo_genero = document.querySelector("#genero").value;
    let campo_nascimento = document.querySelector("#nascimento").value;
    let campo_email = document.querySelector("#email").value;
    let campo_plano = document.querySelector("#plano").value;
    let campo_vigencia = document.querySelector("#vigencia").value;
    let campo_rua = document.querySelector("#rua").value
    let campo_numero = document.querySelector("#numero").value
    let campo_bairro = document.querySelector("#bairro").value
    let campo_cep = document.querySelector("#cep").value
    let campo_vencimento = document.querySelector("#vencimento").value
    dados['telefone']= campo_telefone
    dados['nome'] = campo_nome
    dados['cpf'] = campo_cpf
    dados['genero'] = campo_genero
    dados['nascimento'] = campo_nascimento
    dados['email'] = campo_email
    dados ['plan'] = campo_plano
    dados['vigencia'] = campo_vigencia
    dados['rua'] = campo_rua
    dados['numero'] = campo_numero
    dados['bairro'] = campo_bairro
    dados['cep'] = campo_cep
    dados['vencimento'] = campo_vencimento

    fetch('http://127.0.0.1:3000/updateMatricula', {
        method: 'PUT',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    }).then((response)=> response.json())
    .then((response) =>{
        if(response.userValid == true){
            Swal.fire(
                'Bom trabalho!',
                'Os dados foram atualizados com sucesso!',
                'success'
            )
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo deu errado',
                footer: `<label>Contate o administrador! ${response}</label>`,
                timer: 2000
            })
        }
    })
    .catch((error) =>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo deu errado',
            footer: `<label>Contate o administrador! ${error}</label>`,
            timer: 2000
        })
    })

}
function mensagemErro(){
    Swal.fire({
        icon: 'error',
        title: "Oops...",
        text: 'Estamos desenvolvendo esta tela :/'
    })
}

let botao = document.querySelectorAll('#editarCampo').forEach(btn =>{
    btn.addEventListener("click", () => {
        let buttonClick = btn.dataset.button
        let idButton = document.querySelector(`#${buttonClick}`)
        if(idButton.disabled == false){
            idButton.disabled = true
        }else{
            idButton.disabled = false
        }
    })
})


document.querySelector("#enviarDados").addEventListener('click', enviarDados)


let user = localStorage.getItem('User')

document.querySelector("#user").innerHTML = user
