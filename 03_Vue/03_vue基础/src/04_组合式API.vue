<script>
import { reactive } from "vue";
  export default{
    setup() {
      let msg="今天天气真不错！"
      let count=0
      
      const stu=reactive({
        name:"孙悟空",
        age:18,
        gender:"男"
      })

      function changeAge() {
        stu.age=44
      }

      return {
        msg,
        count,
        stu,
        changeAge
      }
    }
  }
</script>

<template>
  <h1>演示组合式API</h1>
  <h2>{{msg}}</h2>
  <h3>{{count}}</h3>
  <button @click="changeAge">点我一下</button>
  <h2>{{stu.name}}-{{stu.age}}--{{stu.gender}}</h2>
</template>
