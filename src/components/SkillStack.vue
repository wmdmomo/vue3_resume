<template>
  <div
    class="skil-stack"
    @mouseover="triggerEvent(1)"
    @mouseleave="triggerEvent(0)"
  >
    <div
      class="skill-item"
      v-for="(item, index) in skillList"
      :key="index"
      :class="{ triggerclass: showFlag }"
    >
      <span class="skill-name" contenteditable="true">{{ item.title }}</span>
      <div class="skill-con">
        <div class="skill-progress" @click="handleGrag($event, index)">
          <div class="progress" :style="{ width: offset[index] + 'px' }"></div>
        </div>
        <span
          v-show="showFlag"
          class="item-deco"
          @click="skillList.splice(index, 1)"
          >x</span
        >
      </div>
    </div>
    <div class="skill-add" @click="addSkill">添加专业技能</div>
  </div>
</template>
<script>
import { ref, onMounted, reactive } from 'vue'
export default {
  name: 'SkillStack',
  props: {
    skillList: Object
  },
  setup(props) {
    const showFlag = ref(false)
    var skills = props.skillList
    var offset = reactive([])

    var handleGrag = (e, index) => {
      offset[index] = e.offsetX
    }
    var triggerEvent = (val) => {
      showFlag.value = val
    }

    var addSkill = () => {
      skills.push({ title: '专业技能', level: 0 })
    }
    return {
      showFlag,
      skills,
      offset,
      handleGrag,
      addSkill,
      triggerEvent
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
.skill-con{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.triggerclass {
  border: 1px #222 dashed;
  padding: 2%;
}
.skill-add {
  text-align: center;
  padding: 2%;
  border: 1px #222 dashed;
}
.item-deco {
  color: red;
  cursor: pointer;
  margin-left: 2%;
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