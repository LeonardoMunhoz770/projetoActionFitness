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

let dados = [
    {
        
    }
]

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



    console.log(dados)
})



function imprimirDados() {
    let conteudo = document.querySelector('#dados').innerHTML;
   tela_impressao = window.open('about:blank');
   tela_impressao.document.write(conteudo);
   tela_impressao.window.print();
   tela_impressao.window.close();
}