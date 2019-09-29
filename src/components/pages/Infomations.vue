<template>
  <div id="infomations">
      <h5>松墨天牛诱捕器挂设信息</h5>
      <p class="info">所属单位：漳州市英格尔农业科技有限公司</p>
      <p class="info">诱捕器编号：FJ-MA-A007</p>
      <h6>公司信息</h6>
      <p class="info">漳州市英格尔农业科技有限公司</p>
      <p class="info">陈梅芳</p>
      <p class="info">联系电话：13806938930</p>
      <h6>产品信息</h6>
      <p class="info">挂件数量：1</p>
      <p class="info">诱剂型号：FJ-MA</p>
      <p class="info">计划用药：4批次</p>
      <p class="info">诱捕器分布区域：坂头</p>
  </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped lang="less">
    #infomations{
        margin: 20px auto;
        width: 90%;
        box-shadow: 0 0 10px 10px #f0f0f0;
        box-sizing: border-box;
        border-radius: 10px;
        padding: 20px 15px;
        h5, h6{color: #15cd64;text-align: left;font-size: 20px;margin-bottom: 15px;font-weight: normal;}
        h6{margin-top: 20px;font-size: 18px;}
        .info{
            color: #999;
            margin-top: 5px;
        }
    }
</style>