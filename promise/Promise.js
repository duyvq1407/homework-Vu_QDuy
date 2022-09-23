class Queue {
  constructor(delay = 1000) {
    this.delay = delay;
    this.callbackQueue = [];
  }

  add(callback) {
    if (this.callbackQueue.length === 0) {
      this.callbackQueue.push(callback);
      this.runcallback();
    } else {
      this.callbackQueue.push(callback);
    }
  }

  runcallback() {
    const callback = this.callbackQueue[0];
    setTimeout(() => {
      this.callbackQueue.shift();
      if (this.callbackQueue.length > 0) {
        this.runcallback();
      }
    }, this.delay);
    return new Promise((resolve, reject) => resolve(callback()))
  }

}

const cb1 = () => 1;
const cb2 = () => 2;
const cb3 = () => 3;
const cb4 = () => 4;

const queue1 = new Queue(1500);
let a = queue1.add(cb1);
let b = queue1.add(cb2);

console.log(a.then(res => console.log(new Date().getTime(),res)))
console.log(b.then(res => console.log(new Date().getTime(),res)))



const keys = ['swift','rust','javascript','react', 'rx','ruby','rails','php','objective-c','html','css','pug']

const getApi = () => {
  const listkey = [...keys];
  if (listkey.length === 0) {
    return
  }
  const keyRequests = listkey.splice(0, 3);

  const requests = keyRequests.map((key) => fetch(`https://api.github.com/search/repositories?q=${key}`))

  Promise.allSettled(requests)
  .then((results) => {
    const fulfilled = []
    results.forEach((result, num) => {
      if (result.status === "fulfilled" && result.value.ok) {
        fulfilled.push(result.value.json())
      }else if (result.status === "rejected" || !result.value.ok) {
        listkey.push(keyRequests[num])
      }
    });
    return Promise.all(fulfilled);
  })
  .then(jsons => {
    jsons.forEach(item => console.log(item.items[0]))
  })
  .then(()=>getApi())
};  

// getApi(keys)


const functionPromise = () => {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < 5; i++) {
      let numRandom = parseInt(Math.random() * 100)
      if (numRandom % 2 === 0) {
        resolve(numRandom)
      }
    }
    reject(new Error('Promise failed'))
  })
};


// functionPromise().then(result => console.log(result))
//        .catch((err) => console.log(err))