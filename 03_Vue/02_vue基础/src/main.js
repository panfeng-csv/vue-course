
import { createApp } from 'vue'
import App from './App.vue'

const app=createApp(App)
const vm=app.mount("#app")

// console.log(vm);
// createApp(App).mount('#app')
window.vm = vm
window.app=app
