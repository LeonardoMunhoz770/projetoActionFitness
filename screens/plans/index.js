let containerButton = document.querySelector(".containerStart")

document.querySelector("#showButton").addEventListener("click", function(){
    if(containerButton.style.display === 'none'){
            containerButton.style.display = "block"
            containerButton.style.display = 'flex'
    }else{
        containerButton.style.display = 'none'
        
    }
    
})


document.querySelector("#selectPlano").addEventListener("click", function(){7
    plano = document.querySelector("#plano").textContent
    const urlParams = new URLSearchParams(window.location.search)
    urlParams.set('plano', `${plano}`)
    window.location.search = urlParams
    window.location.href = `../registration/matricula/index.html?${urlParams}`
})
