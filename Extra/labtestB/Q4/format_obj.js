/*
    
Name:   
Email:  

*/


// YOUR CODE GOES HERE

app.component("format_obj", {
    props: ["data"],

    template: `
    

        <ul v-if="isArr">
            <li v-for="(value, index) in data"> 
                [{{index}}] <format_obj :data="value"></format_obj> 
            </li>
        </ul>

        <ul v-if="isObj">
            <li v-for="(value, key) in data"> 
                {{key}} : <format_obj :data="value"></format_obj>
            </li>
        </ul>

        <template v-if="isLiteral">
            {{data}}
        </template>

    `,

    //DIFFERENCE IS: V-FOR LOOPS THROUGH THAT VERY LINE IT IS IN!!! WOAH! MINDBLOWN! not just the thigns inside 🤯

    // template: `
    
    //     <div v-if="isArr">
    //         <ul v-for="(value, index) in data">
    //             <li> 
    //                 [{{index}}] <format_obj :data="value"></format_obj> 
    //             </li>
    //         </ul>
    //     </div>

    //     <div v-if="isObj">
    //         <ul v-for="(value, key) in data">
    //             <li> 
    //                 {{key}} : <format_obj :data="value"></format_obj>
    //             </li>
    //         </ul>
    //     </div>

    //     <template v-if="isLiteral">
    //         {{data}}
    //     </template>

    // `,
    
    computed: {
        isArr() {
            return Array.isArray(this.data)
        },

        isObj() {
            return (!Array.isArray(this.data)) && (typeof(this.data) == "object")
        },

        isLiteral() {
            return (typeof(this.data) != "array") && (typeof(this.data) != "object")
        }

    }
})
