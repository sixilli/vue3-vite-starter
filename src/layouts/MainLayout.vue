<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-row>
          <el-col>
            <h1 class="joel-stinky">Joel is pretty stinky :(</h1>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-col>
          <slot name="main"></slot>
        </el-col>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "MainLayout",
    components: {},
  });
</script>

<style lang="css">
  .joel-stinky {
    font-size: 2rem;
  }
</style>