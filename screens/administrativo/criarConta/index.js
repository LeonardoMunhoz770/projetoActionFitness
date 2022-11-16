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
    if(nome.length == 0 || usuario.length == 0 || senha.length == 0){
        setTimeout(loading.style.display = 'none', 3000)
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Preencha todos os campos!',
            timer: 3000
        })
    }else{
        fetch('http://localhost:3000/funcionario',{
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
            Swal.fire(
                'Bom trabalho!',
                'Os dados foram enviados com sucesso!',
                'success'
            )
        }).catch((error) =>{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo deu errado',
                footer: `<label>Contate o administrador! ${error}</label>`,
                timer: 3000
            })
        }).finally(() =>{
            setTimeout(loading.style.display = 'none', 3000)
        })
    }
    
}

let user = localStorage.getItem('User')
document.querySelector("#user").innerHTML = `${user}`


document.querySelector("#imageLogin").addEventListener('click', function(){
    let sair = document.querySelector(".logof")

    if(sair.style.display === 'none'){
            sair.style.display = "block"
            sair.style.display = 'flex'
    }else{
        sair.style.display = 'none'
        
    }
})


