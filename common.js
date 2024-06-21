const add = document.getElementById('add');
const remove = document.getElementById('remove');
const current = document.getElementById('current');
const totalCurrent = document.getElementById('totalCurrent');
const cart = document.querySelector('.cart-box');
const close = document.getElementById('close');

let total = totalCurrent.textContent;
let currentNumber = 1;



function updateDisplay(){
    if(currentNumber >= 0){
        current.textContent = currentNumber;
        totalCurrent.textContent = (total*currentNumber).toFixed(2);
    }
    else{
        current.textContent = 0;
    }
}
function showSidebar(){
    const Sidebar = document.querySelector('.sidebar')
    Sidebar.style.display = 'flex'
}
function closeSidebar(){
    const Sidebar = document.querySelector('.sidebar')
    Sidebar.style.display = 'none'
} 
add.addEventListener('click',function add (){
    currentNumber +=1;

    updateDisplay()
})
remove.addEventListener('click',function remove (){
    currentNumber -=1;
    updateDisplay()
})
cartIcon.addEventListener('click',function cartIcon(){
    cart.style.display = 'Grid'
}); 
close.addEventListener('click',function close(){
     cart.style.display ='none'
});
window.addEventListener('load',()  =>{
    const loader = document.querySelector(".loader");
    loader.classList.add("loader-hidden");
    loader.addEventListener("transitionend", () =>{
        document.body.removeChild('loader')
    })
})