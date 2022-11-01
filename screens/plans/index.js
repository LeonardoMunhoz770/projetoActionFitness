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
