var Vue= require('vue');
var app = require('./hello.vue');
var app1=require('./1.vue');
var Vuex=require('vuex');

Vue.use(Vuex);

var store= new Vuex.Store({
     state:{
     	  msg:'hello vuex',
     },
     mutations:{
     	changemsg:function(state,a){
           state.msg=a;
     	},
     },
     getters:{
     	  hellomsg:function(state){
             return state.msg;
     	  }
     }


})





var vm = new Vue({
	  el:'#body',
	  data:{

	  },
	  store:store,
	  components:{
	  	 app:app,
	  	 app1:app1,
	  }

})