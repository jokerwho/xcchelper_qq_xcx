<loading hidden="{{hidden}}">
获取中...
</loading>

<view class="homecard" qq:for="{{msgInfo}}" qq:key="this">
  <view class="classfunc-col">
    <text style="font-size:40rpx;font-weight:900;color:rgb(26,173,25);margin-top:30rpx;margin-bottom:20rpx">{{item.ctime}}</text>
    <view class="divLine-s"></view>
    <text style="margin:20rpx 35rpx 30rpx 35rpx">{{item.message}}</text>
  </view>
</view>

<view class="footer-text" style="margin-top:30rpx;margin-bottom:30rpx">
  <text>西院助手 V1.2</text>
  <text>AlgoriMind-信息技术学院实验室</text>
  <text>2018-2020</text>
</view>