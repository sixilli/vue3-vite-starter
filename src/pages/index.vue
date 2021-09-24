<template>
  <main-layout>
    <template v-slot:main>
      <el-button type="primary" @click="getRandomInt(12)">Don't touch me :(</el-button>
      <div v-if="roll > 0">
        <p>{{ roll }}</p>
      </div>
    </template>
  </main-layout>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import MainLayout from "../layouts/MainLayout.vue";

  export default defineComponent({
    name: "Index",
    components: { MainLayout },
    setup() {
      const roll = ref(0)

      const getRandomInt = (max: number) => {
        roll.value = Math.floor(Math.random() * max) + 1;
      }

      return {
        roll,
        getRandomInt
      };
    },
  });
</script>
