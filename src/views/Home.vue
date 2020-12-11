<template>
<div>
	<CategoryList :items="items"/>
</div>
</template>

<script>
import CategoryList from '@/components/CategoryList';
export default {
  name: 'home',
  components: {
	CategoryList
  },
  data: ()=> ({
	chk_state: false,
	items: [
		{
			name: "Овощи",
			state: false,
			parent: true,
			children: [
				{
					name: 'Огурцы',
					state: false,
					parent: true,
					children: []
				},
				{
					name: 'Морковь',
					state: false,
					parent: true,
					children: []
				},
				{
					name: 'Помидоры',
					state: false,
					parent: true,
					children: []
				}
			]
		}
	]
  }),
  filters: {
	},
  computed: {
  },
  methods:{
	handler(){
		console.log('fhjfhjd')
	}
  },
  
  mounted(){
  
  },
  created(){
	
  }
}
</script>
<styles scoped lang="sass">
	
</styles>