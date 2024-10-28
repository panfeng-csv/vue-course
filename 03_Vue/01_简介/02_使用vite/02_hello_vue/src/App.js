import MyButton from "../conponents/MyButton"; 
    
export default {
    data() {
      return {
        message: "我爱Vue!",
     }
    },
    
    components: {
      MyButton
    },
    
    template: `
    <h1>{{message}}</h1>
    <MyButton></MyButton>
    `,
};
