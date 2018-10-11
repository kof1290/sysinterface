<template>
    <el-row class="content">
      <el-row>
        <v-header></v-header>
      </el-row>
      <router-view></router-view>
    </el-row>
</template>

<script>
  import vHeader from '@/components/common/Header'
  import vSidebar from '@/components/common/Sidebar'

  export default {
    name: 'Home',
    data() {
      return { }
    },
    components: {
      vHeader, vSidebar
    }
  }
</script>

<style scoped>
  .el-header {
    padding: 0;
  }
  .content{
    width: 100%;
    height: 100%;
  }
  .main-content{
    height: 93%;
  }
</style>
