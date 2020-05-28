<template>
  <div class="register">
    <el-dialog width="600px" center :visible.sync="dialogVisible">
      <div slot="title" class="title">注册</div>
      <el-form :model="registerForm" label-width="100px">
        <el-form-item label="昵称">
          <el-input v-model="registerForm.username"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="registerForm.email"></el-input>
        </el-form-item>
        <el-form-item label="手机">
          <el-input v-model="registerForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="registerForm.password" show-password></el-input>
        </el-form-item>
        <el-form-item label="图形码">
          <el-row>
            <el-col :span="17">
              <el-input></el-input>
            </el-col>
            <el-col style="margin-left:10px" :span="6">
              <img class="captcha" src alt />
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="验证码">
          <el-row>
            <el-col :span="17">
              <el-input v-model="registerForm.rcode"></el-input>
            </el-col>
            <el-col style="margin-left:10px" :span="6">
              <el-button>获取用户验证码</el-button>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button @click="dialogVisible=false">取消</el-button>
        <el-button type="primary" @click="dialogVisible=false">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  // props:['isShow'],
  data() {
    return {
      //dialogVisible:this.isShow

      dialogVisible: false,
      registerForm:{
          //这里面的数据，将来是要提交给服务器
          username:"",  //用户名
          phone:"",  //手机号
          email:"",  //邮箱
          avatar:"",  //头像地址
          password:"",  //密码
          rcode:"",  //验证码
      }
    };
  }
  // watch:{
  //     isShow:function(newValue){
  //         //console.log(newValue);
  //         this.dialogVisible=newValue;
  //     }
  // }
};
</script>

<style lang="less">
.register {
  .title {
    height: 53px;
    background: #03c0f9;
    color: #fff;
    text-align: center;
    line-height: 53px;
  }
  .el-dialog__header {
    padding: 0px;
  }
  .el-dialog__headerbtn .el-dialog__close {
    color: #fff;
  }
  .captcha {
    width: 100%;
    height: 40px;
  }
}
</style>