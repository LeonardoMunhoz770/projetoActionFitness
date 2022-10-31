let containerButton = document.querySelector(".containerStart")

document.querySelector("#showButton").addEventListener("click", function(){
    if(containerButton.style.display === 'none'){
            containerButton.style.display = "block"
            containerButton.style.display = 'flex'
    }else{
        containerButton.style.display = 'none'
        
    }
    
})

const inputCpf = document.querySelector("#cpf")


inputCpf.addEventListener('keypress', function(){
    let inputLength = inputCpf.value.length
    if(inputLength === 3 || inputLength === 7){
        inputCpf.value += '.'
    }else if(inputLength === 11){
        inputCpf.value += '-'
    }
})


document.querySelector("#pesquisar").addEventListener('click', function(){
    let cpf = document.querySelector("#cpf").value

    if(cpf.length == 0){
        Swal.fire({
            icon:'warning',
            title: 'Oops...',
            text: 'Preencha o campo CPF!',
            timer: 2000
        })
    }else{
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
                document.querySelector("#Aluno").value = response.nome
                document.querySelector("#Plano").value = response.tipoPlano
                document.querySelector("#Status").value = 'Ativo'

                document.querySelector('#historico').innerHTML += `
                <tr>
                    <th>Histórico de conta</th>
                    <th>Valor a pagar</th>
                    <th>Data de vencimento</th>
                    <th>Data de pagamento</th>
                    <th>Recibo</th>
                    <th>Pago</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><input type="checkbox"></td>
                </tr>
                
                `
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
    
})


function pegarDados(){

}