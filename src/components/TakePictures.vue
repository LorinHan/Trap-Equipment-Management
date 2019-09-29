<template>
  <div id="takePictures">
      <div id="allmap" style="width: 0;height: 0; display: none;">点击刷新</div>
      <button @click="closeHandle" style="position: absolute;right: 8px;top: 8px;border: none;background-color: red;color: #fff;width: 40px;height:30px;border-radius: 10px;">取消</button>
      <div class="infos">
          <p><span>文本1：</span><input type="text"></p>
          <p><span>文本1：</span><input type="text"></p>
          <p><span>文本1：</span><input type="text"></p>
          <p><span>文本1：</span><input type="text"></p>
          <p style="color: #777;font-size: 12px;">当前位置：{{location}}</p>
      </div>
      <input type="file" accept="image/*" multiple @change="getPic" id="pic" style="display: none;">
      <button @click="choosePic" style="display: block;border: none;background-color: orange;color: #fff;width: 80%;height:30px;margin: 0 auto;">+ 选择图片</button>
      <div id="picBox"></div>
      <button @click="upload" style="display: block;border: none;background-color: #15cd64;color: #fff;width: 80%;height:30px;margin: 15px auto;">上传</button>
  </div>
</template>

<script>
// import BMap from 'BMap';
export default {
    props: ["close"],
    data() {
        return {
            imgs: [],
            location: "正在定位...",
            // 纬度
            creditLatitude: null,
            // 经度
            creditLongitude: null,
        }
    },
    computed: {
    },
    methods: {
        choosePic() {
            document.getElementById("pic").click();
        },
        getPic() {
            var picList = document.getElementById("pic").files;
            var $d = document.querySelector("#picBox");//图片容器
             for(var i=0;i<picList.length;i++){
                 this.imgs.push(picList[i]);
                var reader = new FileReader();
                reader.readAsDataURL(picList[i]); 
                reader.onload = function(e){
                    var oImg=new Image();
                    oImg.setAttribute("src", e.target.result);
                    oImg.setAttribute("class",'img');
                    $d.appendChild(oImg);
                };
            }
        },
        upload() {
            var formData = new FormData();
            this.imgs.forEach(file => {
                formData.append("files", file)
            })
            console.log(formData.getAll("files"))
        },
        closeHandle() {
            this.imgs = [];
            document.getElementById("pic").value = "";
            document.getElementById("picBox").innerHTML = "";
            this.$props.close();
        },
        getLocation() {
            console.log(1)
            this.location = window.localStorage.getItem("location");
        }
        // getCity(){

        //     var geolocation = new BMap.Geolocation();
        //     // 开启SDK辅助定位
        //     // geolocation.enableSDKLocation();
        //     const _this = this;
        //     geolocation.getCurrentPosition(function(r){
        //         if(this.getStatus() == BMAP_STATUS_SUCCESS){
        //             // var mk = new BMap.Marker(r.point);
        //             // map.addOverlay(mk);
        //             // map.panTo(r.point);
        //             _this.location = r.address.province + r.address.city + r.address.district + r.address.street;
        //             _this.creditLatitude = r.point.lat;
        //             _this.creditLongitude = r.point.lng;
        //         }
        //         else {
        //             alert('failed'+this.getStatus());
        //         }        
        //     });
        // },
    }
}
</script>

<style scoped lang="less">
    #takePictures{
        width: 80%;
        min-height: 200px;
        position: absolute;
        left: 10%;
        background-color: #fff;
        box-shadow: 0 0 10px 10px #f0f0f0;
        padding: 15px 0;
        #picBox{
            width: 100%;
        }
        .infos{
            margin: 40px auto;
            width: 80%;
            p{
                margin-top: 10px;
                height: 30px;
                line-height: 30px;
            }
            span{margin-right: 10px;}
            input{width: 62%;height:90%;padding-left: 5px;}
        }
    }
</style>