Vue.component('instrument', {
  props:['img','name','type','brand','price','hidden'],
  methods:{
	  addToCart: function(){
		  this.name="Hello";
	  }
  },
  template:'<div v-on:click="hide()" v-class="{hide:hidden}" v-bind:class="brand"><img v-bind:src="img"></img><br>{{name}}<button >Add to Cart</button></div>'
})
Vue.component('cart', {
  props:['counted'],
  data:function(){
    return{
      count:0
    }
  },
  template:'<button v-on:click="hide()">Cart: {{count}}</button>'
})

new Vue({
	el:"#instruments-app",
	data:{
		mess:"",
		brandField:"",
		nameField:"",
		imgField:"",
		typeField:"",
		priceField:"",
		counted:0,
		isHidden:false,
		storeArray:[
			{
				name:"electric guitar",
				type:"string",
				price:"200.00",
				brand:"Fender",
				img:"https://cdn.shopify.com/s/files/1/0788/1755/products/7ee8a531-d613-4434-ae00-85eec5165219_e6f18be3-456a-4754-9a57-1b8a6dea92a2_large.jpg",
				hidden:false
			},{
				name:"drums",
				type:"percussion",
				price:"600.00",
				brand:"Yamaha",
				img:"https://media.sweetwater.com/api/i/f-webp__q-82__ha-3939739a2ee12a58__hmac-62dd068db92f331856125cfdeb6233b3b5209fe6/images/items/750/SCBIRCHSPRB-large.jpg",
				hidden:false
			},{
				name:"keyboard",
				type:"keyboard",
				price:"300.00",
				brand:"Yamaha",
				img:"https://media.sweetwater.com/api/i/f-webp__q-85__ha-41cf8957a11416cd__hmac-5da33c4b3c34d42482f198e05706365da81a7300/images/items/1800/P45BK-xlarge.jpg",
				hidden:false
			},{
				name:"acoustic guitar",
				type:"string",
				price:"400.00",
				brand:"Maton",
				img:"https://maton.com.au/images/made/assets/uploads/products/JRSignatureThumbnail_900_354_s.png",
				hidden:false
			},{
				name:"acoustic guitar",
				type:"string",
				price:"500.00",
				brand:"Fender",
				img:"https://www.mundtmusic.com/images/product/large/ae00-24180.jpg",
				hidden:false
			},{
				name:"bass guitar",
				type:"string",
				price:"700.00",
				brand:"Maton",
				img:"https://maton.com.au/assets/uploads/products/JB4_Product.png",
				hidden:false
			}
		],
		cartArray:[]
	},
	watch:{
    hidden: function(){
      this.submit();
    }
	},
	methods:{
		plusCart:function(){
			
		},
		submit:function(){
			if(this.hidden==true){
				storeArray.push({
					brand:this.brand,
					name:this.name,
					img:this.img,
					type:this.type,
					price:this.price
      		});
			}
    	},
		hide: function(){
			this.isHidden = !this.isHidden;
			this.hidden = !this.hidden;
		}
	}
})