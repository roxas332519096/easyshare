# easyshare

version:0.0.1

一个简单的 share 插件.

### 可将网页分享到社交平台

facebook,twitter,linkedin

### 用法

引入 js

分享到 facebook
注意:fackbook 需要引入开发者 id

```
share().facebook(appId,href,text)
```

分享到 twitter

```
share().twitter(url,text)
```

分享到 linkedin

```
share().linkedin(url)
```

参数

appId:第三方平台的开发者 id
text:分享的文本
url:分享的 url
