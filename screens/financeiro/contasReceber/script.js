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
                    document.querySelector("#Aluno").value = response.nome
                    document.querySelector("#Plano").value = response.tipoPlano
                    document.querySelector("#Status").value = 'Ativo'
                }
                
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


