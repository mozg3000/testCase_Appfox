<template>
	<div >
		<fa-icon 
			:icon="['fas', 'chevron-down']" 
			:class="[{chevron_checked: checked}, , 'chevron']"
			@click="$emit('change')"
		/>
	</div>
</template>
<script>
export default{
	name: 'Checkbox',
	props: {
		checked: Boolean,
		id: String
	},
	data: ()=> ({
		
	})
}
</script>
<style scoped lang="sass">
	.chevron
		width: 10px
		height: 10px
		background-color: blue
		color: blue
	.chevron_checked
		color: white
</style>