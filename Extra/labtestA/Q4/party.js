/*
    
Name:   
Email:  

*/

const app = Vue.createApp( {

    //=========== DATA PROPERTIES ===========
    data() {
        return {

            // DO NOT MODIFY THIS BY MANUALLY EDITING IN THIS FILE
            greeting: "Hola Amigos!",

            // DO NOT MODIFY THIS BY MANUALLY EDITING IN THIS FILE
            directory: [
                {
                    email: "frank@smu.edu.sg",
                    category: "EDUCATION"
                },
                {
                    email: "kyong@smu.edu.sg",
                    category: "EDUCATION"
                },
                {
                    email: "jennie@bpink.info",
                    category: "OTHERS"
                },
                {
                    email: "layfoo@kpop.org",
                    category: "OTHERS"
                }
            ],

            // DO NOT MODIFY THIS BY MANUALLY EDITING IN THIS FILE
            new_emails: "alice@smu.edu.sg, bob@gmail.com",       

            // DO NOT MODIFY THIS BY MANUALLY EDITING IN THIS FILE
            party_email_subject: "Year-End KBBQ Party",

            // DO NOT MODIFY THIS BY MANUALLY EDITING IN THIS FILE
            party_email_message: "Dear friends! The year is ending, and it's party time! Please accept this invitation by 10 December 2021 yah? No need to bring anything except your wonderful hungry and thirsty self! Hope to see you and best wishes to you!",

            // DO NOT MODIFY THIS BY MANUALLY EDITING IN THIS FILE
            party_email_addresses: [
                "kyong@smu.edu.sg",
                "jennie@bpink.info"
            ]

        }
    },

    //=========== METHODS ===========
    methods: {

        add_to_directory() {
            
            // YOUR CODE GOES HERE
            emails = this.new_emails.split(", ")
            for (email of emails) {
                console.log(email)
                if (email.includes("edu")) {
                    this.directory.push({"email": email, "category": "EDUCATION"})
                }
                else {
                    this.directory.push({"email": email, "category": "OTHERS"})
                }

            }
            console.log(this.directory)
            
        },

        // Send part invitation
        send_party_invitation() {

            // YOUR CODE GOES HERE
            console.log(this.party_email_addresses)

            peopleArr = this.party_email_addresses.join(", ")

            alert(`Invitation sent to ${peopleArr}

Subject: ${this.party_email_subject} 

Message: ${this.party_email_message}
            `)

        }

    }
})




// DO NOT MODIFY THIS
// ASSOCIATING the current Vue app to an HTML element with id='app'
app.mount('#app')