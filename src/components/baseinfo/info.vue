<template>
  <el-upload
    class="avatar-uploader"
    action="https://jsonplaceholder.typicode.com/posts/"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"
  >
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
  </el-upload>
  <div @click="showFlag = !showFlag" class="info-list">
    <div v-for="(info, index) in infoValue" :key="index" class="info-wrap">
      <span v-if="index !== 0" class="info-label">{{ info.label }}</span>
      <span v-if="index !== 0" class="info-label">:</span>
      <span :class="index === 0 ? 'boldClass' : 'normClass'">{{
        formInline[info.key]
      }}</span>
    </div>
  </div>
  <div class="lay-form" v-if="showFlag">
    <base-info
      v-model:showFlag="showFlag"
      v-model:formInline_copy="formInline"
    />
  </div>
</template>
<script>
import BaseInfo from './BaseInfo.vue'
export default {
  data() {
    return {
      showFlag: false,
      imageUrl: ''
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  },
  setup(props) {
    var infoValue = [
      { label: '姓名', key: 'user', value: 'wmd' },
      { label: '性别', key: 'sex', value: '女' },
      { label: '出生年月', key: 'date', value: '1997-01-18' },
      { label: '工作经验', key: 'exper', value: '女' },
      { label: '手机号码', key: 'phone', value: '女' },
      { label: '邮箱地址', key: 'email', value: '女' },
      { label: '学历', key: 'edu', value: '女' },
      { label: '意向岗位', key: 'post', value: '女' }
    ]
    var formInline = {}
    infoValue.forEach((item) => {
      formInline[item['key']] = item['value']
    })
    return {
      infoValue,
      formInline
    }
  },
  components: {
    BaseInfo
  }
}
</script>
<style>
@import './index.css';
</style>