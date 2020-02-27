<block>
  <image src="/images/homefunc/school_logo.png" class="logo"></image>
</block>
<block>
  <block>
    <text class="footer-text" style="color:rgb(71,71,71);font-size:46rpx;margin: 18rpx 0rpx 40rpx 0rpx">教务系统账号</text>
  </block>
  <view class="homecard" style="height:550rpx;text-aligin:center">
    <form bindsubmit="submitValue">
      <view style="padding:30rpx 0rpx 0rpx 0rpx"></view>
      <view class="input-text" style="font-size:30rpx;color:gray;padding-bottom:10rpx">{{xh}}</view>
      <view class="classfunc-ver">
        <input class="input" name="xh" type="number" placeholder="请输入你的学号" focus></input>
      </view>

      <view style="padding:30rpx 0rpx 0rpx 0rpx"></view>
      <view class="classfunc-ver">
        <input class="input" name="pswd" type="text" password="true" placeholder="请输入你的密码"></input>
      </view>
      <view style="padding:30rpx 0rpx 0rpx 0rpx"></view>

      <view>

        <loading hidden="{{hidden}}">
          登陆中...
        </loading>

        <block qq:if="{{loged == 1}}">
          <button class="btn" type="primary" disabled="{{btnhidden}}" form-type="submit">更改</button>
        </block>
        <block qq:else>
          <button class="btn" type="primary" disabled="{{btnhidden}}" form-type="submit">登录</button>
        </block>
        <button style="margin-top:30rpx;background-color:#eee" class="btn" type="default" bindtap="toLuqu">录取查询</button>
      </view>

    </form>
  </view>
  <block>
    <text class="footer-text" style="font-size:22rpx;color:black;margin-top:50rpx">隐私信息仅缓存到本地，开发者不存储任何信息！</text>
  </block>
  <block>
    <text class="footer-text" style="color:#000;font-size:28rpx;margin:10rpx 0rpx 20rpx 0rpx" bindtap="toAbout">还有疑问？请点击<text style="color:blue">关于</text>(建议阅读后登录)</text>
  </block>
</block>
<block>
<view class="footer-text" style="margin-top:30rpx;margin-bottom:30rpx">
  <text>西院助手 V1.2</text>
  <text>AlgoriMind-信息技术学院实验室</text>
  <text>2018-2020</text>
</view>
</block>