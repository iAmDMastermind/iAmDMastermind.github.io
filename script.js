const opay = document.getElementById("opay")
const opayBtn = document.getElementById("OPaybtn")

const momo = document.getElementById("momo")
const MomoBtn = document.getElementById("MomoBtn")
const close = document.getElementsByClassName(".close")

opayBtn.addEventListener("click", ()=>{
    opay.style.display= 'flex';
    opay.style.flexDirection= 'column';
})

opay.addEventListener('click', (event)=>{
    if (event.target ==! opay){
        opay.style.display = 'none'
    }
})

MomoBtn.addEventListener("click", ()=>{
    momo.style.display= 'flex';
    momo.style.flexDirection= 'column';
})


close.addEventListener("click", ()=>{
    opay.style.display= 'none';
})