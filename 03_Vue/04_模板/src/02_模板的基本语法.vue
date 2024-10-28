<script setup>
const msg="我爱Vue!"
const html=`<h2>我是一段html代码</h2>`
const fn=()=>{
  console.log("哈哈哈");
}
</script>

<template>
<h1>{{"hello"+"world"}}</h1>
<h2>{{}}</h2>
<div>{{html}}</div>
<div v-text="html"></div>
<div v-html="html"></div>
</template>
