let input = document.querySelector(`.input`)
let first = document.querySelector(`.first`)
let second = document.querySelector(`.second`)


first.addEventListener(`click`,()=>{

    input.type = "text"
    first.style.display = "none"
    second.style.display = "block"

})

second.addEventListener(`click`,()=>{

    input.type = "password"
    first.style.display = "block"
    second.style.display = "none"

  
})