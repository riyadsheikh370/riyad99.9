let back = document.querySelector(".backup")
let menu_bg = document.querySelector(".menu_bg")

let scrollToTopp = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}



back.addEventListener("click", () => {
    scrollToTopp()
})

window.addEventListener("scroll", () => {
    let scrolling = window.scrollY
    if (scrolling > 100) {
        back.style.display = "block"
    } else {
        back.style.display = "none"
    }
    if (scrolling > 50) {
        menu_bg.classList.add("bg")
    } else {
        menu_bg.classList.remove("bg")
    }

})


let type = document.querySelector(".type")
let typeText = type.innerHTML;
let typeArr = typeText.split("");
type.innerHTML = "";
let typing = 0;



function typeJs() {
    if (typing < typeText.length) {
        typing++;
        type.innerHTML += typeText.charAt(typing)
        typeArr = typeText.split("");
    } else {
        typeArr.pop("");
        type.innerHTML = typeArr.join("")
        if (typeArr.length == 0) {
            typing = 0;
        }
        
    }
}
setInterval(() => {
    typeJs()
}, 150)



// let body = document.querySelector("body")
// let main = document.querySelector(".main")

// body.addEventListener("click",(e)=>{

//     if(e.target.classList[0] == "btn"){
//         main.classList.add("main2")
//         main.innerHTML = `<div><img src=${e.target.dataset.url} alt=""/><i>X</i></div>`
//     }else{
//         main.classList.remove("main2")
//         main.innerHTML = ""
//     }
    
    
// })