<template>
<div>
	<div class="container">
		<h2 class="header_form">
			Выбрать категорию
		</h2>
		<CategoryList 
			:items="items" 
			:parent="null"
			class="form_box"
		/>
		<div class="controls">
			<a 
				href="#" 
				@click.prevent="$emit('save', items)"
				class="button_save"
			>
				Сохранить
			</a>
		</div>
	</div>
</div>
</template>
<script>
import CategoryList from '@/components/CategoryList';
export default {
	name: 'checkboxForm',
	props: [],
	components: {
		CategoryList
	},
	data: ()=>({
		items: [
		{
			name: "Овощи",
			state: false,
			children: [
				{
					name: 'Огурцы',
					state: false,
					children: []
				},
				{
					name: 'Морковь',
					state: false,
					children: []
				},
				{
					name: 'Помидоры',
					state: false,
					children: []
				}
			]
		},
		{
			name: "Овощи",
			state: false,
			children: [
				{
					name: 'Огурцы',
					state: false,
					children: []
				},
				{
					name: 'Морковь',
					state: false,
					children: []
				},
				{
					name: 'Помидоры',
					state: false,
					children: []
				}
			]
		},
		{
			name: "Овощи",
			state: false,
			children: [
				{
					name: 'Огурцы',
					state: false,
					children: []
				},
				{
					name: 'Морковь',
					state: false,
					children: []
				},
				{
					name: 'Помидоры',
					state: false,
					children: []
				}
			]
		},
	]
	})
}
</script>
<style scoped lang=sass>
	.container
		width: 500px
	.header_form
		margin: 20px 0 20px 10px
	.form_box
		display: flex
	.controls
		text-align: end
		margin: 20px 0 0 0
	.button_save
		padding: 5px 20px
		background-color: blue
		color: white
		&:link
			text-decoration: none
		
</style>