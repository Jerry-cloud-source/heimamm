<template>
    <div id="parentId">
        父组件
        <hr>
        <child>
            <div slot="title">我要努力学习呀</div>
            内容
            <div slot="footer">底部</div>
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