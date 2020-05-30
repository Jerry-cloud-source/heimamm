<template>
  <div class="userEdit">
    <el-dialog center :visible.sync="dialogVisble" width="600px">
      <div slot="title" class="title">{{mode=== 'add' ? '新增用户' : '修改用户'}}</div>
      <span slot="footer">
        <el-button @click="dialogVisble = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisble: false,
      mode:''  //模式，add代表新增   edit代表修改
    };
  },
  methods: {
    submit() {}
  }
};
</script>

<style lang="less">
.userEdit {
  .title {
    height: 53px;
    text-align: center;
    color: #fff;
    background-color: #0e9cfa;
    line-height: 53px;
  }
  .el-dialog__header {
    padding: 0;
  }
  .el-dialog__headerbtn .el-dialog__close {
    color: #fff;
  }
}
</style>