<script setup>
import {ref} from "vue"
const imgPath=ref("/images/3.jpeg")
const changeImg=()=>{
  imgPath.value="/images/2.jpeg"
}
const attrs={
  id:"box1",
  class:"hello"
}
const attrName="title"
const attrValue="这是一个title属性"
</script>

<template>
  <!-- <button @click="changeImg">切换图片</button> -->
  <img :[attrName]="attrValue" :src="imgPath" alt="洛天依" />
  <div :="attrs"></div>
  <input type="text" :disabled="isDisabled" />

</template>
