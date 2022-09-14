class Queue{
    constructor(delay = 1000){
        this.delay = delay;
        this.callbackQueue = [];
    }

    add(callback){
        if (this.callbackQueue.length > 1) {
          this.callbackQueue.push(callback);
          setTimeout(callback, this.delay)
        } else {
            this.callbackQueue.push(callback);
            callback();
        }
    }
}

const a = new Queue();
a.add(()=>console.log('callback'))
a.add(()=>console.log('callback2'))
a.add(()=>console.log('callback3'))



const getApi = (keys) => {
  let errorKeys = []
  let listkey = [...keys];

  while (listkey.length) {
    let requests = listkey.splice(0, 5).map((key) => fetch(`https://api.github.com/search/repositories?q=${key}`))
    Promise.allSettled(requests)
    .then((results) => {
      results.forEach((result) => {
        if (result.status === "fulfilled" && result.value.ok) {
          result.value.json().then(res => console.log(res.items[0]));
        }else if (result.status === "rejected" || !result.value.ok) {
          errorKeys.push(result.value.url)
        }
      });
      return errorKeys
    }).then(res => {getApi(res)})
    
  }
};  

let keys = ['swift','rust','javascript','react', 'rx','ruby','rails','php','objective-c','html','css','pug']
getApi(keys)