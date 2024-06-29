const appId = "wx0784e64a30f2eb45";
{
  /* <script src="https://res.wx.qq.com/open/js/jweixin-1.6.0.js"></script>; */
}

wx.config({
  debug: true, // 开启调试模式
  appId: appId, // 必填，公众号的唯一标识
  timestamp: new Date().toLocaleString(), // 必填，生成签名的时间戳
  nonceStr: "生成签名的随机串", // 必填，生成签名的随机串
  signature: "生成的签名", // 必填，签名
  jsApiList: [
    // 必填，需要使用的JS接口列表
    "updateAppMessageShareData",
    "updateTimelineShareData",
    // ...可以添加其他需要使用的接口
  ],
});

wx.ready(function () {
  // 在这里调用API
  wx.updateAppMessageShareData({
    title: "分享标题",
    desc: "分享描述",
    link: "分享链接",
    imgUrl: "分享图标的URL",
    success: function () {
      // 设置成功
    },
  });
});

wx.error(function (res) {
  // config信息验证失败会执行error函数，如签名过期导致验证失败，
  // 具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，
  // 对于SPA可以在这里更新签名。
});
