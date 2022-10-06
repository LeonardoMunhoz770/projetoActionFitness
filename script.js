
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
        fetch("https://reqres.in/api/login", {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: login,
                password: senha
            })
        }).then((response) =>{
            if(response.status !== 200){
                console.log("error")
                
            }else{
                enviarLogin()
                
            }
        }).catch((error) =>{
            console.log(`Erro: ${error}`)
        })
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

