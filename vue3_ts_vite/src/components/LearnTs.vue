<template v-if="show">
  <div>这是数字 {{count}} </div>
  <el-input v-model="input" placeholder="Please input" />
</template>
<script setup>
import { ref } from 'vue'
const count = ref(0);
const show = ref(true);
const input = ref('')
</script>
