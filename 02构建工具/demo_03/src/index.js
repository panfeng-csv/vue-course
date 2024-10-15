//直接将css引入到js中
import "./style/index.css"
import An from "./assets/1.jpeg"
document.body.insertAdjacentHTML("beforeend", "<h1>今天天气真不错，风才12级</h1>")
document.body.insertAdjacentHTML("beforeend", `<img src="${An}" />`)
