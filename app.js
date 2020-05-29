new Vue({
  el: "#app", //element
  data: {
    title: "Becoming a Ninja turtle", // property
    showName: false,
    showAge: true
  },
  methods: {
    toggleName() {
      this.showName = !this.showName;
    },
    toggleAge() {
        this.showAge = !this.showAge;
      },
  },
});
