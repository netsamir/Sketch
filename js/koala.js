$(function() {
  var app = new Vue({
    el: '#app',
    data: {
      eyesClass : "inner_eye",
    }, // end of data
    methods: {
      punch: function(){
        this.eyesClass = "inner_eye_active" 
      } // end of punch
    } // end of method
  }) // end of view
}); // end doc ready
