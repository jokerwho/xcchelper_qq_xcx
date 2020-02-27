<block>
  <view class="homecard" style="height:260rpx;" animation="{{my}}">
    <view style="margin-top:40rpx" class="classfunc-ver" bindtap="toChange">
      <open-data type="userAvatarUrl" class="avatar-icon"></open-data>
      <text class="avatar-text">欢迎你，<text style="color:rgb(146, 35, 7)">{{name}}</text>同学</text>
    </view>
    <view class="divLine"></view>
    <navigator class="classfunc-ver" hover-class="none" url="/pages/change/change">
      <image src="/images/homefunc/account.png" class="log-icon"></image>
      <view qq:if="{{log}}">
        <text class="log-text">学号更改</text>
      </view>
      <view qq:else="{{log}}">
        <text class="log-text">学号登入</text>
      </view>
    </navigator>
  </view>
</block>
<block>


  <view class="classfunc-col">
    <!--button hover-class="none" class="classfunc-ver homecard menuItem" style="height:100rpx;width:690rpx;margin-bottom:20rpx" bindtap="nopass" animation="{{find}}">
      <image src="/images/homefunc/search.png" class="option-icon"></image>
      <text class="option-text">我的寻物</text>
    </button-->
    <button hover-class="none" class="classfunc-ver homecard menuItem" style="height:100rpx;width:690rpx;margin-bottom:10rpx" bindtap="toRefresh" animation="{{refresh}}">
      <image src="/images/homefunc/refresh.png" class="option-icon"></image>
      <text class="option-text">学期刷新</text>
    </button>
    <button hover-class="none" class="classfunc-ver homecard menuItem" style="height:100rpx;width:690rpx;margin-bottom:20rpx" bindtap="toSet" animation="{{set}}">
      <image src="/images/homefunc/settings.png" class="option-icon"></image>
      <text class="option-text">设置</text>
    </button>
    <loading hidden="{{hidden}}">
    学期刷新中...
    </loading>
    <button hover-class="none" class="classfunc-ver homecard menuItem" style="height:100rpx;width:690rpx;margin-top:20rpx;margin-bottom:20rpx" animation="{{kefu}}" bindtap="fankui">
      <image src="/images/kefu.png" class="option-icon"></image>
      <text class="option-text">在线反馈</text>
    </button>
    <button hover-class="none" class="classfunc-ver homecard menuItem" style="height:100rpx;width:690rpx;margin-top:20rpx;margin-bottom:60rpx" bindtap="toAbout" animation="{{about}}">
      <image src="/images/homefunc/info.png" class="option-icon"></image>
      <text class="option-text">关于</text>
    </button>
  </view>
</block>
<view animation="{{foot}}" class="footer-text" style="margin-top:10rpx;margin-bottom:30rpx">
<button type="primary" open-type = "addFriend" open-id="499E85FB57EFD2595A940BB3DC3DE283" bindaddfriend="addfriend">联系开发者</button>
  <text style="margin-top:30rpx">西院助手 V1.2</text>
  <text>AlgoriMind-信息技术学院实验室</text>
  <text>2018-2020</text>
</view>