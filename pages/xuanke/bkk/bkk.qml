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
  <view qq:for="{{bkkData}}" qq:key="this">
      <view class="Item">
  <view qq:if="{{item.classPeople < item.classVolume}}">
    <image src="/images/choose.png" class="chooseBtn" bindtap="choose" data-jsxx="{{item.teacher}}" data-jxb="{{item.classId}}"></image>
  </view>
        <view class="rowItem">
          <view class="volItem">
            <view class="classTitle" style="color:rgb(26,173,25)">{{item.courseTitle}}</view>
            <view class="normalText" style="margin-left:30rpx;">{{item.courseTime}}</view>
            <view class="rowItem" >
              <view class="normalText" style="margin-left:30rpx;margin-right:30rpx">上课地点：{{item.courseRoom}}</view>
              <view class="normalText" style="color:orange;font-weight:700">教师：{{item.teacher}}</view>
            </view>
            <view class="rowItem">
              <view class="rsText">容量：
                <text style="color:blue;font-weight:700">{{item.classVolume}}</text>人</view>
              <view class="rsText">已选：
                <text style="color:{{item.classPeople < item.classVolume ? 'green':'red'}};font-weight:700">{{item.classPeople}}</text>人</view>
            </view>
        </view>
      </view>
    </view>
  </view>
</view>

<view class="footer-text" style="margin-top:30rpx;margin-bottom:30rpx">
  <text>西院助手 V1.1</text>
  <text>AlgoriMind-信息技术学院实验室</text>
  <text>2018-2020</text>
</view>