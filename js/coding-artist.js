var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Oana mon amoureuse',
    clicks: 0
  }, // end of data
  methods: {
    MOana: function(){
      this.message = 'I love you'
      this.clicks++;
    }, // end of oana
  } // end of method
}) //end of Vue
