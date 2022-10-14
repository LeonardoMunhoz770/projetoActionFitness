let containerButton = document.querySelector(".containerStart")

document.querySelector("#showButton").addEventListener("click", function(){
    if(containerButton.style.display === 'none'){
            containerButton.style.display = "block"
            containerButton.style.display = 'flex'
    }else{
        containerButton.style.display = 'none'
        
    }
    
})
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
        fetch('http://localhost:3000/funcionarios',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'        
            },
            body: JSON.stringify({
                cpf: cpf
            })
        }).then(response => response.json())
        .then((response) =>{
            document.querySelector("#containerBusca").innerHTML += `
            <div class="formatacaoMatricula">    
                <div class="dadosMatricula">
                    <h3>Dados de matrícula</h1>
                    <label contenteditable="true" id="nome"> ${response.nome} </label>
                    <label>CPF: ${response.cpf}</label>
                    <label>Gênero: ${response.genero}</label>
                    <label>Telefone: ${response.telefone}</label>
                    <label>Data de Nascimento: ${response.nasc}</label>
                </div>
                <div class="dadosPlano">
                    <h3>Dados do Plano</h3>
                    <label>Nome: ${response.plano}</label>
                    <label>Vigência: ${response.vigencia}</label>
                    <label>Vencimento: ${response.vencimento}</label>
                </div>
                <div class="dadosEndereco">
                    <h3>Dados de Endereço</h3>
                    <label>Endereço: ${response.endereco}</label>
                    <label>Número: ${response.numero}</label>
                    <label>Bairro: ${response.bairro}</label>
                    <label>CEP: ${response.cep}</label>
                </div>
                <u>
                    Action Fitness
                </u>
            </div>`


        }).catch((error) =>{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo deu errado',
                footer: `<label>Contate o administrador! ${error}</label>`,
                timer: 2000
            })
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
