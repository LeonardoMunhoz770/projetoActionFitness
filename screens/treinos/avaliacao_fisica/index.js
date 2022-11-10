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





document.querySelector("#altura").addEventListener("keypress", function(){
    let altura = document.querySelector("#altura").value;
    console.log(altura)
    let peso = document.querySelector("#peso").value;

    if(altura.length == 0 || peso.length == 0){
        console.log("função não executada")
    }else{
        let imc = peso/(altura * altura)
        document.querySelector("#imc").value = imc.toFixed(2);
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

document.querySelector("#enviarDados").addEventListener("click", function(){
    let cpf = document.querySelector("#cpf").value;
    let imc = document.querySelector("#imc").value;
    let idade = document.querySelector("#idade").value
    if(cpf.length == 0 || imc.length== 0 || idade.length == 0){
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Preencha todos os campos!',
            timer: 2000
        }
        )
    }else{
        const dados = {

        }
        dados['cpf'] = cpf;
        dados['imc'] = imc
        fetch("http://127.0.0.1/", {
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
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
                timer: 2000
            })
        })
    }
    
    
})