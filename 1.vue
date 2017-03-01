<template>
     
<div>
	<input v-model='item' type="number" >
	<p class='hello' @click='hellochange()' >{{item}}</p>


</div>
</template>

<script >

	module.exports={

		  data:function(){
		  	  return {
		  	  	    item:1,
		  	  }
		  },
		  computed:{
		  	  msg(){
		  	  	 return this.$store.state.msg;
		  	  }
		  },
		  methods:{
              hellochange(){
              	  
                  this.$store.commit('changemsg',this.item);
              }
		  }


	}

</script>
<style scoped>
	

</style>