async function reqLogin(){
    const login = document.querySelector("#login").value;
    const senha = document.querySelector("#senha").value;
    let loading = document.querySelector(".lds-ring")
    loading.style.display = 'flex'

    await fetch("http://127.0.0.1:3000/login", {
        method: "POST",
        headers:{
            'Content-Type': 'application/json'        
        },
        body: JSON.stringify({
            login: login, 
            senha: senha
        })
    }).then((response) =>{
        if(response != true){
            function noLoading(){
                loading.style.display = 'none'
                
            }
            setTimeout(noLoading, 3000)
        }else{
            function noLoading(){
                loading.style.display = 'none'
                enviarLogin()
            }
            setTimeout(noLoading, 3000)
        }
        
    }).finally(() =>{
        
    })
}

const validarAcesso = () =>{
    //Busca o que foi digitado no campo login e senha
    const login = document.querySelector("#login").value;
    const senha = document.querySelector("#senha").value;

    //Verifica se os campos estão vazios.
    if(login.length == 0 || senha.length == 0){
        console.log('Campos vázio. por favor preencha todos os campos')
    }
        //Envia o login e senha para o backend realizar a validação
    else{    
        reqLogin()
    }
}

//Envia o user via query com encode para utilizar na tela de menu na opção usuário logado e avança para a próxima tela.
const enviarLogin = () =>{
    let user = document.querySelector("#login").value;
    const urlParams = new URLSearchParams(window.location.search)
    urlParams.set('user', `${btoa(user)}`)
    window.location.search = urlParams
    window.location.href = `./screens/menu/index.html?${urlParams}`

}

document.querySelector("#validar").addEventListener("click", function(){
    validarAcesso()
})

