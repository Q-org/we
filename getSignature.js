// src\getSignature.js

const appId = 'wx0784e64a30f2eb45';

// 确保在HTML文件中正确引入了微信JS-SDK
// <script src="https://res.wx.qq.com/open/js/jweixin-1.6.0.js"></script>

// 从您的后端获取签名信息
const getSignature = () => {
  // 获取微信签名
  return new Promise((resolve, reject) => {
    Axios.get('您的后端API路径', {
      // 修改这里
      params: {
        appid: appId,
        url: window.location.href.split('#')[0],
      },
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// const timestamp = Date.now();
// const nonceStr = '随机字符串';

async function setWx() {
  let res = await getSignature();
  let { timestamp, nonceStr, signature } = res;
  wx.config({
    debug: true,
    appId: appId,
    timestamp: timestamp,
    nonceStr: nonceStr,
    signature: signature,
    jsApiList: [
      'updateAppMessageShareData',
      'updateTimelineShareData',
      // ...可以添加其他需要使用的接口
    ],
  });
  wx.ready(() => {
    wx.updateAppMessageShareData({
      title: '测试分享',
      desc: '一个测试的分享!!!',
      link: window.location.href,
      imgUrl:
        'http://icon.mobanwang.com/UploadFiles_8971/200910/20091011134333685.png', // 修改这里
      success: function () {
        // 用户点击了分享后执行的回调函数
      },
    });
    wx.updateTimelineShareData({
      title: '测试分享',
      link: window.location.href,
      imgUrl:
        'http://icon.mobanwang.com/UploadFiles_8971/200910/20091011134333685.png', // 修改这里
      success: function () {
        // 用户点击了分享后执行的回调函数
      },
    });
  });
}

// 生成测试路径
const REDIRECT_URI = encodeURIComponent('https://qio.wiki/sharepath'); // 修改这里
const SCOPE = 'snsapi_base';
const shareUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${SCOPE}&state=STATE#wechat_redirect`;

// 修改这里
/** 
 * 
 * 
将你网页的域名添加进去，配置完成后我们对这个路径进行访问
https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE#wechat_redirect

 .appid为我们测试号中的appid
② .redirect_uri为我们页面路径，访问微信提供的路径会获取code值重定向到我们页面路径（这里的url需要进行urlEncode`处理）
③ . scope的值有两种：

snsapi_base为静默授权，用户无感知，但是只能获取到openid，拿不到其他信息。
snsapi_userinfo是弹框询问授权，确认授权后可以获取到openid进而拿到昵称、头像等信息

作者：前端论道
链接：https://juejin.cn/post/6844903825589927944
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

appID
wx0784e64a30f2eb45
appsecret
5a0a545fd90f32da675c1d9aa3f5631a


作者：前端论道
链接：https://juejin.cn/post/6844903825589927944
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
