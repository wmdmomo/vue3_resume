<template>
  <div v-for="(item, index) in filedList" :key="index">
    <filed :fileContent="item" />
  </div>
</template>
<script>
import filed from './field.vue'
export default {
  props: {
    filedList: Array
  },
  components: {
    filed
  }
}
</script>
<style scoped>

</style>