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