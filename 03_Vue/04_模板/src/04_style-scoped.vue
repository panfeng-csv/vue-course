<script setup>
import MyBox from "./components/MyBox.vue"
</script>

<template>
  <div class="app">
      <h1>今天天气真不错！</h1>
      <div class="box1">App中的box1</div>
      <MyBox></MyBox>
  </div>
</template>

<!-- <style>
  h1{
    background-color:#bfa;
  }
  .box1{
    width:200px;
    height:200px;
    background-color:yellowgreen;
  }
</style> -->

<style scoped>
  h1{
    background-color:orange;
  }
  .box1{
    width:200px;
    height:200px;
    background-color:#bfa;
  }
  .app :deep(h2){
    color:yellow;
  }

  :global(div){
    border:1px solid red;
    
  }
</style>

<!-- <style>
  div{
    border:1px solid red;
  }
</style> -->