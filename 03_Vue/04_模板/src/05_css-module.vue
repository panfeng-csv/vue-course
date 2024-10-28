<script setup>
import MyBox from "./components/MyBox.vue"
</script>

<template>
  <div class="app">
      <h1>今天天气真不错！</h1>
      <div :class="classes.box1">App中的box1</div>
      <MyBox></MyBox>
  </div>
</template>

<style module="classes">
  .box1{
    background-color:#bfa;
  }
</style>
