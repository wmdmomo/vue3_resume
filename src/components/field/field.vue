<template>
  <div class="field">
    <span class="field-title" contenteditable="true">{{
      fileContent.title
    }}</span>
    <div class="field-mid">
      <span v-if="fileContent.time" contenteditable="true">{{
        fileContent.time
      }}</span>
      <span v-if="fileContent.add" contenteditable="true">{{
        fileContent.add
      }}</span>
      <span v-if="fileContent.role" contenteditable="true">{{
        fileContent.role
      }}</span>
    </div>
    <div
      class="field-content"
      ref="selectRef"
      @click="select"
      contenteditable="true"
    >
      主修课程：尽量填写和意向岗位相关的主修课程<br />
      成绩排名：成绩优异的话可在这里填写成绩排名及GPA信息
    </div>
  </div>
</template>
<script>
import toolbar from './../toolbar/toolbar.vue'
export default {
  props: {
    fileContent: Object
  },
  components: {
    toolbar
  }
}
</script>
<style scoped>
@import './index.css';
</style>