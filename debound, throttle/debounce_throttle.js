const btnDebounce = document.getElementById("btnDebounce")
const btnThrottle = document.getElementById("btnThrottle")
const input = document.querySelector('#input')

btnDebounce.addEventListener('click', debounced((e) => {console.log(e.target)}, 2000))
btnThrottle.addEventListener('click', throttled(() => {console.log('click throttle')}, 2000))
input.addEventListener('input', throttled(()=>console.log(input.value), 3000))




// Debounce
function debounced(callback, delay = 0) {
    let timer;
    return (...arg) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout((()=> callback(...arg)), delay)
    }
}

//Throttle

function throttled(callback, delay = 0) {
    let lastRun = 0;
    return (...arg) => {
        const now = new Date().getTime();
        if(now - lastRun < delay){
            return;
        }
        lastRun = now;
        callback(...arg);
    }
}