//直接将css引入到js中
// import "./style/index.css"
// import An from "./assets/1.jpeg"
document.body.insertAdjacentHTML("beforeend", "<h1>今天天气真不错,风才12级!2222221111</h1>")
// document.body.insertAdjacentHTML("beforeend", `<img src="${An}" />`)

// const a = 10
// const fn = () => { 
//     return "哈哈"
// }
// console.log(a)
// console.log(fn())
document.body.onclick = () => {
    alert("你点我干嘛！")
}