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
    document.querySelector('#tipo_de_plano').innerHTML += plano
    dados['plan'] = plano;

    let selectMatricula = document.querySelector('#vigencia');
    let vigencia = selectMatricula.options[select.selectedIndex].text;
    document.querySelector('#vigencia_assinatura').innerHTML += vigencia
    dados['vigencia'] = vigencia;


    let data = document.querySelector("#vencimento").value;
    dados['data'] = data;
    document.querySelector('#data_vencimento').innerHTML += data

    let cpf = document.querySelector('#cpf').value;
    dados['cpf'] = cpf;
    document.querySelector('#cpf_completo').innerHTML += cpf
    
    
    
    let nome = document.querySelector('#nome_completo').value;
    dados['nome'] = nome
    document.querySelector('#name_completo').innerHTML += nome

    let nasc = document.querySelector('#nasc').value;
    dados['nasc'] = nasc
    document.querySelector('#nascimento_completo').innerHTML += nasc

    let telefone = document.querySelector('#telefone').value;
    dados['telefone'] = telefone
    document.querySelector('#tel').innerHTML += telefone

    let selectGenero = document.querySelector('#genero');
    let genero = selectGenero.options[selectGenero.selectedIndex].text;
    dados['genero'] = genero;
    document.querySelector('#genero_').innerHTML += genero


    let cep = document.querySelector('#cep').value;
    dados['cep'] = cep
    document.querySelector('#cep').innerHTML += cep


    let endereco = document.querySelector('#endereco').value;
    dados['endereco'] = endereco
    document.querySelector('#ender').innerHTML += endereco


    let numero = document.querySelector('#numero').value;
    dados['numero'] = numero
    document.querySelector('#num').innerHTML += numero


    let bairro = document.querySelector('#bairro').value;
    dados['bairro'] = bairro
    document.querySelector('#bairro').innerHTML += bairro

    console.log(dados)
})



function imprimirDados() {
    let conteudo = document.getElementById('dados').innerHTML;
   tela_impressao = window.open('about:blank');
   tela_impressao.document.write(conteudo);
   tela_impressao.window.print();
   tela_impressao.window.close();
}