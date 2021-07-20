Vue.createApp({
  // data property
  data(){
    return{
      greet:"Hello"
    }
  },

  // method property
  methods:{
    greetMethod:()=>{
      alert(this.greet)
    }
  }

}).mount('#app')
