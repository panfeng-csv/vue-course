<script setup>
import {ref,reactive,computed} from "vue"
const msg=ref("Hello Vue")
const obj=ref({
  name:"孙悟空",
  age:18
})

const obj2={
  name:ref("孙悟空"),
  age:ref(18)
}

const {name,age}=obj2

const changeMsgHandler=()=>{
  name.value="你看我变不变"
}

const newMsg=computed(()=>{
  return msg.value+"-你好，我爱Vue!"
})
</script>

<template>
<h1>{{msg}}</h1>
<h1>{{newMsg}}</h1>
<h2>{{obj.name}}</h2>
<!-- <h2>{{obj2.name.value}}</h2> -->
<h2>{{name}}</h2>
<h2>{{age}}</h2>
<button @click="changeMsgHandler">点我一下</button>
</template>
