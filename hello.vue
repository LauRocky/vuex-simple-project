<template>
	<p class='hello' v-text='msg'></p>

</template>

<script >
	module.exports={

		  data:function(){
		  	  return {
		  	  	  
		  	  }
		  },
		  computed:{
		  	  msg:function(){
		  	  	  return this.$store.state.msg
		  	  }
		  }


	}

</script>
<style scoped>
	

</style>