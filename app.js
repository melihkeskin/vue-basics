new Vue({
  el: "#app", //element
  data: {
    title: "Becoming a Vue ninja", // property
    name: 'Melih'
  },
  methods: {
      greet(time){
          //this.title
          //ES6
          return `Hello and ${time}, ${this.name}`
      }
  }
});
