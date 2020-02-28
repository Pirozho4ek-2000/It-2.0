<template>
    <div id="user"> 
	<div class="flex flex-wrap">
		<div v-for="(data,index) in getFavorite" :key="index" class="m-10 home">
		<img :src="data.image" @click="goTodetail(data.productId)">
		<h3 class="font-serif text-lg text-gray-800 text-center mt-2" @click="goTodetail(data.productId)" >{{data.productTitle}}</h3>
	</div>	
    </div>
    </div>
</template>

<script>

export default {
    name: "User",
    data (){
	return {

	}
    },
    methods: {
        goTodetail(data) {
        this.$router.push({name:'Details', params:{Pid:data}})
      }
  },
    computed: {
	getFavorite() {
		return this.$store.getters.getFavorite
	}
    },
    created() {
	this.$store.commit('getFavorite')
    }
}
</script>

<style scoped>
.home {
    width: 250px ;
  }
  img {
    width: 100%;
    height: 200px;
  }
  h3 {cursor: pointer;}
   img{cursor: pointer;
    border: 1.5px solid black}
</style> 