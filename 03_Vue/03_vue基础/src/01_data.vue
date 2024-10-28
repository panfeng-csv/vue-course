<script>
import MyButton from "../components/MyButton.vue"
import {shallowReactive} from "vue"
export default {
  data(){
    return{
      msg:"今天天气真不错！",
      stu:{
        name:"孙悟空",
        age:18,
        gender:"男",
        friend:{
          name:"猪八戒",
        }
      },
      hello:null
    }
    // return shallowReactive({
    //   msg:"大闸蟹今天没去玩游戏！",
    //   stu:{
    //     name:"孙悟空",
    //     age:18,
    //     gender:"男",
    //     friend:{
    //       name:"猪八戒",
    //     }
    //   }
    // })
  },
  components:{
    MyButton
  }
}
</script>

<template>
<h1>{{msg}}</h1>
<h2>{{stu.name}}--{{stu.age}}--{{stu.gender}}</h2>
<h3>{{stu.friend.name}}</h3>
<hr />
<h2>{{hello}}</h2>
<hr />
<MyButton></MyButton>
</template>