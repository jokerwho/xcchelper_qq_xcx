<dropdownmenu dropDownMenuTitle='{{chooseTitle}}' dropDownMenuSourceData='{{chooseData}}' bind:selectedItem='selectedItem' />
<view class="content" animation="{{gradeshow}}">
  <view class="tableView">
    <view class="table_header">
      <view class="th th1">课程名</view>
      <view class="th th2">分数</view>
      <view class="th th3">任课老师</view>
    </view>
    <loading hidden="{{hidden}}">
      获取数据中...
    </loading>
    <block qq:for="{{ classInfo }}" qq:key="this">
      <view class="table_cell">
        <view class="td td1" qq:if="{{item.courseNature == '通识教育'}}" style="color:blue;">{{item.courseTitle}}</view>
        <view class="td td1" qq:elif="{{item.courseNature == '专业教育'}}" style="color:red;">{{item.courseTitle}}</view>
        <view class="td td1" qq:elif="{{item.courseNature == '拓展教育'}}" style="color:green;">{{item.courseTitle}}</view>
        <view class="td td1" qq:else style="color:black;">{{item.courseTitle}}</view>
        <view class="td td2" qq:if="{{item.gradePoint == 0.00}}" style="color:red;font-weight:900">{{item.grade}}</view>
        <view class="td td2" style="font-weight:700" qq:else>{{item.grade}}</view>
        <view class="td td3" qq:if="{{item.teacher == '无'}}">{{item.gradeNature}}</view>
        <view class="td td3" qq:else>{{item.teacher}}</view>
      </view>
    </block>
  </view>
</view>
<view class="content-ver">
  <text style="color:blue">■</text> 通识教育
  <text style="color:red">■</text> 专业教育
  <text style="color:green">■</text> 拓展教育
  <text style="color:black">■</text> 其它
</view>
<view class="footer-text" style="margin-top:30rpx;margin-bottom:30rpx">
  <text>西院助手 V1.1</text>
  <text>AlgoriMind-信息技术学院实验室</text>
  <text>2018-2020</text>
</view>