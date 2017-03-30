var velocity1 = new Vue({
  el: '#velocity1',
  data: {
    showScene1: true,
    title: 'Start menu',
    showTitle: true,
    buttonText: "Animate"
  },
  methods: {
    toggleTitle: function(){
      if (this.showTitle){
        this.showTitle = false;
      } else {
        this.showTitle = true;
      }
    }, // end of toggleTitle
    startApp: function(){
      this.showScene1 = false;
      scene2.showScene2 = true;
    } // end of startApp
  } // end of methods
}); // end of Vue scene1

var scene1 = new Vue({
  el: '#scene1',
  data: {
    showScene1: true,
    title: 'Start menu',
    showTitle: true,
    buttonText: "Animate"
  },
  methods: {
    toggleTitle: function(){
      if (this.showTitle){
        this.showTitle = false;
      } else {
        this.showTitle = true;
      }
    }, // end of toggleTitle
    startApp: function(){
      this.showScene1 = false;
      scene2.showScene2 = true;
    } // end of startApp
  } // end of methods
}); // end of Vue scene1

var scene2 = new Vue({
  el: '#scene2',
  data: {
    showScene2: false,
    message: "Hello World!",
    clicks: 0
  }, // end of data
}); // end of Vue

var app2 = new Vue({
  el: '#app2',
  data: {
    color: 'red',
    color2: 'silver',
    color3: 'green',
    color4: 'black',
    color5: 'teal',
    color6: 'purple',
    color7: 'green',
  }, // end of data
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
