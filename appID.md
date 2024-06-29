https://qio.wiki/wechat-share
wechat-share

https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx0784e64a30f2eb45&redirect_uri=https://qio.wiki/&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect

snsapi_base为静默授权，用户无感知，但是只能获取到openid，拿不到其他信息。
snsapi_userinfo是弹框询问授权，确认授权后可以获取到openid进而拿到昵称、头像等信息

# 可能遇到的问题

scope参数错误或没有scope权限，检查scope参数赋值snsapi_base或snsapi_userinfo
redirect_uri参数错误，检查网页授权页面域名配置问题，复制的时候空格也要注意
response_type参数错误，检查url路径是否进行了urlEncode处理

作者：前端论道
链接：https://juejin.cn/post/6844903825589927944
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

作者：前端论道
链接：https://juejin.cn/post/6844903825589927944
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
