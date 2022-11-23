let containerButton = document.querySelector(".containerStart")

document.querySelector("#showButton").addEventListener("click", function(){
    if(containerButton.style.display === 'none'){
            containerButton.style.display = "block"
            containerButton.style.display = 'flex'
    }else{
        containerButton.style.display = 'none'
        
    }
    
})


let botao = document.querySelectorAll('.botao').forEach(btn =>{
    btn.addEventListener("click", () => {
        let planoSelect = btn.dataset.plano
        console.log(planoSelect)
        const urlParams = new URLSearchParams(window.location.search)
        urlParams.set('plano', `${planoSelect}`)
        window.location.search = urlParams
        window.location.href = `../registration/matricula/index.html?${urlParams}`
    })
})


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


fetch("http://127.0.0.1:3000/plano", {
    method: 'GET',
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}).then(response => response.json())
.then(response =>{
    console.log(response)
    document.querySelector("#plano_basico_valor").innerHTML += response.dados[0].planos[0].valor
    document.querySelector("#plano_completo_valor").innerHTML += response.dados[0].planos[1].valor
    document.querySelector("#plano_familiar_basico_valor").innerHTML += response.dados[0].planos[4].valor
    document.querySelector("#plano_familiar_completo_valor").innerHTML += response.dados[0].planos[3].valor
    document.querySelector("#plano_especializado_valor").innerHTML += response.dados[0].planos[2].valor
})



