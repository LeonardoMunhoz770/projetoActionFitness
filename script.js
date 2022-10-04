const validarAcesso = () =>{
    const login = document.querySelector("#login").value;
    const senha = document.querySelector("#senha").value;

    
    if(login.length == 0 || senha.length == 0){

        function limparCampos(){
            document.querySelector("#alerta").remove()
        }

        let alerta = `<p class="alerta" id="alerta">Preencha todos os campos!</p>`
        let preencherCampos = document.querySelector("#containerInputs")
        preencherCampos.innerHTML += alerta;

        setTimeout(limparCampos, 1000)

        
    }else{
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
                function limparCampos(){
                    document.querySelector("#alerta").remove()
                }
                let alerta = `<p class="alerta" id="alerta">Credenciais incorretas!</p>`
                let erroCredenciais = document.querySelector("#containerInputs")
                erroCredenciais.innerHTML += alerta;

                setTimeout(limparCampos, 1000)
                
                
            }else{
                window.location.href = './screens/menu/index.html'
            }
        }).catch((error) =>{
            console.log(`Erro: ${error}`)
        })
    }
}

document.querySelector("#validar").addEventListener("click", function(){
    validarAcesso()
})
