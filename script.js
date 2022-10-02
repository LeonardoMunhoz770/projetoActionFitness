const validarAcesso = () =>{
    let login = document.querySelector("#login").value;
    let senha = document.querySelector("#senha").value;
    if(login.length == 0 || senha.length == 0){

        function limparCampos(){
            document.querySelector("#alerta").remove()
        }

        let alerta = `<p class="alerta" id="alerta">Preencha todos os campos!</p>`
        let preencherCampos = document.querySelector("#containerInputs")
        preencherCampos.innerHTML += alerta;

        setTimeout(limparCampos, 2000)

        
    }else{
        
        window.location.href = "./screens/menu/index.html"
    }
}

document.querySelector("#validar").addEventListener("click", function(){
    validarAcesso()
})
