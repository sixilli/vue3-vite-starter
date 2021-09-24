<template>
  <MainLayout>
    <p>HELLO BRUV</p>
  </MainLayout>
</template>

<script setup lang="ts">
  import MainLayout from "@/layouts/main.vue";
  import { defineComponent, ref } from "vue";

  defineComponent({
    name: "MainLayout",
    components: {},
    setup() {
      const message = ref("hello");

      return {
        message,
      };
    },
  });
</script>
