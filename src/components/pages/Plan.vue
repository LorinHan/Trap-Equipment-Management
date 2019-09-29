<template>
    <div id="plan">
        <button class="add" @click="openBox">+ 添加</button>
        <transition name="fade">
            <take-pictures ref="takePic" v-show="addShow" :close="close"></take-pictures>
        </transition>
        <h5>维护详情</h5>
        <div class="item">
            <p class="info">维护批次：4</p>
            <p class="info">换药时间：2019-06-07</p>
            <p class="info">维护批次：4</p>
            <p class="info">维护批次：4</p>
            <p class="info">记录照片：</p>
            <div class="imgs">
                <img src="http://img3.imgtn.bdimg.com/it/u=189968940,1808829033&fm=15&gp=0.jpg" alt="">
                <img src="http://img3.imgtn.bdimg.com/it/u=189968940,1808829033&fm=15&gp=0.jpg" alt="">
                <img src="http://img3.imgtn.bdimg.com/it/u=189968940,1808829033&fm=15&gp=0.jpg" alt="">
            </div>
        </div>
        <div class="item">
            <p class="info">维护批次：4</p>
            <p class="info">换药时间：2019-06-07</p>
            <p class="info">维护批次：4</p>
            <p class="info">维护批次：4</p>
            <p class="info">记录照片：</p>
            <div class="imgs">
                <img src="http://img3.imgtn.bdimg.com/it/u=189968940,1808829033&fm=15&gp=0.jpg" alt="">
                <img src="http://img3.imgtn.bdimg.com/it/u=189968940,1808829033&fm=15&gp=0.jpg" alt="">
                <img src="http://img3.imgtn.bdimg.com/it/u=189968940,1808829033&fm=15&gp=0.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import takePictures from "@/components/TakePictures.vue";
export default {
    data() {
        return {
            addShow: false
        }
    },
    methods: {
        close() {
            this.addShow = false;
        },
        openBox() {
            this.addShow = true;
            this.$refs.takePic.getLocation();
        }
    },
    components: {
        "takePictures": takePictures
    }
}
</script>

<style scoped lang="less">
    #plan{
        margin: 20px auto;
        width: 90%;
        box-shadow: 0 0 10px 10px #f0f0f0;
        box-sizing: border-box;
        border-radius: 10px;
        padding: 20px 15px;
        .add{
            width: 55px;
            height:30px;
            background-color: #15cd64;
            border: none;
            color: #fff;
            position: absolute;
            right: 7%;
            top: 135px;
        }
        h5{color: #15cd64;text-align: left;font-size: 20px;margin-bottom: 15px;font-weight: normal;}
        .item{
            padding: 5px;
            border: 1px solid #c0c0c0;
            border-radius: 5px;
            margin-bottom: 10px;
            .info{
                color: #999;
                margin-top: 5px;
            }
            .imgs{
                width: 100%;
                overflow: hidden;
                img{width: 46%;float: left;margin-left: 3%;margin-top: 10px;}
            }
        }
    }
</style>