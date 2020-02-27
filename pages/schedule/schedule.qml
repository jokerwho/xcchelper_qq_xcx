
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
<view class="weekText" qq:if="{{all_c != 'green'}}">当前：<text style="color:rgb(26,173,25)">{{nowWeek}}</text><text style="margin-left:30rpx">当前周课程</text><image style="margin-left:20rpx" src="{{weeksMode == 1 ? '/images/switch-on.png':'/images/switch-off.png'}}" class="switch" bindtap="changeMode"></image></view>
<scroll-view scroll-y>
  <loading hidden="{{hidden}}">
    获取数据中...
  </loading>
  <view qq:if="{{all_c == 'green'}}">
  <view class="classfunc-row" style="margin-left:30rpx"><view class="circle"></view>星期一</view>
  <view class="classList" qq:for="{{classData}}" qq:key="this">
      <view class="classItem" qq:if="{{item.courseWeekday == '1'}}" animation="{{myshow}}">
        <view class="classHead">
          <view class="className">{{item.courseTitleShort}}</view>
          <view class="classInfo">
            <text style="padding-right:8rpx;color:orange;font-weight:700">{{item.courseWeek}}</text>
            <text style="padding-right:8rpx;color:orange;font-weight:700">{{item.courseSection}}</text>
            <text style="padding-right:8rpx;">{{item.credit + '分'}}</text>
            <text style="padding-right:8rpx;" qq:if="{{item.exam == '未安排'}}"></text>
            <text style="padding-right:8rpx;" qq:else>{{item.exam}}</text>
            <text>{{item.teacher}}</text>
          </view>
        </view>
        <text class="cdText" qq:if="{{item.courseRoom == '未排地点'}}">None</text>
        <text class="cdText" qq:else>{{item.courseRoom}}</text>
      </view>
  </view>

  <view class="classfunc-row" style="margin-left:30rpx"><view class="circle"></view>星期二</view>
  <view class="classList" qq:for="{{classData}}" qq:key="this">
      <view class="classItem" qq:if="{{item.courseWeekday == '2'}}" animation="{{myshow}}">
        <view class="classHead">
          <view class="className">{{item.courseTitleShort}}</view>
          <view class="classInfo">
            <text style="padding-right:8rpx;color:orange;font-weight:700">{{item.courseWeek}}</text>
            <text style="padding-right:8rpx;color:orange;font-weight:700">{{item.courseSection}}</text>
            <text style="padding-right:8rpx;">{{item.credit + '分'}}</text>
            <text style="padding-right:8rpx;" qq:if="{{item.exam == '未安排'}}"></text>
            <text style="padding-right:8rpx;" qq:else>{{item.exam}}</text>
            <text>{{item.teacher}}</text>
          </view>
        </view>
        <text class="cdText" qq:if="{{item.courseRoom == '未排地点'}}">None</text>
        <text class="cdText" qq:else>{{item.courseRoom}}</text>
      </view>
  </view>

  <view class="classfunc-row" style="margin-left:30rpx"><view class="circle"></view>星期三</view>
  <view class="classList" qq:for="{{classData}}" qq:key="this">
      <view class="classItem" qq:if="{{item.courseWeekday == '3'}}" animation="{{myshow}}">
        <view class="classHead">
          <view class="className">{{item.courseTitleShort}}</view>
          <view class="classInfo">
            <text style="padding-right:8rpx;color:orange;font-weight:700">{{item.courseWeek}}</text>
            <text style="padding-right:8rpx;color:orange;font-weight:700">{{item.courseSection}}</text>
            <text style="padding-right:8rpx;">{{item.credit + '分'}}</text>
            <text style="padding-right:8rpx;" qq:if="{{item.exam == '未安排'}}"></text>
            <text style="padding-right:8rpx;" qq:else>{{item.exam}}</text>
            <text>{{item.teacher}}</text>
          </view>
        </view>
        <text class="cdText" qq:if="{{item.courseRoom == '未排地点'}}">None</text>
        <text class="cdText" qq:else>{{item.courseRoom}}</text>
      </view>
  </view>

  <view class="classfunc-row" style="margin-left:30rpx"><view class="circle"></view>星期四</view>
  <view class="classList" qq:for="{{classData}}" qq:key="this">
      <view class="classItem" qq:if="{{item.courseWeekday == '4'}}" animation="{{myshow}}">
        <view class="classHead">
          <view class="className">{{item.courseTitleShort}}</view>
          <view class="classInfo">
            <text style="padding-right:8rpx;color:orange;font-weight:700">{{item.courseWeek}}</text>
            <text style="padding-right:8rpx;color:orange;font-weight:700">{{item.courseSection}}</text>
            <text style="padding-right:8rpx;">{{item.credit + '分'}}</text>
            <text style="padding-right:8rpx;" qq:if="{{item.exam == '未安排'}}"></text>
            <text style="padding-right:8rpx;" qq:else>{{item.exam}}</text>
            <text>{{item.teacher}}</text>
          </view>
        </view>
        <text class="cdText" qq:if="{{item.courseRoom == '未排地点'}}">None</text>
        <text class="cdText" qq:else>{{item.courseRoom}}</text>
      </view>
  </view>

  <view class="classfunc-row" style="margin-left:30rpx"><view class="circle"></view>星期五</view>
  <view class="classList" qq:for="{{classData}}" qq:key="this">
      <view class="classItem" qq:if="{{item.courseWeekday == '5'}}" animation="{{myshow}}">
        <view class="classHead">
          <view class="className">{{item.courseTitleShort}}</view>
          <view class="classInfo">
            <text style="padding-right:8rpx;color:orange;font-weight:700">{{item.courseWeek}}</text>
            <text style="padding-right:8rpx;color:orange;font-weight:700">{{item.courseSection}}</text>
            <text style="padding-right:8rpx;">{{item.credit + '分'}}</text>
            <text style="padding-right:8rpx;" qq:if="{{item.exam == '未安排'}}"></text>
            <text style="padding-right:8rpx;" qq:else>{{item.exam}}</text>
            <text>{{item.teacher}}</text>
          </view>
        </view>
        <text class="cdText" qq:if="{{item.courseRoom == '未排地点'}}">None</text>
        <text class="cdText" qq:else>{{item.courseRoom}}</text>
      </view>
  </view>
  </view>

  <view class="classList" qq:for="{{classData}}" qq:key="this">
    <view qq:if="{{item.courseWeekday == '1'&&mon_c == 'green'}}">
    <view qq:if="{{weeksMode == 1 && item.inNowWeek == 1}}">
    <view class="classfunc-row"><view class="circle"></view>{{item.courseTime}}</view>
      <view class="classItem" animation="{{myshow}}">
        <view class="classHead">
          <view class="className">{{item.courseTitleShort}}</view>
          <view class="classInfo">
            <text style="padding-right:8rpx;">{{item.courseWeek}}</text>
            <text style="padding-right:8rpx;">{{item.courseSection}}</text>
            <text style="padding-right:8rpx;color:orange;font-weight:700">{{item.credit + '分'}}</text>
            <text style="padding-right:8rpx;color:orange;font-weight:700" qq:if="{{item.exam == '未安排'}}"></text>
            <text style="padding-right:8rpx;color:orange;font-weight:700" qq:else>{{item.exam}}</text>
            <text>{{item.teacher}}</text>
          </view>
        </view>
        <text class="cdText" qq:if="{{item.courseRoom == '未排地点'}}">None</text>
        <text class="cdText" qq:else>{{item.courseRoom}}</text>
      </view>
    </view>
    <view qq:if="{{weeksMode == 0}}">
    <view class="classfunc-row"><view class="circle"></view>{{item.courseTime}}</view>
      <view class="classItem" animation="{{myshow}}">
        <view class="classHead">
          <view class="className">{{item.courseTitleShort}}</view>
          <view class="classInfo">
            <text style="padding-right:8rpx;">{{item.courseWeek}}</text>
            <text style="padding-right:8rpx;">{{item.courseSection}}</text>
            <text style="padding-right:8rpx;color:orange;font-weight:700">{{item.credit + '分'}}</text>
            <text style="padding-right:8rpx;color:orange;font-weight:700" qq:if="{{item.exam == '未安排'}}"></text>
            <text style="padding-right:8rpx;color:orange;font-weight:700" qq:else>{{item.exam}}</text>
            <text>{{item.teacher}}</text>
          </view>
        </view>
        <text class="cdText" qq:if="{{item.courseRoom == '未排地点'}}">None</text>
        <text class="cdText" qq:else>{{item.courseRoom}}</text>
      </view>
    </view>
    </view>

    <view qq:if="{{item.courseWeekday == '2'&&tue_c == 'green'}}">
      <view qq:if="{{weeksMode == 1 && item.inNowWeek == 1}}">
      <view class="classfunc-row"><view class="circle"></view>{{item.courseTime}}</view>
      <view class="classItem" animation="{{myshow}}">
        <view class="classHead">
          <view class="className">{{item.courseTitleShort}}</view>
          <view class="classInfo">
            <text style="padding-right:8rpx;">{{item.courseWeek}}</text>
            <text style="padding-right:8rpx;">{{item.courseSection}}</text>
            <text style="padding-right:8rpx;color:orange;font-weight:700">{{item.credit + '分'}}</text>
            <text style="padding-right:8rpx;color:orange;font-weight:700" qq:if="{{item.exam == '未安排'}}"></text>
            <text style="padding-right:8rpx;color:orange;font-weight:700" qq:else>{{item.exam}}</text>
            <text>{{item.teacher}}</text>
          </view>
        </view>
        <text class="cdText" qq:if="{{item.courseRoom == '未排地点'}}">None</text>
        <text class="cdText" qq:else>{{item.courseRoom}}</text>
      </view>
    </view>
    <view qq:if="{{weeksMode == 0}}">
    <view class="classfunc-row"><view class="circle"></view>{{item.courseTime}}</view>
      <view class="classItem" animation="{{myshow}}">
        <view class="classHead">
          <view class="className">{{item.courseTitleShort}}</view>
          <view class="classInfo">
            <text style="padding-right:8rpx;">{{item.courseWeek}}</text>
            <text style="padding-right:8rpx;">{{item.courseSection}}</text>
            <text style="padding-right:8rpx;color:orange;font-weight:700">{{item.credit + '分'}}</text>
            <text style="padding-right:8rpx;color:orange;font-weight:700" qq:if="{{item.exam == '未安排'}}"></text>
            <text style="padding-right:8rpx;color:orange;font-weight:700" qq:else>{{item.exam}}</text>
            <text>{{item.teacher}}</text>
          </view>
        </view>
        <text class="cdText" qq:if="{{item.courseRoom == '未排地点'}}">None</text>
        <text class="cdText" qq:else>{{item.courseRoom}}</text>
      </view>
    </view>
    </view>

    <view qq:if="{{item.courseWeekday == '3'&&wed_c == 'green'}}">
      <view qq:if="{{weeksMode == 1 && item.inNowWeek == 1}}">
      <view class="classfunc-row"><view class="circle"></view>{{item.courseTime}}</view>
      <view class="classItem" animation="{{myshow}}">
        <view class="classHead">
          <view class="className">{{item.courseTitleShort}}</view>
          <view class="classInfo">
            <text style="padding-right:8rpx;">{{item.courseWeek}}</text>
            <text style="padding-right:8rpx;">{{item.courseSection}}</text>
            <text style="padding-right:8rpx;color:orange;font-weight:700">{{item.credit + '分'}}</text>
            <text style="padding-right:8rpx;color:orange;font-weight:700" qq:if="{{item.exam == '未安排'}}"></text>
            <text style="padding-right:8rpx;color:orange;font-weight:700" qq:else>{{item.exam}}</text>
            <text>{{item.teacher}}</text>
          </view>
        </view>
        <text class="cdText" qq:if="{{item.courseRoom == '未排地点'}}">None</text>
        <text class="cdText" qq:else>{{item.courseRoom}}</text>
      </view>
    </view>
    <view qq:if="{{weeksMode == 0}}">
    <view class="classfunc-row"><view class="circle"></view>{{item.courseTime}}</view>
      <view class="classItem" animation="{{myshow}}">
        <view class="classHead">
          <view class="className">{{item.courseTitleShort}}</view>
          <view class="classInfo">
            <text style="padding-right:8rpx;">{{item.courseWeek}}</text>
            <text style="padding-right:8rpx;">{{item.courseSection}}</text>
            <text style="padding-right:8rpx;color:orange;font-weight:700">{{item.credit + '分'}}</text>
            <text style="padding-right:8rpx;color:orange;font-weight:700" qq:if="{{item.exam == '未安排'}}"></text>
            <text style="padding-right:8rpx;color:orange;font-weight:700" qq:else>{{item.exam}}</text>
            <text>{{item.teacher}}</text>
          </view>
        </view>
        <text class="cdText" qq:if="{{item.courseRoom == '未排地点'}}">None</text>
        <text class="cdText" qq:else>{{item.courseRoom}}</text>
      </view>
    </view>
    </view>

    <view qq:if="{{item.courseWeekday == '4'&&thr_c == 'green'}}">
      <view qq:if="{{weeksMode == 1 && item.inNowWeek == 1}}">
      <view class="classfunc-row"><view class="circle"></view>{{item.courseTime}}</view>
      <view class="classItem" animation="{{myshow}}">
        <view class="classHead">
          <view class="className">{{item.courseTitleShort}}</view>
          <view class="classInfo">
            <text style="padding-right:8rpx;">{{item.courseWeek}}</text>
            <text style="padding-right:8rpx;">{{item.courseSection}}</text>
            <text style="padding-right:8rpx;color:orange;font-weight:700">{{item.credit + '分'}}</text>
            <text style="padding-right:8rpx;color:orange;font-weight:700" qq:if="{{item.exam == '未安排'}}"></text>
            <text style="padding-right:8rpx;color:orange;font-weight:700" qq:else>{{item.exam}}</text>
            <text>{{item.teacher}}</text>
          </view>
        </view>
        <text class="cdText" qq:if="{{item.courseRoom == '未排地点'}}">None</text>
        <text class="cdText" qq:else>{{item.courseRoom}}</text>
      </view>
    </view>
    <view qq:if="{{weeksMode == 0}}">
    <view class="classfunc-row"><view class="circle"></view>{{item.courseTime}}</view>
      <view class="classItem" animation="{{myshow}}">
        <view class="classHead">
          <view class="className">{{item.courseTitleShort}}</view>
          <view class="classInfo">
            <text style="padding-right:8rpx;">{{item.courseWeek}}</text>
            <text style="padding-right:8rpx;">{{item.courseSection}}</text>
            <text style="padding-right:8rpx;color:orange;font-weight:700">{{item.credit + '分'}}</text>
            <text style="padding-right:8rpx;color:orange;font-weight:700" qq:if="{{item.exam == '未安排'}}"></text>
            <text style="padding-right:8rpx;color:orange;font-weight:700" qq:else>{{item.exam}}</text>
            <text>{{item.teacher}}</text>
          </view>
        </view>
        <text class="cdText" qq:if="{{item.courseRoom == '未排地点'}}">None</text>
        <text class="cdText" qq:else>{{item.courseRoom}}</text>
      </view>
    </view>
    </view>

    <view qq:if="{{item.courseWeekday == '5'&&fri_c == 'green'}}">
      <view qq:if="{{weeksMode == 1 && item.inNowWeek == 1}}">
      <view class="classfunc-row"><view class="circle"></view>{{item.courseTime}}</view>
      <view class="classItem" animation="{{myshow}}">
        <view class="classHead">
          <view class="className">{{item.courseTitleShort}}</view>
          <view class="classInfo">
            <text style="padding-right:8rpx;">{{item.courseWeek}}</text>
            <text style="padding-right:8rpx;">{{item.courseSection}}</text>
            <text style="padding-right:8rpx;color:orange;font-weight:700">{{item.credit + '分'}}</text>
            <text style="padding-right:8rpx;color:orange;font-weight:700" qq:if="{{item.exam == '未安排'}}"></text>
            <text style="padding-right:8rpx;color:orange;font-weight:700" qq:else>{{item.exam}}</text>
            <text>{{item.teacher}}</text>
          </view>
        </view>
        <text class="cdText" qq:if="{{item.courseRoom == '未排地点'}}">None</text>
        <text class="cdText" qq:else>{{item.courseRoom}}</text>
      </view>
    </view>
    <view qq:if="{{weeksMode == 0}}">
    <view class="classfunc-row"><view class="circle"></view>{{item.courseTime}}</view>
      <view class="classItem" animation="{{myshow}}">
        <view class="classHead">
          <view class="className">{{item.courseTitleShort}}</view>
          <view class="classInfo">
            <text style="padding-right:8rpx;">{{item.courseWeek}}</text>
            <text style="padding-right:8rpx;">{{item.courseSection}}</text>
            <text style="padding-right:8rpx;color:orange;font-weight:700">{{item.credit + '分'}}</text>
            <text style="padding-right:8rpx;color:orange;font-weight:700" qq:if="{{item.exam == '未安排'}}"></text>
            <text style="padding-right:8rpx;color:orange;font-weight:700" qq:else>{{item.exam}}</text>
            <text>{{item.teacher}}</text>
          </view>
        </view>
        <text class="cdText" qq:if="{{item.courseRoom == '未排地点'}}">None</text>
        <text class="cdText" qq:else>{{item.courseRoom}}</text>
      </view>
    </view>
    </view>

  </view>
  <block>
<view class="footer-text" style="margin-top:30rpx;margin-bottom:30rpx">
  <text>西院助手 V1.2</text>
  <text>AlgoriMind-信息技术学院实验室</text>
  <text>2018-2020</text>
</view>
  </block>
</scroll-view>