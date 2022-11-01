
//Busca via query o parâmetro passado de login e imprimi na tela num spam
function armazenarUsuario(){ 
    let query = location.search.slice(1);
    let partes = query.split('&');
    let data = {};
    partes.forEach(function (parte) {
        let chaveValor = parte.split('=');
        let chave = chaveValor[0];
        let valor = chaveValor[1];
        let user = atob(valor)
        data[chave] = user;
        console.log(user)
    });
}
armazenarUsuario()

let user = localStorage.getItem('User')
document.querySelector("#user").innerHTML = `${user}`




