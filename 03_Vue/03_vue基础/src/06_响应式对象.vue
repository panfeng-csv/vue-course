<script setup>
import {reactive,ref} from "vue"

const stu=reactive({
  name:"Tom"
})

let count= ref(0)

function fn() {
  count.value++
}
</script>

<template>
  <h1>组合式API</h1>
  <h2 @click="fn">{{count}}</h2>
  
</template>