<template>
    <div id="questions">
        <router-link class="item" to="/detail"><i class="iconfont icon-question" style="color: rgb(63, 182, 220);"></i>常见问题常见问题</router-link>
        <router-link class="item" to="/detail"><i class="iconfont icon-question" style="color: rgb(63, 182, 220);"></i>常见问题常见问题</router-link>
        <router-link class="item" to="/detail"><i class="iconfont icon-question" style="color: rgb(63, 182, 220);"></i>常见问题常见问题</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
    #questions{
        margin: 20px auto;
        width: 90%;
        box-shadow: 0 0 10px 10px #f0f0f0;
        border-radius: 10px;
        padding: 10px 0;
        .item{
            display: block;
            height: 35px;
            line-height: 35px;
            border-bottom: 1px solid #f0f0f0;
            font-size: 16px;
            padding-left: 5px;
            color: #555;
            i{font-size: 18px;}
        }
        .item:last-child{border:none;}
    }
</style>