import { createApp } from "vue/dist/vue.esm-bundler.js"

const App = {
    data() { 
        return {
            message:"我爱Vue!"
        }
    },
    template:`<h1>{{message}}</h1`
}

createApp(App).mount("#app") 