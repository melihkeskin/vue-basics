new Vue({
  el: "#app", //element
  data: {
    title: "Becoming a Ninja turtle", // property
    name: "Melih",
  },
  methods: {
    updateName(e) {
      this.name = e.target.value;
    },
  },
});
