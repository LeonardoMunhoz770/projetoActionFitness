const validarAcesso = () =>{
    let login = document.querySelector("#login").value;
    let senha = document.querySelector("#senha").value;

    console.log(login)
    console.log(senha);

    if(login.length == 0 || senha.length == 0){
        alert("Preencha todos os campos")
    }else{
        window.location.href = "../menu/index.html"
    }
}

document.querySelector("#validar").addEventListener("click", function(){
    validarAcesso()
})
