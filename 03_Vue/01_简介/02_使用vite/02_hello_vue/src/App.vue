<script>
import MyButton from "../conponents/MyButton.vue";
export default {
  data() {
    return {
      message: "我超级爱Vue!",
    }
  },
  components:{
    MyButton
  }
}
</script>

<template>
  <h1>{{ message }}</h1>
  <MyButton></MyButton>
</template>
