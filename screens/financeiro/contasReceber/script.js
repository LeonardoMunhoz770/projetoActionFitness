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

    if(cpf.length == 0 || cpf.length != 14) {
        Swal.fire({
            icon:'warning',
            title: 'Oops...',
            text: 'Preencha todo o campo CPF!',
            timer: 2000
        })
    }else{
        fetch('http://localhost:3000/buscarConta',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'        
        },
        body: JSON.stringify({
        cpf: cpf    
        })
        }).then(response => response.json())
            .then((response) =>{
                if(response.menssagem == "cliente não existe"){
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Matricula não encontrada!',
                        timer: 2000
                    })
                }else{
                    document.querySelector("#Aluno").value = response.nomeConta
                    document.querySelector("#Plano").value = response.nomePlano
                    document.querySelector("#Status").value = 'Ativo'
                    let data = new Date();
                    let dia = String(data.getDate()).padStart(2, '0');
                    let mes = String(data.getMonth() + 1).padStart(2, '0');
                    let ano = data.getFullYear();
                    let dataAtual = dia + '/' + mes + '/' + ano;
                    let table = document.querySelector("#historico")
                    for(i = 1; i < table.rows.length; i++){
                        table.rows[i].cells[0].innerHTML = response.vigencia
                        table.rows[i].cells[1].innerHTML = response.valor
                        table.rows[i].cells[3].innerHTML = dataAtual
                        table.rows[i].cells[4].innerHTML = Math.floor(Math.random() * 500)
                    }
                    table.rows[1].cells[2].innerHTML = response.dataV1
                    table.rows[2].cells[2].innerHTML = response.dataV2
                    table.rows[3].cells[2].innerHTML = response.dataV3
                    table.rows[4].cells[2].innerHTML = response.dataV4
                    table.rows[5].cells[2].innerHTML = response.dataV5
                    table.rows[6].cells[2].innerHTML = response.dataV6
                    table.rows[7].cells[2].innerHTML = response.dataV7
                    table.rows[8].cells[2].innerHTML = response.dataV8
                    table.rows[9].cells[2].innerHTML = response.dataV9
                    table.rows[10].cells[2].innerHTML = response.dataV10
                    table.rows[11].cells[2].innerHTML = response.dataV11
                    table.rows[12].cells[2].innerHTML = response.dataV12
                    console.log(response.valor)
                }
                
            }).catch((error) =>{
                console.log(error)
         })       
    }
    
})


function pegarDados(){

}




let optionsRegister = document.querySelector('.containerOptions')

document.querySelector('#showOptions').addEventListener('click', function(){
    if(optionsRegister.style.display === 'none'){
        optionsRegister.style.display = 'block'
    }else{
        optionsRegister.style.display = 'none'
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


