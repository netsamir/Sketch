var app = new Vue({
  el: '#app',
  data: {
      VRed:'red',
      VBlue:'blue',
      VYellow:'yellow',
      VWhite1:'white_square_up',
      VWhite2:"white_rec_mid",
      VWhite3:"white_mid_down",
      VWhite4:"white_right_down"
  },
  methods: {
    fadeRed: function(){
      this.VRed = 'red-active'
    },
    fadeBlue: function(){
      this.VBlue = 'blue-active'
    },
    fadeYellow: function(){
      this.VYellow = 'yellow-active'
    },
    fadeWhite1: function(){
      this.VWhite1 = 'white_1'
    },
    fadeWhite2: function(){
      this.VWhite2 = 'white_2'
    },
    fadeWhite3: function(){
      this.VWhite3 = 'white_3'
    },
    fadeWhite4: function(){
      this.VWhite4 = 'white_4'
    }
  }
}) // end of Vue
