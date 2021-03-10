<template>
  <div class="resume-wrap">
    <div class="resume">
      <div class="resume-left">
        <info />

        <skill-stack :skillList="skillList" />
      </div>
      <div class="resume-right">
        <toolbar v-if="toolFlag" />
        <field-all :filedList="filedList" />
      </div>
    </div>
  </div>
</template>

<script>
import SkillStack from './components/SkillStack.vue'
import toolbar from './components/toolbar/toolbar.vue'
import FieldAll from './components/field/FieldAll.vue'
import info from './components/baseinfo/info.vue'
export default {
  name: 'App',
  components: {
    SkillStack,
    toolbar,
    FieldAll,
    info
  },
  data() {
    return {
      toolFlag: false,
      skillList: [
        {
          title: 'JavaScript',
          level: 60
        },
        {
          title: 'Html',
          level: 60
        },
        {
          title: 'CSS',
          level: 60
        }
      ],
      filedList: [
        {
          title: '教育背景',
          time: '2016/03 - 2017/03',
          add: 'xx大学',
          role: '本科'
        },
        {
          title: '工作经历',
          time: '2016/03 - 2017/03',
          add: 'xx公司',
          role: 'xx岗位'
        },
        {
          title: '实践经历',
          time: '2016/03 - 2017/03',
          add: 'xx公司',
          role: 'xx岗位'
        },
        {
          title: '项目经历',
          time: '2016/03 - 2017/03',
          add: 'xx项目',
          role: 'xx角色'
        },
        {
          title: '专业技能'
        },
        {
          title: '自我评价'
        }
      ]
    }
  }
}
</script>
