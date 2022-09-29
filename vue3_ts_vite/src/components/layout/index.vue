<template>
<div>
  <div class="app-wrapper">
    <div class="sidebar-container">sidebar-container</div>
    <div class="main-container">main-container</div>
  </div>
</div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>
.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}
.sidebar-container {
  position: fixed;
  left: 0;
  width: 200px;
  height: 100%;
  /*overflow: hidden;*/
  background-color: #42b983;
}
.main-container {
  position: relative;
  margin-left: 200px;
  height: 100%;
  background-color: red;
}
</style>
