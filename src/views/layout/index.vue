<template>
  <div class="layout">
    <el-container>
      <el-header class="header">
        <div class="left">
          <i style="font-size:20px" class="el-icon-s-fold"></i>
          <img class="marginlr" src="@/assets/layout_icon.png" alt />
          <span class="title">黑马面面</span>
        </div>
        <div class="right">
          <img :src="avatar" alt />
          <span class="name">{{username}}欢迎您</span>
          <el-button type="primary">退出</el-button>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">左侧菜单</el-aside>
        <el-main>内容部分</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import {getToken} from '@/utils/token'
export default {
  data() {
    return {
        avatar:'', //用户头像
        username:''  //昵称
    };
  },
  created(){
      this.getUserInfoData();
  },
  methods:{
      async getUserInfoData(){
          const res = await this.$axios.get('/info',{
              headers:{
                  token:getToken()
              }
          })

          //console.log(res.data);
          if(res.data.code===200){
              this.avatar=process.env.VUE_APP_BASEURL+"/"+res.data.data.avatar;
              this.username=res.data.data.username;
          }
      }
  }
};
</script>

<style lang="less">
.layout {
  height: 100%;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #f3f3f3;
    .left {
      display: flex;
      align-items: center;
      .marginlr {
        margin-left: 10px;
        margin-right: 10px;
      }
      .title {
        font-size: 22px;
        color: #49a1ff;
      }
    }
    .right {
      display: flex;
      align-items: center;
      img {
        width: 43px;
        height: 43px;
        margin-right: 9px;
        border-radius: 50%;
      }
      .name {
        margin-right: 38px;
      }
    }
  }
  .el-menu {
    border-right: solid 0px #e6e6e6;
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;
    background-color: #fff;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
}
</style>
