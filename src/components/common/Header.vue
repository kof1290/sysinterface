<template>
  <el-menu
    router
    :default-active="this.$route.path"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#242f42"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="/">
      <i class="el-icon-menu"></i>
    </el-menu-item>
    <el-menu-item
      v-for="(item,i) in navList"
      :key="i"
      :index="item.name">
      <span>{{item.navItem}}</span>
    </el-menu-item>
    <el-menu-item index="/403">
      <i class="el-icon-info"></i>
    </el-menu-item>
    <el-menu-item index="/logout" style="float: right">
      <svg class="icon icon-font" aria-hidden="true">
        <use xlink:href="#icon-tuichu"></use>
      </svg>
    </el-menu-item>
    <el-menu-item index="setting" style="float: right">
      <i class="el-icon-setting"></i>
    </el-menu-item>
    <el-menu-item index="/user" style="float: right">
      <svg class="icon icon-font" aria-hidden="true">
        <use xlink:href="#icon-shenfenzheng"></use>
      </svg>
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        activeIndex: '1',
        navList: [
          {name: '/personal', navItem: 'Header1'},
          {name: '/78', navItem: 'Header2'},
          {name: '/7', navItem: 'Header3'},
          {name: '/56', navItem: 'Header4'},
          {name: '/99', navItem: 'Header5'}
        ]
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style scoped>
  .el-menu--horizontal {
    border-bottom: none;
  }

  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .icon-font {
    color: #909399;
    font-size: 18px;
  }
</style>
