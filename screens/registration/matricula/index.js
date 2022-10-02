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
    

    let select = document.querySelector("#tipo_plano"); 
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
    let genero = selectGenero.options[selectGenero.selectedIndex].text;
    dados['genero'] = genero;
    let cep = document.querySelector('#cep').value;
    dados['cep'] = cep
    let endereco = document.querySelector('#endereco').value;
    dados['endereco'] = endereco
    let numero = document.querySelector('#numero').value;
    dados['numero'] = numero
    let bairro = document.querySelector('#bairro').value;
    dados['bairro'] = bairro

    console.log(dados)

    if(nome.length == 0 || cpf.length ==0 || telefone.length == 0 || endereco.length == 0 || numero.length == 0 || bairro.length == 0){
        function limparCampos(){
            document.querySelector("#alerta").remove()
        }

        let alerta = `<p class="alerta" id="alerta">Preencha todos os campos!</p>`
        let preencherCampos = document.querySelector("#dados_cadastrais")
        preencherCampos.innerHTML += alerta;

        setTimeout(limparCampos, 2000)

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
    alert("Dados registrados com sucesso!")
    }


    fetch('http://127.0.0.1:3000/clientes',{
        method: 'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(res =>{
        console.log("DADOS ENVIADOS", res)
    })
    .catch(res =>{
        console.log("ERRO:", res)
    })

    
    
})



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
