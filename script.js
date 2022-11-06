async function reqLogin(){
    const login = document.querySelector("#login").value;
    const senha = document.querySelector("#senha").value;
    let loading = document.querySelector(".lds-ring")
    loading.style.display = 'flex'

    await fetch("http://localhost:3000/login", {
        method: "POST",
        headers:{
            'Content-Type': 'application/json'        
        },
        body: JSON.stringify({
            login: login, 
            senha: senha
        })
    }).then( response => response.json())
    .then((response) =>{
        if(response.userValid !== true){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Usuário não encontrado!',
                timer: 2000
            })
        }else{
            localStorage.setItem('User', login)
            window.location.href = `./screens/menu/index.html`
        }
        
    }).finally(() =>{
        setTimeout(loading.style.display = 'none', 3000)
    }).catch((error ) =>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo deu errado',
            footer: `<label>Contate o administrador! ${error}</label>`,
            timer: 2000
          })
    })
}

const validarAcesso = () =>{
    //Busca o que foi digitado no campo login e senha
    const login = document.querySelector("#login").value;
    const senha = document.querySelector("#senha").value;

    //Verifica se os campos estão vazios.
    if(login.length == 0 || senha.length == 0){
        Swal.fire({
            icon:'warning',
            title: 'Oops...',
            text: 'Preencha todos os campos!',
            timer: 2000
        })
    }
        //Envia o login e senha para o backend realizar a validação
    else{    
        reqLogin()
    }
}

document.querySelector("#validar").addEventListener("click", function(){
    validarAcesso()
})

