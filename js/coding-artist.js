var velocity1 = new Vue({
  el: '#velocity1',
  data: {
    showScene1: true,
    title: 'Velocity',
    showTitle: true,
    buttonText: "Velocity"
  },
  methods: {
    enter: function(el, done){
      $.Velocity(el, { opacity: 1, fontSize: '60px' }, { duration: 300 })
      $.Velocity(el, { fontSize: '40px' }, { complete: done })
    }, // end of enter
    leave: function(el, done){
      $.Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
      $.Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      $.Velocity(el, {
        rotateZ: '45deg',
        translateY: '30px',
        translateX: '30px',
        opacity: 0
      }, { complete: done })
    }, // end of leave
    toggleTitle: function(){
      if (this.showTitle){
        this.showTitle = false;
      } else {
        this.showTitle = true;
      }
    }, // end of toggleTitle
  } // end of methods
}); // end of Vue velocity1

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

// D3 scripts
//
//
beta = [ 1.36, 1.07, 1.12, 0.88, 0.85, 1.12, 0.86, 0.47, 0.79, 0.91, 1.22, 1.08, 1.01, 1.07, 1.12, 1.00, 1.52, 1.20, 1.36, 0.99, 1.06, 1.31, 0.76, 1.40, 1.02, 1.23, 1.14, 1.08, 0.86, 1.18, 1.20, 0.85, 0.92, 0.65, 0.75, 1.20, 0.84, 1.14, 1.04, 0.94, 0.95, 1.08, 1.10, 0.96, 0.80, 0.98, 0.90, 1.03, 0.83, 0.90, 1.06, 1.30, 1.49, 1.08, 1.38, 1.20, 1.37, 0.84, 1.12, 0.54, 1.25, 1.32, 0.72, 0.68, 1.27, 0.99, 0.92, 0.75, 0.77, 0.91, 1.30, 1.10, 1.05, 0.69, 1.23, 1.02, 1.35, 1.20, 1.10, 1.20, 0.85, 0.98, 1.13, 1.13, 1.60, 1.12, 0.99, 1.04, 1.28, 1.01, 0.79, 1.21, 0.38, 0.65]

function render(data){

  var barWidth = 15;
  var barPadding = 3;
  var maxValue = d3.max(beta);

  function xloc(d, i) { return i * (barWidth + barPadding); };
  function yloc(d) { return maxValue * 100 - d * 100; };
  function translator(d, i) {
      return "translate(" + xloc(d, i) + "," + yloc(d) + ")";
    };

  // UPDATE
  var graphGroup = d3.select('#beta')
    .append('svg')
    .attr("width", 1100)
    .attr("height", 400)
    .append('g')

  // ENTER
  var barGroup = graphGroup.selectAll('g')
    .data(data)
    .enter()
    .append('g')
    .append('rect')
    .attr("transform", translator)
    .attr("width", barWidth)
    .attr("height", function (d) { return d * 100; });

  // EXIT
    graphGroup.exit().remove()
};

render(beta);
