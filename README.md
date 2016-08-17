#Cordova/ionic 百度地图定位Android版插件


本插件是cordova-qdc-baidu-location的升级版,利用百度定位SDK为Web app解决大陆Android定位不准的问题。
相比原插件，更新百度地图Android版定位SDK（v6.2.3）并提供watchPosition和clearWatch方法。 iOS下并无定位不准问题，可直接使用浏览器定位。

原插件在此 https://github.com/mrwutong/cordova-qdc-baidu-location ，感谢作者mrwutong



###一，申请密钥
请参照：[申请密钥Android定位SDK](http://developer.baidu.com/map/index.php?title=android-locsdk/guide/key)

###二，安装插件

ionic plugin add https://github.com/hewz/cordova-baidu-location --variable API_KEY="<API_KEY>"
**注：此处的API_KEY来自于第一步，不带左右尖括号**


###三，调用方法
```
// 进行定位
baidu_location.getCurrentPosition(successCallback, failedCallback);
// 连续定位
baidu_location.watchPosition(successCallback, failedCallback, 5); // every 5 seconds
// 停止定位
baidu_location.clearWatch(successCallback, failedCallback);
```
获得定位信息，返回JSON格式数据:
```
{
  latitude : 纬度,
  longitude: 经度,
  ...
}
```
具体字段内容请参照：[BDLocation](http://developer.baidu.com/map/loc_refer/index.html)

###四，查看当前安装了哪些插件
```
ionic plugin ls
```

###五，删除插件
```
ionic plugin rm com.hewz.plugins.baidu.location
```


