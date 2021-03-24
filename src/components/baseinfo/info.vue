<template>
  <el-upload
    class="avatar-uploader"
    action="#"
    :http-request="httpRequest"
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
      <span v-if="info.label !== '出生年月'">
        <span :class="index === 0 ? 'boldClass' : 'normClass'">{{
          formInline[info.key]
        }}</span>
      </span>
      <span v-else>
        <span :class="index === 0 ? 'boldClass' : 'normClass'">{{
          formateDate(formInline[info.key])
        }}</span>
      </span>
    </div>
  </div>
  <div class="lay-form" v-if="showFlag">
    <base-info
      v-model:showFlag="showFlag"
      v-model:formInline_copy="formInline"
    />
  </div>
  <!-- <button @click="ff">fff</button> -->
</template>
<script>
import { getPlanList } from './../../utils/api'
import BaseInfo from './BaseInfo.vue'
export default {
  data() {
    return {
      showFlag: false,
      imageUrl: ''
    }
  },

  methods: {
    async ff() {
      var nn = 11
      //   request({ url: '/api/plan', method: 'post', nn })
      //   this.$http.post('/api/posts/').then((res) => {
      //     console.log(res)
      //   })
      //   this.$http.get('/api').then((res) => {
      //     console.log(res)
      //   })
      var res = await getPlanList()
      console.log(res)
    },
    formateDate(datetime) {
      let d = new Date(datetime)
      let formatdatetime =
        d.getFullYear() +
        '-' +
        this.addDateZero(d.getMonth() + 1) +
        '-' +
        this.addDateZero(d.getDate())
      return formatdatetime
    },
    addDateZero(num) {
      return num < 10 ? '0' + num : num
    },

    httpRequest(data) {
      let _this = this
      let rd = new FileReader() // 创建文件读取对象
      let file = data.file
      rd.readAsDataURL(file) // 文件读取装换为base64类型
      rd.onloadend = function (e) {
        console.log(e)
        _this.imageUrl = this.result // this指向当前方法onloadend的作用域
      }
    },
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
      { label: '出生年月', key: 'date', value: '2021-04-01' },
      { label: '工作经验', key: 'exper', value: '应届生' },
      { label: '手机号码', key: 'phone', value: '123' },
      { label: '邮箱地址', key: 'email', value: 'qq' },
      { label: '学历', key: 'edu', value: '本科' },
      { label: '意向岗位', key: 'post', value: '前端' }
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