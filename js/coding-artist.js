var app2 = new Vue({
  el: '#app2',
  data: {
    color1: 'background-color: red;'
  }, // end of data
  methods: {} // end of methods
}) // end of app2

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Oana mon amoureuse',
    inputText: '',
    inputCheckbox: '',
    checkboxMessage: '',
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
   updateCheckbox: function(){
      if (this.inputCheckbox){
       this.checkboxMessage = "The value is true"
      } else {
       this.checkboxMessage = "The value is false"
      }

    }, // end of updateCheckbox
    updateMessage: function(){
      this.inputText = this.inputText.toLowerCase()

      if (this.inputText === this.key){
        this.result = "You Win"
      }
      else if (this.inputText === ''){
        this.result = "Try it"
      } else {
        this.result = 'Nope'
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
