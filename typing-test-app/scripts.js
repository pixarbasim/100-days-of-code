const keys = {
    "row0": [
        { "key" : "`", "shift-key" : "~" },
        { "key" : "1", "shift-key" : "!" },
        { "key" : "2", "shift-key" : "@" },
        { "key" : "3", "shift-key" : "#" },
        { "key" : "4", "shift-key" : "$" },
        { "key" : "5", "shift-key" : "%" },
        { "key" : "6", "shift-key" : "^" },
        { "key" : "7", "shift-key" : "&" },
        { "key" : "8", "shift-key" : "*" },
        { "key" : "9", "shift-key" : "(" },
        { "key" : "0", "shift-key" : ")" },
        { "key" : "-", "shift-key" : "_" },
        { "key" : "=", "shift-key" : "+" },
        { "key" : "Backspace"}
    ],
    "row1": [
        { "key" : "Q"},
        { "key" : "W"},
        { "key" : "E"},
        { "key" : "R"},
        { "key" : "T"},
        { "key" : "Y"},
        { "key" : "U"},
        { "key" : "I"},
        { "key" : "O"},
        { "key" : "P"},
        { "key" : "[", "shift-key": "{"},
        { "key" : "]", "shift-key": "}"},
        { "key" : "\\", "shift-key": "|"}
    ],
    "row2": [
        { "key" : "A"},
        { "key" : "S"},
        { "key" : "D"},
        { "key" : "F"},
        { "key" : "G"},
        { "key" : "H"},
        { "key" : "J"},
        { "key" : "K"},
        { "key" : "L"},
        { "key" : ";", "shift-key": ":"},
        { "key" : "'", "shift-key": "\""},
        { "key" : "Enter"}
    ],
    "row3": [
        { "key" : "Z"},
        { "key" : "X"},
        { "key" : "C"},
        { "key" : "V"},
        { "key" : "B"},
        { "key" : "N"},
        { "key" : "M"},
        { "key" : ",", "shift-key": "<"},
        { "key" : ".", "shift-key": ">"},
        { "key" : "/", "shift-key": "?"},
        { "key" : "Shift"}
    ]
}

Vue.component('keyboard-key', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['key_value'],
  template: '<button :key="key_value" :id="key_value" class="keyboard-key"> <div class="main-key">{{key_value}}</div> </button>'
})


var root = new Vue({
  el: '#root',
  data: {
    textToType: 'The prosecutor said if the mathematical mistakes are set right, the quantum of disproportionate assets owned by Jayalalithaa would be in excess of 76% of her known sources of income and not 8.12 % as arrived by the court.',
    userInput : '',
    correctChars : 0,
    mistakes : 0,
    accuracy : 0,
    pressed : false
  },
  computed: {
    keyId: function (key) {
      return 'key-'+key.key
    }
},
  keys : keys,
  watch : {
      userInput : 'onUserInputChange'
  },

  methods : {
      onUserInputChange : function () {
          // console.log(this.userInput)
      },
      onKeyUp : function(e) {
          const key = e.key.toUpperCase();
          console.log(e);
      },
      onClick : function(key, e) {
          console.log(key, e);
      }
  }
})

window.root = root
