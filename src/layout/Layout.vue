<script setup lang="ts">
</script>

<template>
<div class="common-layout">
    <el-container>
      <el-header>
        This is a header
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>
          This is main content
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
</style>