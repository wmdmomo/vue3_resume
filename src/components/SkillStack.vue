<template>
  <div class="skil-stack">
    <div class="skill-item" v-for="(item, index) in skillList" :key="index">
      <span class="skill-name" contenteditable="true">{{ item.title }}</span>
      <div class="skill-progress" @click="handleGrag($event, index)">
        <div class="progress" :style="{ width: offset[index] + 'px' }"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted, reactive } from 'vue'
export default {
  name: 'SkillStack',
  props: {
    skillList: Object
  },
  setup() {
    var offset = reactive([])

    var handleGrag = (e, index) => {
      offset[index] = e.offsetX
    }
    return {
      offset,
      handleGrag
    }
  }
}
</script>
<style scoped>
.skil-stack {
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20%;
}
.skill-item {
  margin-bottom: 12%;
}
.skill-progress {
  width: 100%;
  height: 12px;
  background-color: #313e5047;
  border-radius: 8px;
}
.progress {
  height: 100%;
  background-color: #333e50c2;
  border-radius: 8px;
}
</style>