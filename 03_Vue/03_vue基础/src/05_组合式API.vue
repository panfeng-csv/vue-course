<script setup>
import {reactive} from "vue"

const msg="我爱Vue"
const count=0

function fn(){
  alert("哈哈哈,好快乐！")
}

const stu=reactive({
  name:"Tom"
})
</script>

<template>
  <h1 @click="fn">组合式API</h1>
  <h2>{{msg}} -- {{count}}</h2>
  <h3>{{stu.name}}</h3>


</template>