<script>
export default {
  data(){
    return{
      msg:"今天天气真不错",
      stu:{
        name:"孙悟空",
        age:18,
        gender:"男"
      },
      firstName:"悟空",
      lastName:"孙",
      arr:["孙悟空","猪八戒","沙和尚"]
    }
  },
  methods: {
   updateAge(){
    if(this.stu.age===18){
      this.stu.age =17
    }else{
      this.stu.age =18
    }
   },
   
   getInfo(){
    console.log("getInfo调用了!");
    return this.stu.age>=18?"你是一个成年人。。。":"你是一个未成年人。。。"
   }
  },
  computed:{
    info(){
      console.log('--->,info调用了');
      return this.stu.age>=18?"你是一个成年人！!!":"你是一个未成年人!!！"
    },
    // name(){
    //   return this.lastName+this.firstName
    // }
    name:{
      get(){
        return this.lastName+this.firstName
      },
      set(value){
        this.lastName=value[0]
        this.firstName=value.slice(1)
      }
    }
  }
}
</script>

<template>
<p>{{msg}}</p>
<h1>{{stu.name}}--{{stu.age}}--{{stu.gender}}</h1>
<h2>评语：{{info}}</h2>
<h2>methods：{{getInfo()}}</h2>
<button @click="updateAge">减龄</button>
<hr />
<h3>{{name}}</h3>
<hr />  
<h2>{{arr[0]}}--{{arr[1]}}--{{arr[2]}}</h2>
</template>