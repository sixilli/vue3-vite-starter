<template>
  <div class="common-layout">
    <div class="el-container">
      <div class="el-header">
        <p>Joel is stinky :(</p>
      </div>
      <div class="el-main">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "MainLayout",
    components: {},
  });
</script>
