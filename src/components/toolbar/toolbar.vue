<template>
  <div class="toolbar">
    <div class="bar-line">
      <!-- 它是根据一张图片来的 -->
      <span class=""></span>
      <span></span>
    </div>
    <div class="bar-line"></div>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  setup() {
    const selectRef = ref(null)
    const select = () => {
      console.log('hhhh')
      console.log('222', window.getSelection().toString())
    }
    return {
      select,
      selectRef
    }
  }
}
</script>
<style scoped>
@import './index.css';
</style>