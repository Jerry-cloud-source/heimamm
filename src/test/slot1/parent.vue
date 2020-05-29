<template>
    <div id="parent">
        父组件
        <hr>
        <child>
            <!-- <span style="color:red;">测试默认操作</span> -->
            <h1>我爱你呀</h1>
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590687038983&di=cd95db8faedaef43753e97cd1059e294&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20181011%2F39e82d3b9f6d46dcba420a1cb44645de.jpeg" alt="">
        </child>
    </div>
</template>

<script>
import child from './child'
export default {
    components:{
        child
    }
}
</script>