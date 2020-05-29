new Vue({
  el: "#app", //element
  data: {
    title: "Becoming a Vue ninja", // property
    name: 'Melih',
    url:'http://www.youtube.com',
    classes:['one', 'two']
  },
  methods: {
      greet(time){
          //this.title
          //ES6
          return `Hello and ${time}, ${this.name}`
      }
  }
});
