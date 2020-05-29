new Vue({
  el: "#app", //element
  data: {
    title: "Becoming a Vue ninja", // property
    wage: 10,
  },
  methods: {
    changeWage(amount) {
      return (this.wage += amount);
    },
  },
});
