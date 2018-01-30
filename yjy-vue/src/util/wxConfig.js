exports.install = function (Vue, options) {
    Vue.prototype.wxconfig = function (){
        this.$http.get('http://uatm.1a1trip.com/tp/Api/utility/getWXConfig')
            .then((res) => {
                res = res.body.data;
            this.weixinConfig(res);
            console.log(wx.config);
            }, (err) => {
            console.log(err)
            });

            weixinConfig:(data)=> {
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
    };
};