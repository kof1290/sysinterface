<template>
  <el-row class="main-content">
    <!--<el-col :span="3" style="height: 100%;"  >-->
      <!--<v-sidebar></v-sidebar>-->
    <!--</el-col>-->
    <el-col :span="21" style="height: 100%;">
      <router-view></router-view>
    </el-col>
  </el-row>
</template>

<script>
  import vSidebar from '@/components/common/Sidebar'

  export default {
    name: 'Content',
    data() {
      return {
        d: 12
      }
    },
    components: {
      vSidebar
    }
  }
</script>

<style scoped>

</style>
