<template>
<div id="test">
 <input type="radio" name="test-1" value="4" v-model="answer"> 4
 <input type="radio" name="test-1" value="2" v-model="answer"> 2
 <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" @click='OnClick'>Oтветить</button>
</div>
</template>

<script>
export default {
	data () {
		return {
			answer : ''
		}
	},
	methods: {
		OnClick () {
			this.$store.commit('checkAnswer', this.answer)
		}
	}
}
</script>

<style scoped>
</style> 