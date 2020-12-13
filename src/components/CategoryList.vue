<template>
	<div>
		<div
			v-for="item in items"
			:key="item.name"
			class="category_list"
		>	
			<div
				class="category_single"
			>
				<Checkbox
					:checked="item.state"
					:metaState="metaState(item)"
					@change="checkItemHandler(item)"
				/> 
				<p 
					class="category_name"
					@click="checkItemHandler(item)"
				>
					{{item.name}} <span v-if="item.children&&item.children.length"> Выбрано {{countCheckedChildren(item.children)}} из {{item.children.length}}</span>
				</p>
			</div>
			<CategoryList 
				v-if="item.children.length"
				:items="item.children"
				:parent="item"
				@change="categoryListChangeHandler($event)"
			/>
		</div>
	</div>
</template>
<script>
import Checkbox from '@/components/Checkbox';
export default{
	name: 'CategoryList',
	props: {
		items: Array,
		parent: Object
	},
	components: {
		Checkbox
	},
	data: ()=> ({
		
	}),
	computed: {
		
	},
	methods: {
		checkItemHandler(item){
			item.state = !item.state;
		if(this.parent){										   				if(this.parentHasCheckedChild(this.parent)){
				this.$emit('change', {parent: this.parent, state: true});
			}else{
				this.$emit('change', {parent: this.parent, state: false});
			}
		}
			if(item.children&&item.children.length && item.state){
				item.children.forEach(
					(childItem) => {
						//childItem.state = true
						this.$set(childItem, 'state', true)
					}
				);
			}else{
				item.children.forEach(
					(childItem) => {
						this.$set(childItem, 'state', false)
						//childItem.state = false
					}
				);
			}
		},
		parentHasCheckedChild(parent){
			let found = parent.children.findIndex(
				(childItem) => childItem.state
			);
			return found == -1? false : true;
		},
		categoryListChangeHandler($event){
			$event.parent.state = $event.state;
		},
		countCheckedChildren(children){
			let count = 0;
			children.forEach(
				child => {
					if(child.state){
						count += 1;
					}
				}
			);
			return count;
		},
		metaState(item){
			let count = this.countCheckedChildren(item.children);
			let totalLength = item.children.length;
			if(count === 0) return -1;
			if(totalLength === count) return 0;
			if(totalLength > count) return 1;
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
			margin: 0 0 0 20px
		&_name
			margin: 0 0 0 10px
		&_single
			display: flex
			font-size: 12px
</style>