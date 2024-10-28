<script>
export default {
  data(){
    return{
      msg:"今天天气真不错!"
    }
  },
  methods:{
    sum(a,b){
      return a+b
    },
    changeMsg(){
      this.msg="新的消息！"
    }
  }
}
</script>

<template>
<h1>{{msg}}</h1>
<h2>{{sum(2,5)}}</h2>
<button @click="changeMsg">点我一下</button>
</template>