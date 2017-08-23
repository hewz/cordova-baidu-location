# Cordova/ionic 百度定位Android版插件


利用百度定位SDK为Web app解决Android在大陆定位不准的问题。iOS下并无定位不准问题，可直接使用浏览器定位。更新自[mrwutong](https://github.com/mrwutong/cordova-qdc-baidu-location)

已更新百度地图Android版定位SDK（v7.2）并提供watchPosition和clearWatch方法。[Demo](https://github.com/hewz/BDLocationDemo)


### 一，申请密钥
请参照：[申请Android定位SDK密钥](http://developer.baidu.com/map/index.php?title=android-locsdk/guide/key)

### 二，安装插件
cordova plugin add https://github.com/hewz/cordova-baidu-location --variable API_KEY="your key"

### 三，调用方法
```
// 进行定位
baidu_location.getCurrentPosition(successCallback, failedCallback);
// 连续定位
baidu_location.watchPosition(successCallback, failedCallback, 5); // >=1时有效
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

若定位失败请参考官方错误码

### 删除插件
```
cordova plugin rm hewz.plugins.baidu-location
```


