<template>
  <div class="details">
    <div v-for="(product,index) in getProduct" :key="index">
        <div class="flex">
          <div class="pl-2 flex flex-col items-center">
            <h1 class="font-serif text-lg text-gray-800 text-center m-2">{{product.productTitle}}</h1>
            <img :src="product.image">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2 mb-3" @click="favorite(product.productId)">В избранное</button>
          </div>
          <div class="products pt-3">
            <p class="font-medium">{{product.products}}</p>
            <div class="p-2 flex italic">
               {{product.recipe}}
            </div>
           
          </div>
        </div>

    </div>
  </div>
</template>

<script>

 export default{
  name:'details',
    data(){
      return{
        title: "details",
        FoodId: this.$route.params.Pid
      }
    },
    methods: {
      favorite(el) {
        this.$store.commit('Favorite', {el, item: this.getProduct});
        console.log(this.getProduct)
      }
    },
    computed: {
      getProduct () {
        return this.$store.getters.getObject(this.FoodId)
      }
    },
    watch: {
    $route(to) {
    this.FoodId = to.params['Pid']
    }
    }
 }
</script>

<style scoped>
.products {
  white-space: pre;
}
img {border: 1.5px solid black}
</style> 