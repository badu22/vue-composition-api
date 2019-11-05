<template>
	<div>
		<h1>This is an about page</h1>
		<counter/>
	</div>
</template>


<script>
// @ is an alias to /src
import counter from '@/components/counter.vue';

export default {
	name: 'about',
	components: {
		counter
	}
}
</script>
