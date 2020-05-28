<template>
  <div>
      <el-dialog title="注册" width="600px" :visible.sync="dialogVisible">
          <span>这个是测试dialog</span>
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

            dialogVisible:false 
        }
    },
    // watch:{
    //     isShow:function(newValue){
    //         //console.log(newValue);
    //         this.dialogVisible=newValue;
    //     }
    // }
}
</script>

<style>

</style>