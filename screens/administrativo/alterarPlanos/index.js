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
let containerButton = document.querySelector(".containerStart")

document.querySelector("#showButton").addEventListener('click', function(){
    if(containerButton.style.display === 'none'){
        containerButton.style.display = "block"
        containerButton.style.display = 'flex'
    }else{
        containerButton.style.display = 'none'
        
    }
})

let optionsRegister = document.querySelector('.containerOptions')

document.querySelector('#showOptions').addEventListener('click', function(){
    if(optionsRegister.style.display === 'none'){
        optionsRegister.style.display = 'block'
    }else{
        optionsRegister.style.display = 'none'
    }
})



    document.querySelector("#valor").addEventListener("keypress", function(){
        formatarMoeda()
    })

    function formatarMoeda() {
        var elemento = document.getElementById('valor');
        var valor = elemento.value;

        valor = valor + '';
        valor = parseInt(valor.replace(/[\D]+/g, ''));
        valor = valor + '';
        valor = valor.replace(/([0-9]{1})$/g, ".$1");

        if (valor.length > 6) {
            valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1.$2");
        }

        elemento.value = valor;
        if(valor == 'NaN') elemento.value = '';
    }



const dados ={

}

document.querySelector('#enviarDados').addEventListener("click", function(){
    let valorPlano = document.querySelector("#valor").value
    let plano = document.querySelector("#plano").value
    console.log(plano, valorPlano)
    if(valorPlano.length == 0){
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Preencha todos os campos!',
            timer: 2000
        }
        )
    }else{
        dados['Plano'] = plano
        dados['Valor'] = valorPlano
        fetch('http://127.0.0.1:3000/alterarPlano', {
            method: 'PUT',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)

        }).then(response => response.json())
        .then((response) =>{
            Swal.fire({
                icon: "success",
                title: 'Bom trabalho',
                text: `${response.menssagem}`,
                timer:2000
            })
        })
        .catch((error) =>{
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