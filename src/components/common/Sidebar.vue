<template>
  <el-menu
    router
    :default-active="this.$route.path"
    background-color="#324157"
    text-color="#fff"
    active-text-color="#ffd04b"
    >
    <el-submenu index="1">
      <template slot="title">
        <span>所有厂区</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">
          <span>厂区一</span>
        </el-menu-item>
        <el-menu-item index="1-2">
          <span>厂区二</span>
        </el-menu-item>
        <el-menu-item index="1-3">
          <span>厂区三</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="/table">
        <span>表格</span>
    </el-menu-item>
    <el-menu-item index="/form">
      <span>表单</span>
    </el-menu-item>
    <el-menu-item index="/chart">
      <span>Chart</span>
    </el-menu-item>
    <el-menu-item index="/403">
      <span>403</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: 'Sidebar',
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style scoped>
  .el-menu{
    border-right:none;
    min-width: 200px;
    max-width: 250px;
    height: calc(100%- 60px)
  }
  .el-submenu .el-menu-item{
    min-width: auto;
  }
</style>
