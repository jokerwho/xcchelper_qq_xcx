
<view class="choose" hidden="{{isHome}}">
  <view class="chooseItem {{my_c == 'green' ? 'on':''}}" bindtap="My" style="color:{{my_c}}">已选课程</view>
  <view class="chooseItem {{bk1_c == 'green' ? 'on':''}}" bindtap="Bk1" style="color:{{bk1_c}}">板块课一</view>
  <view class="chooseItem {{bk2_c == 'green' ? 'on':''}}" bindtap="Bk2" style="color:{{bk2_c}}">板块课二</view>
  <view class="chooseItem {{ts_c == 'green' ? 'on':''}}" bindtap="Ts" style="color:{{ts_c}}">通识任选</view>
</view>
<loading hidden="{{hidden}}">
加载中...
</loading>
<view class="titleItem">
<view class="title" bindtap="ifShow" data-item="zx"><view><image class="sanjiao" src="{{zxHidden ? '/images/sjy.png':'/images/sjx.png'}}"></image></view>主修课程</view>
</view>
<view qq:for="{{yixuanData}}" qq:key="this" hidden="{{zxHidden}}">
  <view qq:if="{{item.courseCategory == '主修课程'}}">
  <view class="Item">
  <view qq:if="{{item.chooseSelf == '1'}}">
    <image src="/images/del.png" class="delBtn" bindtap="tuike" data-name="{{item.courseTitle}}" data-id="{{item.classId}}"></image>
  </view>
<view class="rowItem">
  <view class="volItem">
  <view class="classTitle" style="color:{{item.waiting == '0' ? 'red':'rgb(26,173,25)'}}">{{item.courseTitle}}</view>
    <view class="rowItem">
      <view class="xzText" qq:if="{{item.chooseSelf == 1}}" style="color:orange">自选上</view>
      <view class="xzText" qq:elif="{{item.chooseSelf == 0}}">系统安排</view>
      <view class="normalText">{{item.teacher}}</view>
    </view>
    <view class="rowItem">
      <view class="rsText">教学班：<text style="color:blue;font-weight:700">{{item.classVolume}}</text>人</view>
      <view class="rsText">已选择：<text style="color:{{item.classPeople != item.classVolume ? 'green':'red'}};font-weight:700">{{item.classPeople}}</text>人</view>
    </view>
  </view>
</view>
  </view>
  </view>
</view>

<view class="titleItem">
<view class="title" bindtap="ifShow" data-item="bk"><view><image class="sanjiao" src="{{bkHidden ? '/images/sjy.png':'/images/sjx.png'}}"></image></view>板块课</view>
</view>
<view qq:for="{{yixuanData}}" qq:key="this" hidden="{{bkHidden}}">
  <view qq:if="{{item.courseCategory == '板块课'}}">
  <view class="Item">
  <view qq:if="{{item.chooseSelf == '1'}}">
    <image src="/images/del.png" class="delBtn" bindtap="tuike" data-name="{{item.courseTitle}}" data-id="{{item.classId}}"></image>
  </view>
<view class="rowItem">
  <view class="volItem">
  <view class="classTitle" style="color:{{item.waiting == '0' ? 'red':'rgb(26,173,25)'}}">{{item.courseTitle}}</view>
    <view class="rowItem">
      <view class="xzText" qq:if="{{item.chooseSelf == 1}}" style="color:orange">自选上</view>
      <view class="xzText" qq:elif="{{item.chooseSelf == 0}}">系统安排</view>
      <view class="normalText">{{item.teacher}}</view>
    </view>
    <view class="rowItem">
      <view class="rsText">教学班：<text style="color:blue;font-weight:700">{{item.classVolume}}</text>人</view>
      <view class="rsText">已选择：<text style="color:{{item.classPeople != item.classVolume ? 'green':'red'}};font-weight:700">{{item.classPeople}}</text>人</view>
    </view>
  </view>
</view>
  </view>
  </view>
</view>

<view class="titleItem">
<view class="title" bindtap="ifShow" data-item="ts"><view><image class="sanjiao" src="{{tsHidden ? '/images/sjy.png':'/images/sjx.png'}}"></image></view>通识选修课</view>
</view>
<view qq:for="{{yixuanData}}" qq:key="this" hidden="{{tsHidden}}">
  <view qq:if="{{item.courseCategory == '通识选修课'}}">
  <view class="Item">
  <view qq:if="{{item.chooseSelf == '1'}}">
    <image src="/images/del.png" class="delBtn" bindtap="tuike" data-name="{{item.courseTitle}}" data-id="{{item.classId}}"></image>
  </view>
<view class="rowItem">
  <view class="volItem">
  <view class="classTitle" style="color:{{item.waiting == '0' ? 'red':'rgb(26,173,25)'}}">{{item.courseTitle}}</view>
    <view class="rowItem">
      <view class="xzText" qq:if="{{item.chooseSelf == 1}}" style="color:orange">自选上</view>
      <view class="xzText" qq:elif="{{item.chooseSelf == 0}}">系统安排</view>
      <view class="normalText">{{item.teacher}}</view>
    </view>
    <view class="rowItem">
      <view class="rsText">教学班：<text style="color:blue;font-weight:700">{{item.classVolume}}</text>人</view>
      <view class="rsText">已选择：<text style="color:{{item.classPeople != item.classVolume ? 'green':'red'}};font-weight:700">{{item.classPeople}}</text>人</view>
    </view>
  </view>
</view>
  </view>
  </view>
</view>
<view class="footer-text" style="margin-top:30rpx;font-weight:700"
><text style="color:rgb(26,173,25)">绿色标题为已选上 </text>
<text style="color:red">红色标题为待筛选</text>
</view>
<view class="footer-text" style="margin-top:30rpx;margin-bottom:30rpx">
  <text>西院助手 V1.1</text>
  <text>AlgoriMind-信息技术学院实验室</text>
  <text>2018-2020</text>
</view>