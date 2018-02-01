exports.install = function (Vue, options) {
    Vue.prototype.wxconfig = function (){
        let url =  window.location.href.split('#')[0];
        this.$http.get('http://uatm.1a1trip.com/tp/Api/utility/getWXConfig',{params
        :{'url':url}})
                .then((res) => {
                let data = res.body.data;

                wx.config({
                    debug: true,
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
              
                }, (err) => {
                console.log(err)
                });
    };
};