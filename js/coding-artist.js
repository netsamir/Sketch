var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Oana mon amoureuse',
    inputText: '',
    key: 'vue',
    result: 'Try it',
    clicks: 0,
    styleSpot1: {
      background: "white"
    },
    controlId: 'red'
  }, // end of data
  methods: {
    MOana: function(){
      this.message = 'I love you';
      this.clicks++;
    }, // end of oana
    updateMessage: function(){
      if (this.inputText === this.key){
        this.result = "You Win"
      }
      else {
        this.result = "You loose"
      }
    }, // end of updateMessage
    colorMe: function(value){
      if(value % 2 === 0){
        this.styleSpot1.background = "red"
      } else {
        this.styleSpot1.background = "blue"
      }
    } // end of colorMe
  } // end of method
}) //end of Vue
