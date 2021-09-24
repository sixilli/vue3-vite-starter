<template>
  <div class="h-screen bg-gray-400">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
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
