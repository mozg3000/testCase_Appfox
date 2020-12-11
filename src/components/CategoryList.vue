<template>
	<div >
		<div
			v-for="(item, i) in items"
			:key="i"
			class="category_list"
		>	
			<div
				class="category_single"
			>
				<Checkbox
					:checked="item.state"
					:id="i"
					@change="checkItemHandler(item)"
				/> 
				<p class="category_name">
					{{item.name}}
				</p>
			</div>
			<CategoryList 
				v-if="item.children.length"
				:items="item.children"
				class="category_items"
			/>
		</div>
	</div>
</template>
<script>
import Checkbox from '@/components/Checkbox';
export default{
	name: 'CategoryList',
	props: {
		items: Array
	},
	components: {
		Checkbox
	},
	data: ()=> ({
		
	}),
	methods: {
		checkItemHandler(item){
			item.state = !item.state;
			if(item.children&&item.children.length && item.state){
				item.children.forEach(
					(subItem) => {
						subItem.state = true
					}
				);
			}else{
				item.children.forEach(
					(subItem) => {
						subItem.state = false
					}
				);
			}
		}
	}
}
</script>
<style scoped lang="sass">
	.category
		&_list
			display: flex
			font-size: 12px
			flex-direction: column
		&_name
			margin: 0 0 0 10px
		&_items
			margin: 5px 0 0 20px
		&_single
			display: flex
			font-size: 12px
</style>