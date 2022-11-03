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
    
    if(cpf.length == 0 || cpf.length != 14){
        Swal.fire({
            icon:'warning',
            title: 'Oops...',
            text: 'Preencha todo o campo CPF!',
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
            if(response.userValid == false){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Matricula não encontrada!',
                    timer: 2000
                })
            }else{
                let color1 = " rgb(250,217,97)"
                let color2 = "linear-gradient(90deg, rgba(250,217,97,1) 0%, rgba(255,179,0,1) 100%)"
                let buttonEnviar = document.querySelector('.butaoEnviar')
                buttonEnviar.style.backgroundColor = color1
                buttonEnviar.style.background = color2

                
                document.getElementById("enviarDados").disabled = false;

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
            }

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


document.querySelector("#enviarDados").addEventListener('click', function(){
    let cpf = document.querySelector("#cpf").value
    if(cpf.length == 0 || cpf.length != 14){
        Swal.fire({
            icon:'warning',
            title: 'Oops...',
            text: 'Preencha todo o campo CPF!',
            timer: 2000
        })
    }else{
        enviarDados()
        document.getElementById("enviarDados").disabled = true;
        let buttonEnviar = document.querySelector('.butaoEnviar')
        buttonEnviar.style.background = '#C3C3C3'
        document.querySelector('#nomeAluno').value = ''
        document.querySelector('#cadastroCPF').value = ''
        document.querySelector('#genero').value = ''
        document.querySelector('#telefone').value = ''
        document.querySelector('#nascimento').value = ''
        document.querySelector('#email').value = ''
        document.querySelector('#plano').value = ''
        document.querySelector('#vigencia').value = ''
        document.querySelector('#vencimento').value = ''
        document.querySelector('#rua').value = ''
        document.querySelector('#numero').value = ''
        document.querySelector('#bairro').value = ''
        document.querySelector('#cep').value = ''
        document.querySelector('#vencimento').value = ''
        let cpf = document.querySelector("#cpf").value = ''
    }
})


let user = localStorage.getItem('User')

document.querySelector("#user").innerHTML = user

document.querySelector("#imageLogin").addEventListener('click', function(){
    let sair = document.querySelector(".logof")

    if(sair.style.display === 'none'){
            sair.style.display = "block"
            sair.style.display = 'flex'
    }else{
        sair.style.display = 'none'
        
    }
})


document.querySelector("#form").addEventListener("click", function(event){
    event.preventDefault()
})
