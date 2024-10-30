

const div1=document.getElementById("div1")
const div2=document.getElementById("div2")
const box = document.getElementById("box")



box.addEventListener("mouseover", (event)=>{


    div1.style.display="none"
    div2.style.display="flex"
    

})

box.addEventListener("mouseout", (event)=>{

    event.target.style.background = "aquamarine"
     div2.style.background="aquamarine"
      div1.style.background="aquamarine"
        div1.style.display="block"
        div2.style.display="none"

})