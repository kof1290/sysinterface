<template>
  <el-row>
    <el-col :span="10">
      <el-form ref="form" :model="form" label-width="80px" style="width:300px">
        <el-form-item label="任务单号">
          <el-input v-model="form.danhao"></el-input>
        </el-form-item>
        <el-form-item label="实验温度">
          <el-input v-model="form.temp"></el-input>
        </el-form-item>
        <el-form-item label="材料类型">
          <el-select value="select" v-model="form.region" placeholder="nnn">
            <el-option value="metra1" label="材料1"></el-option>
            <el-option value="metra2" label="材料2"></el-option>
            <el-option value="metra3" label="材料3"></el-option>
            <el-option value="metra4" label="材料4"></el-option>
            <el-option value="metra5" label="材料5"></el-option>
            <el-option value="metra6" label="材料6"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="烘箱编号">
          <el-input v-model="form.bianhao"></el-input>
        </el-form-item>
        <el-form-item label="串数总计">
          <el-input v-model="form.num"></el-input>
        </el-form-item>
        <el-form-item label="实验时长">
          <el-input v-model="form.hours"></el-input>
        </el-form-item>
        <el-form-item label="开始时间">
          <el-col>
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="实验人员">
          <el-input v-model="form.user" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="存样单号">
          <el-input v-model="form.cunyangdanhao"></el-input>
        </el-form-item>
        <el-form-item label="当前日期">
          <el-input v-model="form.date2"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="14">
      存样单信息
      单号：{{form.danhao}}
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'BaseForm',
    data() {
      return {
        form: {
          danhao: '',
          temp: '',
          bianhao: '',
          num: '',
          hours: '',
          remark: '',
          user: 'zhangchen',
          cunyangdanhao: '20180907-zhangchen-1',
          region: '',
          date1: '',
          date2: this.getTodayDate().today,
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!')
      },
      getTodayDate() {
        return {
          today: '2018-09-07'
        }
      }
    }
  }
</script>

<style scoped>

</style>
