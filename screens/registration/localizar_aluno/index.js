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
        alert('Preencha o campo CPF')
    }else{
        document.querySelector("#containerBusca").innerHTML += `
    <div class="formatacaoMatricula">
                
                <div class="dadosMatricula">
                    <h3>Dados de matrícula</h1>
                    <label contenteditable="true" id="nome"> TESTE </label>
                    <label>CPF: TESTE</label>
                    <label>Gênero: TESTE</label>
                    <label>Telefone: TESTE</label>
                    <label>Data de Nascimento: TESTE</label>
                </div>
                <div class="dadosPlano">
                    <h3>Dados do Plano</h3>
                    <label>Nome: TESTE</label>
                    <label>Vigência: TESTE</label>
                    <label>Vencimento: TESTE</label>
                </div>
                <div class="dadosEndereco">
                    <h3>Dados de Endereço</h3>
                    <label>Endereço: TESTE</label>
                    <label>Número: TESTE</label>
                    <label>Bairro: TESTE</label>
                    <label>CEP: TESTE</label>
                </div>

                <u>
                    Action Fitness
                </u>
    </div>
    `
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
