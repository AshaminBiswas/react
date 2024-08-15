const basket1 = document.querySelector(".basket1 h1 span")
const basket2 = document.querySelector(".basket2 h1 span")
const leftButton = document.querySelector(".left")
const rightButton = document.querySelector(".right")
let totalApple = 10;
let basket1Apple = totalApple;
let basket2Apple = totalApple - basket1Apple

basket1.innerText = totalApple;
basket2.innerText = basket2Apple

rightButton.addEventListener("click", () =>{
    
    if(basket1Apple > 0){
        basket1Apple--
        basket1.innerText = basket1Apple
        basket2Apple++
        basket2.innerText = basket2Apple
    }
})

leftButton.addEventListener("click", () =>{
    
    if(basket2Apple > 0){
        basket1Apple++
        basket1.innerText = basket1Apple
        basket2Apple--
        basket2.innerText = basket2Apple
    }
})