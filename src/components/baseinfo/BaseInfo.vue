<template>
  <div class="inside-form">
    <div class="form-title">
      <span>基本信息</span>
      <span @click="onCancel">x</span>
    </div>
    <el-form :model="formInline" label-width="80px" class="add-style">
      <el-row>
        <el-col :span="10">
          <el-form-item label="姓名">
            <el-input
              v-model="formInline.user"
              placeholder="输入姓名"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="性别">
            <el-select v-model="formInline.sex" placeholder="请选择">
              <el-option label="男" value="男"></el-option>
              <el-option label="女" value="女"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10">
          <el-form-item label="出生年月">
            <el-date-picker
              v-model="formInline.date"
              type="date"
              placeholder="选择日期时间"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="工作经验">
            <el-select v-model="formInline.exper" placeholder="请选择">
              <el-option label="应届生" value="应届生"></el-option>
              <el-option label="在校生" value="在校生"></el-option>
              <el-option label="无经验" value="无经验"></el-option>
              <el-option label="1年" value="1年"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10">
          <el-form-item label="手机号码">
            <el-input
              v-model="formInline.phone"
              placeholder="请输入手机"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="邮箱地址">
            <el-input
              v-model="formInline.email"
              placeholder="请输入邮箱"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10">
          <el-form-item label="学历">
            <el-select v-model="formInline.edu" placeholder="请选择">
              <el-option label="大专" value="大专"></el-option>
              <el-option label="本科" value="本科"></el-option>
              <el-option label="硕士" value="硕士"></el-option>
              <el-option label="博士" value="博士"></el-option>
              <el-option label="中专" value="中专"></el-option>
              <el-option label="其它" value="其它"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="意向岗位">
            <el-input
              v-model="formInline.post"
              placeholder="如：产品经理"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <div class="btn">
        <el-button type="primary" @click="onSubmit(formInline)">保存</el-button>
        <el-button type="info" @click="onCancel()">取消</el-button>
      </div>
    </el-form>
  </div>
</template>
<script>
import { reactive, ref } from 'vue'
export default {
  //   data() {
  //     return {
  //       formInline: {
  //         user: '',
  //         region: ''
  //       }
  //     }
  //   },
  props: {
    showFlag: Boolean,
    formInline_copy: Object
  },
  emits: ['update:showFlag', 'update:formInline_copy'],
  setup(props, context) {
    //   这样子的话 他们指向同一个值了 所以出错！！！
    var formInline = reactive(JSON.parse(JSON.stringify(props.formInline_copy)))

    const onCancel = () => {
      formInline = reactive(JSON.parse(JSON.stringify(props.formInline_copy)))
      context.emit('update:showFlag', false)
      return formInline
    }

    const onSubmit = () => {
      context.emit(
        'update:formInline_copy',
        JSON.parse(JSON.stringify(formInline))
      )

      context.emit('update:showFlag', false)
    }
    var dateChange = (data) => {
      console.log(data)
      formInline.date = data
    }
    return {
      onCancel,
      onSubmit,
      formInline,
      dateChange
    }
  }
}
</script>
<style>
.inside-form {
  background-color: #ffffff;
  border-radius: 5px;
}
.form-title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2%;
  border-bottom: 1px solid #eee;
  color: #333;
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 2%;
}
.add-style {
  padding: 2%;
}
.el-form-item__label {
  color: #888;
}
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 152px;
}
.el-row {
  justify-content: space-between;
}
.el-form-item__label {
  text-align: left;
}
.btn {
  display: flex;
  justify-content: center;
  margin: 0;
}
</style>