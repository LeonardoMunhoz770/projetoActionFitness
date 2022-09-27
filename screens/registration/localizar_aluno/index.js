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
    document.querySelector("#containerBusca").innerHTML += `
    <div class="formatacaoMatricula">
                
                <div class="dadosMatricula">
                    <h3>Dados de matrícula</h1>
                    <label>Nome: </label>
                    <label>CPF: </label>
                    <label>Gênero: </label>
                    <label>Telefone: </label>
                    <label>Data de Nascimento: </label>
                </div>
                <div class="dadosPlano">
                    <h3>Dados do Plano</h3>
                    <label>Nome: </label>
                    <label>Vigência: </label>
                    <label>Vencimento: </label>
                </div>
                <div class="dadosEndereco">
                    <h3>Dados de Endereço</h3>
                    <label>Endereço: </label>
                    <label>Número: </label>
                    <label>Bairro: </label>
                    <label>CEP: </label>
                </div>

                <u>
                    Action Fitness
                </u>
    </div>
    `
}