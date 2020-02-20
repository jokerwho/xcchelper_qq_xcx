
<view hidden="{{isHome}}">
<dropdownmenu dropDownMenuTitle='{{chooseTitle}}' dropDownMenuSourceData='{{chooseData}}' bind:selectedItem='selectedItem' />
</view>
<view class="weeks" hidden="{{isHome}}">
  <view class="weekday {{all_c == 'green' ? 'on':''}}" bindtap="All" style="color:{{all_c}}">全部</view>
  <view class="weekday {{mon_c == 'green' ? 'on':''}}" bindtap="Mon" style="color:{{mon_c}}">周一</view>
  <view class="weekday {{tue_c == 'green' ? 'on':''}}" bindtap="Tue" style="color:{{tue_c}}">周二</view>
  <view class="weekday {{wed_c == 'green' ? 'on':''}}" bindtap="Wed" style="color:{{wed_c}}">周三</view>
  <view class="weekday {{thr_c == 'green' ? 'on':''}}" bindtap="Thr" style="color:{{thr_c}}">周四</view>
  <view class="weekday {{fri_c == 'green' ? 'on':''}}" bindtap="Fri" style="color:{{fri_c}}">周五</view>
</view>
<view class="weekText">当前：<text style="color:rgb(26,173,25)">{{nowWeek}}</text></view>
<scroll-view scroll-y>
  <loading hidden="{{hidden}}">
    获取数据中...
  </loading>
  <view class="classList" qq:for="{{classData}}" qq:key="this">

    <view qq:if="{{all_c == 'green'}}">
      <view class="classItem" animation="{{myshow}}">
        <view class="classHead">
          <view class="className">{{item.courseTitleShort}}</view>
          <view class="classInfo">
            <text style="padding-right:8rpx;color:orange;font-weight:700">{{item.courseWeek}}</text>
            <text style="padding-right:8rpx;color:orange;font-weight:700">{{item.courseSection}}</text>
            <text style="padding-right:8rpx">{{item.credit + '分'}}</text>
            <text style="padding-right:8rpx" qq:if="{{item.exam == '未安排'}}"></text>
            <text style="padding-right:8rpx" qq:else>{{item.exam}}</text>
            <text>{{item.teacher}}</text>
          </view>
        </view>
        <text class="cdText" qq:if="{{item.courseRoom == '未排地点'}}">None</text>
        <text class="cdText" qq:else>{{item.courseRoom}}</text>
      </view>
    </view>

    <view qq:if="{{item.courseWeekday == '1'&&mon_c == 'green'}}">
      <view class="classItem" animation="{{myshow}}">
        <view class="classHead">
          <view class="className">{{item.courseTitleShort}}</view>
          <view class="classInfo">
            <text style="padding-right:8rpx;color:orange;font-weight:700">{{item.courseWeek}}</text>
            <text style="padding-right:8rpx;color:orange;font-weight:700">{{item.courseSection}}</text>
            <text style="padding-right:8rpx">{{item.credit + '分'}}</text>
            <text style="padding-right:8rpx" qq:if="{{item.exam == '未安排'}}"></text>
            <text style="padding-right:8rpx" qq:else>{{item.exam}}</text>
            <text>{{item.teacher}}</text>
          </view>
        </view>
        <text class="cdText" qq:if="{{item.courseRoom == '未排地点'}}">None</text>
        <text class="cdText" qq:else>{{item.courseRoom}}</text>
      </view>
    </view>

    <view qq:if="{{item.courseWeekday == '2'&&tue_c == 'green'}}">
      <view class="classItem" animation="{{myshow}}">
        <view class="classHead">
          <view class="className">{{item.courseTitleShort}}</view>
          <view class="classInfo">
            <text style="padding-right:8rpx;color:orange;font-weight:700">{{item.courseWeek}}</text>
            <text style="padding-right:8rpx;color:orange;font-weight:700">{{item.courseSection}}</text>
            <text style="padding-right:8rpx">{{item.credit + '分'}}</text>
            <text style="padding-right:8rpx" qq:if="{{item.exam == '未安排'}}"></text>
            <text style="padding-right:8rpx" qq:else>{{item.exam}}</text>
            <text>{{item.teacher}}</text>
          </view>
        </view>
        <text class="cdText" qq:if="{{item.courseRoom == '未排地点'}}">None</text>
        <text class="cdText" qq:else>{{item.courseRoom}}</text>
      </view>
    </view>

    <view qq:if="{{item.courseWeekday == '3'&&wed_c == 'green'}}">
      <view class="classItem" animation="{{myshow}}">
        <view class="classHead">
          <view class="className">{{item.courseTitleShort}}</view>
          <view class="classInfo">
            <text style="padding-right:8rpx;color:orange;font-weight:700">{{item.courseWeek}}</text>
            <text style="padding-right:8rpx;color:orange;font-weight:700">{{item.courseSection}}</text>
            <text style="padding-right:8rpx">{{item.credit + '分'}}</text>
            <text style="padding-right:8rpx" qq:if="{{item.exam == '未安排'}}"></text>
            <text style="padding-right:8rpx" qq:else>{{item.exam}}</text>
            <text>{{item.teacher}}</text>
          </view>
        </view>
        <text class="cdText" qq:if="{{item.courseRoom == '未排地点'}}">None</text>
        <text class="cdText" qq:else>{{item.courseRoom}}</text>
      </view>
    </view>

    <view qq:if="{{item.courseWeekday == '4'&&thr_c == 'green'}}">
      <view class="classItem" animation="{{myshow}}">
        <view class="classHead">
          <view class="className">{{item.courseTitleShort}}</view>
          <view class="classInfo">
            <text style="padding-right:8rpx;color:orange;font-weight:700">{{item.courseWeek}}</text>
            <text style="padding-right:8rpx;color:orange;font-weight:700">{{item.courseSection}}</text>
            <text style="padding-right:8rpx">{{item.credit + '分'}}</text>
            <text style="padding-right:8rpx" qq:if="{{item.exam == '未安排'}}"></text>
            <text style="padding-right:8rpx" qq:else>{{item.exam}}</text>
            <text>{{item.teacher}}</text>
          </view>
        </view>
        <text class="cdText" qq:if="{{item.courseRoom == '未排地点'}}">None</text>
        <text class="cdText" qq:else>{{item.courseRoom}}</text>
      </view>
    </view>

    <view qq:if="{{item.courseWeekday == '5'&&fri_c == 'green'}}">
      <view class="classItem" animation="{{myshow}}">
        <view class="classHead">
          <view class="className">{{item.courseTitleShort}}</view>
          <view class="classInfo">
            <text style="padding-right:8rpx;color:orange;font-weight:700">{{item.courseWeek}}</text>
            <text style="padding-right:8rpx;color:orange;font-weight:700">{{item.courseSection}}</text>
            <text style="padding-right:8rpx">{{item.credit + '分'}}</text>
            <text style="padding-right:8rpx" qq:if="{{item.exam == '未安排'}}"></text>
            <text style="padding-right:8rpx" qq:else>{{item.exam}}</text>
            <text>{{item.teacher}}</text>
          </view>
        </view>
        <text class="cdText" qq:if="{{item.courseRoom == '未排地点'}}">None</text>
        <text class="cdText" qq:else>{{item.courseRoom}}</text>
      </view>
    </view>

  </view>
  <block>
<view class="footer-text" style="margin-top:30rpx;margin-bottom:30rpx">
  <text>西院助手 V1.1</text>
  <text>AlgoriMind-信息技术学院实验室</text>
  <text>2018-2020</text>
</view>
  </block>
</scroll-view>