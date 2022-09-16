const btnDebounce = document.getElementById("btnDebounce")
const btnThrottle = document.getElementById("btnThrottle")
const input = document.querySelector('#input')

btnDebounce.addEventListener('click', debounced(() => {console.log('click debounce')}, 2000))
btnThrottle.addEventListener('click', throttled(() => {console.log('click throttle')}, 2000))
input.addEventListener('input', throttled(()=>console.log(input.value), 3000))




// Debounce
function debounced(callback, delay = 0) {
    let timer;
    return () => {
        if (timer) clearTimeout(timer);
        timer = setTimeout((()=> callback()), delay)
    }
}

//Throttle

function throttled(callback, delay = 0) {
    let lastRun = delay;
    return () => {
        const now = new Date().getTime();
        if(now - lastRun >= delay){
            lastRun = now;
            callback();
        }
    }
}