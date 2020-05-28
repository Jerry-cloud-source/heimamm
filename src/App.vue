<template>
  <div id="app">
    <!-- 占位和被替换 -->
    <router-view></router-view>  
  </div>
</template>

<script>


export default {
  name: 'App'
}
</script>

<style lang="less">
//以下两种都可以
//@import './styles/base.less';
@import url("~@/styles/base.less");
</style>
