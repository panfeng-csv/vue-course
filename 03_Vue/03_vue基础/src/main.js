
import { createApp } from 'vue'
import App from './App.vue'

const app=createApp(App)
const vm = app.mount("#app")

window.vm = vm
window.app=app
