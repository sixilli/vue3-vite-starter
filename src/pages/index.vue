<template>
  <main-layout>
    <p class="text-3xl text-center">{{ meow }}</p>
    <el-button type="primary" @click="someFunc">Don't touch me :(</el-button>
  </main-layout>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  const meow = ref("hello butt fart");


  export default defineComponent({
    name: "Index",
    components: {},
    setup() {
      const someFunc = () => {
        console.log("MEOW");
      }

      return {
        meow,
        someFunc
      };
    },
  });
</script>
