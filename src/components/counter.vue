<template>
	<div>
		<button @click="increment">
			Increase count
		</button>
        &nbsp;
        <button @click="decrement">
			Decrease count
		</button>

        <h1>Count is: {{ state.count }}, double is: {{ state.double }}</h1>
        <h1>Another Count is: {{ anotherCount }}</h1>

        <p>(open console)</p>
	</div>
</template>

<script>
	import { reactive, computed, watch, onMounted, onBeforeMount, onUpdated, onBeforeUpdate, ref } from "@vue/composition-api";
    import useCounterFunc from '@/use/counterFunc';

	export default {
        name: 'counter',
		setup() {
			const state = reactive({
				count: 0,
				double: computed(() => state.count * 2)
            })

            const anotherCount = ref(0);

            const { increment, decrement } = useCounterFunc(state, anotherCount);


            watch(() => {
                if ( state.count % 2 === 0 ) {
                    console.log("[WATCH] Data Updated -> state.count is even.");
                } else {
                    console.log("[WATCH] Data Updated -> state.count is odd.");
                }
            });

            // lifecicles
            onMounted(() => {
                console.log('lifecicle onMounted');
            });
            onUpdated(() => {
                console.log('lifecicle onUpdated');
            });
            onBeforeMount(() => {
                console.log('lifecicle onBeforeMount');
            });
            onBeforeUpdate(() => {
                console.log('lifecicle onBeforeUpdate');
            });

            return {
                state,
                anotherCount,
                increment,
                decrement
			}
        }
	}
</script>
