/*

 Name: 
 Email: 

*/

let main = Vue.createApp({

    data() {
        return {

            // DO NOT MODIFY/EDIT THIS DATA PROPERTY
            available_celebs: {
                "G-Dragon": "bb_gd.jpg",
                "Taeyang": "bb_taeyang.jpg",
                "TOP": "bb_top.jpg"
            },

            // DO NOT MODIFY/EDIT THIS DATA PROPERTY
            available_activities: [
                {
                    "name": "Chat",
                    "price": "10.50"
                },
                {
                    "name": "Hug",
                    "price": "30.25"
                },
                {
                    "name": "Kiss",
                    "price": "60.99"
                }
            ],

            // DO NOT MODIFY THIS MANUALLY IN THIS FILE
            selected_celeb: null,

            // DO NOT MODIFY THIS MANUALLY IN THIS FILE
            selected_activities: []

        }
    },

    computed: {

        //  NOT A FUNCTION!! issa method
        total_bill() {

            if (this.selected_celeb == null || this.selected_activities.length == 0) {
                return null
            }
            else {
                total_price = 0
                for (eachActivity of this.selected_activities) {
                    total_price += parseFloat(eachActivity.price)
                }
                return total_price.toFixed(2)
            }

            console.log(this.selected_celeb)
            console.log(this.selected_activities)
            console.log("hello")

            return null
            
        }

    }

})

main.mount("#main")