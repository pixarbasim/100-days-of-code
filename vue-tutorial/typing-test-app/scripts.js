var root = new Vue({
  el: '#root',
  data: {
    textToType: 'The prosecutor said if the mathematical mistakes are set right, the quantum of disproportionate assets owned by Jayalalithaa would be in excess of 76% of her known sources of income and not 8.12 % as arrived by the court.',
    userInput : ''
  },
  watch : {
      userInput : 'onUserInputChange'
  },
  methods : {
      onUserInputChange : function () {
          console.log(this.userInput)
      }
  }
})
