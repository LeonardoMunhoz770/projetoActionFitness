let containerButton = document.querySelector(".containerStart")

document.querySelector("#showButton").addEventListener("click", function(){
    if(containerButton.style.display === 'none'){
            containerButton.style.display = "block"
            containerButton.style.display = 'flex'
    }else{
        containerButton.style.display = 'none'
        
    }
    
})



const selectPlanoBasico = () =>{
    plano = document.querySelector("#plano").textContent
    const urlParams = new URLSearchParams(window.location.search)
    urlParams.set('plano', `${plano}`)
    window.location.search = urlParams
    window.location.href = `../registration/matricula/index.html?${urlParams}`
}

const selectPlanoCompleto = () =>{
    plano = document.querySelector("#planoCompleto").textContent
    const urlParams = new URLSearchParams(window.location.search)
    urlParams.set('plano', `${plano}`)
    window.location.search = urlParams
    window.location.href = `../registration/matricula/index.html?${urlParams}`
}

const selectPlanoFamiliarBasico = () =>{
    plano = document.querySelector("#planoFamiliarBasico").textContent
    const urlParams = new URLSearchParams(window.location.search)
    urlParams.set('plano', `${plano}`)
    window.location.search = urlParams
    window.location.href = `../registration/matricula/index.html?${urlParams}`
}

const selectPlanoFamiliarCompleto = () =>{
    plano = document.querySelector("#planoFamiliarCompleto").textContent
    const urlParams = new URLSearchParams(window.location.search)
    urlParams.set('plano', `${plano}`)
    window.location.search = urlParams
    window.location.href = `../registration/matricula/index.html?${urlParams}`
}
