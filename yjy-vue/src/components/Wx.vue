<script type="text/javascript">

export default {
    data(){
        return{
           weixinConfig:{} 
        }
    },
    mounted(){
            var _this = this;
                this.$nextTick(function () {
                    _this.init();
                  
                });
    },
    methods:{
        init() {
       let that = this;

        this.$http.get('http://uatm.1a1trip.com/tp/Api/utility/getWXConfig')
                .then((res) => {
                 res = res.body.data;
                this.weixinConfig(res);
                }, (err) => {
                console.log(err)
                })
            //   Service.wxConfig({//调用服务端获取签名配置
            //     url: location.href.split('#')[0]
            //   }, result => {
            //     if (result.success) {
            //       that.weixinConfig(result.data);
            //     }
            //   });

        },
        weixinConfig(data) {
            wx.config({
                debug: false,
                appId: data.appId,
                timestamp: data.timestamp,
                nonceStr: data.nonceStr,
                signature: data.signature,
                jsApiList: [
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'chooseImage',
                'previewImage',
                'uploadImage',
                'chooseWXPay'
                ]
            });
        }
    }

 
}
</script>