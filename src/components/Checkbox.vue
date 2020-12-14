<template>
	<div >
	    <!-- Здесь вместо fontawesome можно использовать просто svg изображение (inline)-->
		<fa-icon
			v-if="metaState === 1"
			:icon="['fas', 'minus']" 
			:class="[{chevron_checked: checked}, 'chevron']"
			@click="$emit('change')"
		/>
		<!-- Здесь вместо fontawesome можно использовать просто svg изображение (inline)-->
		<fa-icon
			v-else
			:icon="['fas', 'chevron-down']" 
			:class="[{chevron_checked: checked}, 'chevron']"
			@click="$emit('change')"
		/>
	</div>
</template>
<script>
export default{
	name: 'Checkbox',
	props: {
		checked: Boolean,	
		metaState: Number
	},
	data: ()=> ({
		
	})
}
</script>
<style scoped lang="sass">
	.chevron, .minus
		width: 10px
		height: 10px
		background-color: white
		color: white
		border: 1px solid blue
	.chevron_checked, .minus_checked
		background-color: blue
		color: white
</style>