<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

	<counter/>
  </div>
</template>

<script>

import counter from '@/components/counter.vue';
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'home',
    components: {
        HelloWorld,
        counter
    }
}
</script>
