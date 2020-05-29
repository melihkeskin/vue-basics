new Vue({
  el: "#app", //element
  data: {
    title: "Becoming a Ninja turtle", // property 
    coords:{
        x:0,
        y:0
    }
  },
  methods: { 
      logEvent(e){
          console.log(e);
      },
      logCoords(e){
          this.coords.x = e.offsetX;
          this.coords.y = e.offsetY;
      }
  },
});
