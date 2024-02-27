// Name: Wong Qian Yu
// Email: qianyu.wong.2022

Vue.createApp({ 
  data() {
    return {
      vuekemonA: {},
      vuekemonB: {},
      scoreA: 0,
      scoreB: 0,
      round: 0,
      roundWinner: "",
      fa: "fa",
      // you can create new data variables below if you wish
    }
  },
  created() {
    this.initialize();
  },
  methods : {
    initialize() {
      this.roundWinner = ""
      this.scoreA = 0
      this.scoreB = 0
      this.round = 0

      let randInt1 = Math.floor(Math.random() * 3)
      let randInt2 = 0
  
      do {
        randInt2 = Math.floor(Math.random() * 3)
      } while(randInt1 == randInt2)
  
      this.vuekemonA = vuekemons[randInt1]
      this.vuekemonB = vuekemons[randInt2]

      this.reroll();
    },

    reroll() {
      this.round++
      let randInt1 = Math.floor(Math.random() * 3)
      let randInt2 = Math.floor(Math.random() * 3)

      this.vuekemonA.currentMove = this.vuekemonA.attacks[randInt1]
      this.vuekemonB.currentMove = this.vuekemonB.attacks[randInt2]

      this.determineWinner()
    },

    
    determineWinner() {
      // Part B - Edit determineWinner()  
      // to change this.roundWinner accordingly
      // 2 marks
      
      var aType = this.vuekemonA.currentMove.type
      var bType = this.vuekemonB.currentMove.type
      console.log("a: " + aType)
      console.log("b: " + bType)

      if (aType == "scissors" && bType == "paper" || 
          aType == "rock" && bType == "scissors" || 
          aType == "paper" && bType == "rock") {
            this.roundWinner = "A"
      }
      else if (aType != bType) {
        this.roundWinner = "B"
      }
      else {
        this.roundWinner = ""
      }
      

      // End Part B 
      
      // DO NOT EDIT
      if (this.roundWinner === 'A') this.scoreA++;
      if (this.roundWinner === 'B') this.scoreB++;
      // END DO NOT EDIT
    },
  
    winnerMsg(player) {
        return this.roundWinner === player;
    },
  },
  computed: {
    fa_vuekemonA_completed: function() {
      return "fa-hand-" + this.vuekemonA.currentMove.type + "-o";
    },
    fa_vuekemonB_completed: function() {
      return "fa-hand-" + this.vuekemonB.currentMove.type + "-o";
    },

    // Part C - Complete code below
    // 1 mark
    percentWinA: function() {
      // To edit and complete      

      return ((this.scoreA/this.round)*100).toFixed(1) + "%";
    },
    percentWinB: function() {
      // To edit and complete
      return ((this.scoreB/this.round)*100).toFixed(1) + "%";
    }
    // End of Part C
  }
}).mount('#app')
