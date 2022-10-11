let containerButton = document.querySelector(".containerStart")

document.querySelector("#showButton").addEventListener("click", function(){
    if(containerButton.style.display === 'none'){
            containerButton.style.display = "block"
            containerButton.style.display = 'flex'
    }else{
        containerButton.style.display = 'none'
        
    }
    
})

let optionsRegister = document.querySelector('.user')

document.querySelector('#register').addEventListener('click', function(){
    if(optionsRegister.style.display === 'none'){
        optionsRegister.style.display = 'block'
    }else{
        optionsRegister.style.display = 'none'
    }
})




document.querySelector("#registrar").addEventListener('click', enviarDados)

function enviarDados(){

    let loading = document.querySelector(".lds-dual-ring")
    loading.style.display = 'flex'
    let nome = document.querySelector("#nomeColaborador").value;
    let usuario = document.querySelector("#userColaborador").value;
    let senha = document.querySelector("#senhaColaborador").value
    
    fetch('http://localhost:3000/funcionarios',{
        method: 'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            usuario: usuario,
            senha: senha
        })
    }).then((response) =>{
        console.log('Usuário registrado.')
    }).catch((error) =>{
        alert(`Erro:${error} - Contate o adminsitrador do sistema.`)
    }).finally(() =>{
        setTimeout(loading.style.display = 'none', 3000)
    })
}
