const obj = {
    name: "孙悟空",
    age: 18
}


const handler = {
    get(target,prop,receiver) {
        return target[prop]
    },
     set(target, prop, value, receiver) {
         target[prop] = value
         return true
    }
}

const proxy = new Proxy(obj, handler)

proxy.age = 28
console.log(proxy.age)

