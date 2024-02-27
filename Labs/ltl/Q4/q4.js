// Name: Wong Qian Yu
// Email: qianyu.wong.2022

// q4.js (Vue code)

// (1) Vue instance
const app = Vue.createApp({
	data() {
		return {
			videos:[
				{title:"Prof Kyong dancing", url:"https://www.youtube.com/embed/Pbo1-H1PxBQ?controls=1", likes:0},
				{title:"History of SCIS", url:"https://www.youtube.com/embed/MqfijJHnEBM?controls=1", likes:0},
				{title:"SCIS Voix", url:"https://www.youtube.com/embed/bKnICWSveko?controls=1", likes:0}
				]
		}
	},
	methods: {
		onLike(index){
			this.videos[index].likes++;
		}
	},
})
// ------------- Do not edit the code above this line ------------------

// (2) Define Vue component (vote-video)
app.component('vote-video', { 
	props: ['key','vindex','url','title'], 
	emits: ['like'],    
	template: `<div class="p-2">
				<div>
					<iframe width="180" height="100" :src='url'/>
				</div>
				<div>	
					<button  v-on:click="$emit('like',vindex)" style="border:none">&#10084</button> 
					Video Index: {{ vindex }} &nbsp; 
					<a :href="url" target="_new">{{ title }}</a>
			   </div>
			  </div>`
})

// (3) mount Vue instance to HTML element
const vm = app.mount('#root')
