import MyButton from "../conponents/MyButton"; 
    
export default {
    data() {
      return {
        message: "我爱Vue!",
     };
    },
    components: {
      "my-button":MyButton
    },
    // template: `
    // <h1>{{message}}</h1>
    // <MyButton></MyButton>
    // <MyButton></MyButton>
    // <MyButton></MyButton>
    // `,
};
