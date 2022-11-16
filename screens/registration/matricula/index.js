let containerButton = document.querySelector(".containerStart")

document.querySelector("#showButton").addEventListener("click", function(){
    if(containerButton.style.display === 'none'){
            containerButton.style.display = "block"
            containerButton.style.display = 'flex'
    }else{
        containerButton.style.display = 'none'
        
    }
    
})


let optionsRegister = document.querySelector('.optionsRegister')

document.querySelector('#register').addEventListener('click', function(){
    if(optionsRegister.style.display === 'none'){
        optionsRegister.style.display = 'block'
    }else{
        optionsRegister.style.display = 'none'
    }
})

let dados = {}

document.querySelector('#btn').addEventListener("click", function(){
    

    let select = document.querySelector("#tipoPlano"); 
    let plano = select.options[select.selectedIndex].text;
    dados['plan'] = plano;
    let selectMatricula = document.querySelector('#vigencia');
    let vigencia = selectMatricula.options[select.selectedIndex].text;
    dados['vigencia'] = vigencia;
    let data = document.querySelector("#vencimento").value;
    dados['data'] = data;
    let cpf = document.querySelector('#cpf').value;
    dados['cpf'] = cpf;
    let nome = document.querySelector('#nome_completo').value;
    dados['nome'] = nome
    let nasc = document.querySelector('#nasc').value;
    dados['nasc'] = nasc
    let telefone = document.querySelector('#telefone').value;
    dados['telefone'] = telefone
    let selectGenero = document.querySelector('#genero');
    let genero = selectGenero.options[select.selectedIndex].text;
    dados['genero'] = genero;
    let cep = document.querySelector('#cep').value;
    dados['cep'] = cep
    let endereco = document.querySelector('#endereco').value;
    dados['endereco'] = endereco
    let numero = document.querySelector('#numero').value;
    dados['numero'] = numero
    let bairro = document.querySelector('#bairro').value;
    dados['bairro'] = bairro
    let email = document.querySelector("#e-mail").value;
    dados['email'] = email

    if(nome.length ==0 || cpf.length == 0 || cpf.length != 14 || telefone.length == 0 || endereco.length == 0 || numero.length == 0 || bairro.length == 0 || email.length == 0){
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Preencha todos os campos!',
            timer: 2000
        }
        )

    }else{
        document.querySelector('#dados').innerHTML += `
        <div >
            <h1>Informações de mátricula de ${dados.nome}</h1>
            <div>
                <h3>Dados de matrícula</h1>
                <label>Nome: ${dados.nome}</label><br>
                <label>CPF: ${dados.cpf}</label><br>
                <label>Gênero: ${dados.genero}</label><br>
                <label>Telefone: ${dados.telefone}</label><br>
                <label>Data de Nascimento: ${dados.nasc}</label>
                <label>E-mail:${email} </label>
            </div>
            <div>
                <h3>Dados do Plano</h3>
                <label>Nome: ${dados.plan}</label><br>
                <label>Vigência: ${dados.vigencia}</label><br>
                <label>Vencimento: ${dados.data}</label>
            </div>
            <div>
                <h3>Dados de Endereço</h3>
                <label>Endereço: ${dados.endereco}</label><br>
                <label>Número: ${dados.numero}</label><br>
                <label>Bairro: ${dados.bairro}</label><br>
                <label>CEP: ${dados.cep}</label><br>
            </div>

            <u>
                Action Fitness
            </u>
        </div>
    `
    fetch('http://127.0.0.1:3000/clientes',{
        method: 'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(
        Swal.fire(
            'Bom trabalho!',
            'Os dados foram enviados com sucesso!',
            'success'
        )
    )
    .catch(res =>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo deu errado',
            footer: `<label>Contate o administrador! ${res}</label>`,
            timer: 2000
        })
    })
    }
})


function limparQuery(){
    const urlParams = new URLSearchParams(window.location.search)
    urlParams.set('plano', '')
    window.location.search = urlParams
}


function imprimirDados() {
   let conteudo = document.querySelector('#dados').innerHTML;
   tela_impressao = window.open('Contrato Action Fitness');
   tela_impressao.document.write(conteudo);
   tela_impressao.window.print();
   tela_impressao.window.close();
   document.querySelector("#dados").remove()
   window.location.reload()
}

const inputCpf = document.querySelector("#cpf")


inputCpf.addEventListener('keypress', function(){
    let inputLength = inputCpf.value.length
    if(inputLength === 3 || inputLength === 7){
        inputCpf.value += '.'
    }else if(inputLength === 11){
        inputCpf.value += '-'
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


document.querySelector("#cep").addEventListener('blur', e=>{
    const codigopostal = document.querySelector("#cep").value;
    const url = `https://viacep.com.br/ws/${codigopostal}/json/`;
    fetch(url)
    .then(response => response.json())
    .then(json =>{
       if(json.logradouro){
           document.querySelector("#endereco").value = json.logradouro;
           document.querySelector("#bairro").value = json.bairro;
       }
    })
})


const selecionarSelect = () =>{
    if(location.search.slice(1) == null || location.search.slice(1).length == 0){

    }else{
    var query = location.search.slice(1);
    var partes = query.split('&');
    var data = {};
    partes.forEach(function (parte) {
        var chaveValor = parte.split('=');
        var chave = chaveValor[0];
        var valor = chaveValor[1];
        data[chave] = valor;
    }); 
    let text = data.plano.replace('+', ' ')
    let select = document.querySelector('#tipoPlano');
    for (var i = 0; i < select.options.length; i++) {
    if (select.options[i].text === text) {
        select.selectedIndex = i;
        break;
    }
}
    document.querySelector('#select').innerHTML += `${text} selecionado`

    }

    
}

selecionarSelect()


let user = localStorage.getItem('User')

document.querySelector("#user").innerHTML = user



document.querySelector("#imageLogin").addEventListener('click', function(){
    let sair = document.querySelector(".logof")

    if(sair.style.display === 'none'){
            sair.style.display = "block"
            sair.style.display = 'flex'
    }else{
        sair.style.display = 'none'
        
    }
})
