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

const inputCpf = document.querySelector("#cpf")


inputCpf.addEventListener('keypress', function(){
    let inputLength = inputCpf.value.length
    if(inputLength === 3 || inputLength === 7){
        inputCpf.value += '.'
    }else if(inputLength === 11){
        inputCpf.value += '-'
    }
})

const inputCpfIndicado = document.querySelector("#cpfIndicado")


inputCpfIndicado.addEventListener("keypress", function(){
    let inputLength = inputCpfIndicado.value.length
    if(inputLength === 3 || inputLength === 7){
        inputCpfIndicado.value += '.'
    }else if(inputLength === 11){
        inputCpfIndicado.value += '-'
    }
})


document.querySelector("#pesquisar").addEventListener("click", function(){
    let campoCPF = document.querySelector("#cpf").value;

    if(campoCPF.length == 0 || campoCPF.length == null || campoCPF.length != 14){
        Swal.fire({
            icon:'warning',
            title: 'Oops...',
            text: 'Preencha todo o campo CPF!',
            timer: 2000
        })
    }else{
        fetch("http://localhost:3000/buscarMatricula", {
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cpf: campoCPF
            })
        }).then(response => response.json())
        .then(response =>{
            if(response.userValid == false){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Matricula não encontrada!',
                    timer: 2000
                })
            }else{
                document.querySelector("#indicado").value = response.nome
            }
        }) 
    }
})


document.querySelector("#imprimirDados").addEventListener("click", function(){
    let nomeIndicador = document.querySelector("#indicado").value
    let nomeIndicado = document.querySelector("#nomeIndicado").value
    let cpf = document.querySelector("#cpfIndicado").value;
    let telefone = document.querySelector("#telefone").value
    if(nomeIndicado.length == 0 || nomeIndicador.length == 0 || cpf.length == 0 || cpf.length != 14 || telefone.length == 0){
        Swal.fire({
            icon:'warning',
            title: 'Oops...',
            text: 'Preencha todos os campos!',
            timer: 2000
        })
    }else{
        document.querySelector("#imprimir").innerHTML += `
        <div>
            <h3>Dados de Indicação</h1>
            <label>Indicado por: ${nomeIndicador}</label><br>
            <label>Indicado: ${nomeIndicado}</label><br>
            <label>CPF: ${cpf}</label><br>
            <label>Telefone: ${telefone}</label><br>
        </div><br>

        <div>
            <h1>Liberação de acesso ACTION FITNESS</h1><br>
            <label>O Cliente ${nomeIndicado} está autorizado a acessar as dependências da academia de ginástica Action Fitness na data ____ no periodo de ___ ás ___ <br>
            A equipe Action deseja uma ótima experiência, seja bem vindo(a)!
            </label>
        </div>
        
    
    `
        let conteudo = document.querySelector("#imprimir").innerHTML
        tela_impressao = window.open('Indicação ActionFitness');
        tela_impressao.document.write(conteudo);
        tela_impressao.window.print();
        tela_impressao.window.close();
        document.querySelector("#imprimir").remove()
        window.location.reload()
    }
    
})

function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,""); 
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2");
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");
    return v;
}
function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
	id('telefone').onkeyup = function(){
		mascara( this, mtel );
	}
}