const app = Vue.createApp({
    data() {
        return {
            // START - DO NOT EDIT 
            gameStarted: false,
            buttonSpecialAttack: null,
            buttonDetails: [
                {
                    action: "attack",
                    btnType: "btn-danger",
                    value: "ATTACK",
                    show: true,
                },
                {
                    action: "specialAttack",
                    btnType: "btn-warning",
                    value: "SPECIAL ATTACK",
                    show: true,
                },
                {
                    action: "heal",
                    btnType: "btn-success",
                    value: "HEAL",
                    show: true,
                },
                {
                    action: "giveUp",
                    btnType: "btn-link",
                    value: "GIVE UP",
                    show: true,
                },
            ],
            myHealth: 100,
            monsterHealth: 100,
            statusList: [
                {
                    class: "text-dark",
                    text: "Game hasn't started.",
                },
            ],
            range: [10, 20, 30, 40, 50],
            MONSTER_MAX_ATTACK: 30,
            PLAYER_MAX_ATTACK: 20,
            MAX_HEAL: 30,
            specialAttackCoolDown: 0,
            // END - DO NOT EDIT
        };
    },

    // You may add additional options (e.g. computed) here

    methods: {
        // You may add additional helper methods as you deem fit
      
        doAction(action) {
            this[action]()
        },

        start() {
           // Add Code Here
           console.log("start")
           console.log(this.PLAYER_MAX_ATTACK) //need this cuz is not a var here
           this.gameStarted = !this.gameStarted
        },

      
        attack() {

            // Add Code Here
            console.log("attack")
            var playerAttackValue = Math.floor(Math.random() * this.PLAYER_MAX_ATTACK)
            this.monsterHealth -= playerAttackValue
            var monsterAttackValue = Math.floor(Math.random() * this.MONSTER_MAX_ATTACK)
            this.myHealth -= monsterAttackValue

        },

        specialAttack() {
           
            // Add Code Here
            console.log("specialAttack")
            
        },

        heal() {
           
            // Add Code Here
            console.log("heal")
            
        },

        giveUp() {
            
            // Add Code Here
            console.log("giveUp")
            this.gameStarted = !this.gameStarted
            
        },

        gameEnd() {
            //add to the list that game ended
            console.log("gameEnd")
            this.gameStarted = !this.gameStarted
        }
    },
});
const vm = app.mount("#app");
