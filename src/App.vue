<template>
  <div id="app" class="bg-gray-200">
    <header>
      <ul class="flex bg-blue-500">
        <li class="mr-3 ml-5">
          <router-link exact active-class="font-bold" to="/" class="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white hover:bg-blue-600">Home</router-link>
        </li>
        <li class="mr-3">
          <router-link active-class="font-bold" to="/User" class="inline-block text-white rounded hover:bg-blue-600 py-1 px-3">User</router-link>
        </li> 
      </ul>
    </header>
    
    
    <router-view></router-view>
    
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  },
  created () {
    this.$store.commit('fistAuth')
  }
}
</script>

<style src="./assets/css/tailwind.css">
</style>
