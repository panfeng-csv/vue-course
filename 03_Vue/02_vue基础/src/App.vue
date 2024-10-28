<script>
// const obj={
//   msg:"哈哈,我是obj"
// }
// window.obj=obj

export default {
  data(){
    return {
      msg:"我爱Vue!"
    }
  },
  created(){
    this.$data.name="孙悟空"
  }
}
</script>

<template>
  <h1>{{msg}}</h1>
  <h2>{{name}}</h2>
</template>