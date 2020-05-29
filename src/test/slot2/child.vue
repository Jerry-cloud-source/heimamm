<template>
    <div id="childId">
        子组件
        <br>
        <br>
       <div style="border:1px solid red">
            <slot name="title"/>
       </div>
       <br>
       <br>
       <div style="border:1px solid blue">
            <slot />
       </div>
       <br>
       <br>
       <div style="border:1px solid green">
            <slot name="footer"/>
       </div>
    </div>
</template>