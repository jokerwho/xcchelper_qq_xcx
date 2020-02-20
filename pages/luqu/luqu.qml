<block>
  <image src="/images/homefunc/school_logo.png" class="logo"></image>
</block>
<block>
  <block>
    <text class="footer-text" style="color:rgb(71,71,71);font-size:46rpx;margin: 18rpx 0rpx 40rpx 0rpx">录取查询</text>
  </block>
  <view class="homecard" style="height:335rpx;text-aligin:center">
    <form bindsubmit="submitValue">
      <view style="padding:60rpx 0rpx 0rpx 0rpx"></view>

      <view class="classfunc-ver">
        <input class="input" maxlength="18" name="ksh" type="number" placeholder="请输入查询凭证" focus></input>
      </view>

      <view style="padding:30rpx 0rpx 0rpx 0rpx"></view>

      <view>

        <loading hidden="{{hidden}}">
          查询中...
        </loading>
        <block>
          <button class="btn" type="primary" disabled="{{btnhidden}}" form-type="submit">查询</button>
        </block>
      </view>

    </form>
  </view>
<block>
<view style="width:550rpx;margin-left:100rpx;margin-bottom:30rpx">
    <text class="footer-text" style="font-size:22rpx;color:black;margin-top:50rpx">本接口为招生网接口即时查询，点击查询即代表您同意填写，本程序不会以任何方式存储你的隐私信息</text>
</view>
  </block>
</block>
<block>
<view class="footer-text" style="margin-top:30rpx;margin-bottom:30rpx">
  <text>西院助手 V1.1</text>
  <text>AlgoriMind-信息技术学院实验室</text>
  <text>2018-2020</text>
</view>
</block>
