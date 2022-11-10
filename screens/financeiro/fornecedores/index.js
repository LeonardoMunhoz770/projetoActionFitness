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

document.querySelector("#cep").addEventListener('blur', e=>{
    const codigopostal = document.querySelector("#cep").value;
    if(codigopostal.length == 0 || codigopostal.length == null || codigopostal.length != 7){
        
    }else{
    const url = `https://viacep.com.br/ws/${codigopostal}/json/`;
    fetch(url)
    .then(response => response.json())
    .then(json =>{
       if(json.logradouro){
           document.querySelector("#endereco").value = json.logradouro;
           document.querySelector("#bairro").value = json.bairro;
           document.querySelector("#uf").value = json.uf
       }
    })
    }
    
})

document.querySelector("#cnpj").addEventListener("blur", function(){
    let cnpj = document.querySelector("#cnpj").value

    if(cnpj.length == 0 || cnpj.length == null || cnpj.length != 14){

    }else{
        const url = `https://publica.cnpj.ws/cnpj/${cnpj}`
        fetch(url,)
        .then(response => response.json())
        .then((response) =>{
            console.log(response)
        document.querySelector("#razao_social").value = response.razao_social
        document.querySelector("#uf").value = response.estabelecimento.cidade.nome
        document.querySelector("#bairro").value = response.estabelecimento.bairro
        document.querySelector("#numero").value = response.estabelecimento.numero
        document.querySelector("#pais").value = response.estabelecimento.pais.nome
        document.querySelector("#cep").value = response.estabelecimento.cep
        document.querySelector("#e_mail").value = response.estabelecimento.email
        document.querySelector("#ie_rg").value = response.estabelecimento.inscricoes_estaduais[0].inscricao_estadual
        document.querySelector("#endereco").value = response.estabelecimento.logradouro
        document.querySelector("#telefone").value = response.estabelecimento.telefone1
        document.querySelector("#cidade").value = response.estabelecimento.cidade.nome
    })
    }
    
})


const dados = {

}

document.querySelector("#btn").addEventListener("click",function(){
    let fisica_juridica = document.querySelector("#fisica_juridica").value;
    console.log(fisica_juridica)
    dados["fisica_juridica"] = fisica_juridica
    let razao_social = document.querySelector("#razao_social").value;
    dados['razao_social'] = razao_social;
    let cnpj = document.querySelector("#cnpj").value;
    dados["cnpj"] = cnpj;
    let ie_rg = document.querySelector("#ie_rg").value;
    dados["ie_rg"] = ie_rg;
    let telefone = document.querySelector("#telefone").value;
    dados["telefone"] = telefone;
    let e_mail = document.querySelector("#e_mail").value
    dados["e_mail"] = e_mail;
    let cep = document.querySelector("#cep").value;
    dados["cep"] = cep;
    let endereco = document.querySelector("#endereco").value;
    dados["endereco"] = endereco
    let numero = document.querySelector("#numero").value;
    dados["numero"] = numero
    let bairro = document.querySelector("#bairro").value;
    dados["bairro"] = bairro;
    let uf = document.querySelector("#uf").value;
    dados["uf"] = uf
    let pais = document.querySelector("#pais").value;
    dados["pais"] = pais
    let cidade = document.querySelector("#cidade").value;
    dados["cidade"] = cidade;


    if(razao_social.length == 0 || cnpj.length == 0 || ie_rg.length == 0 || telefone.length == 0 || e_mail.length == 0 || cep.length == 0 || endereco.length == 0 || numero.length == 0 || bairro.length == 0 || uf.length == 0 || pais.length == 0 || cidade.length == 0 || fisica_juridica.length == 0){
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Preencha todos os campos!',
            timer: 2000
        }
        )
    }else{
        fetch('http://127.0.0.1:3000/fornecedor',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        }).then(() =>{
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
            })
            
        })
    }
})





