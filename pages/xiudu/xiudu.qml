<!--miniprogram/pages/xiudu/xiudu.qml-->

<view class="weeks">
  <view class="weekday {{ts_c == 'green' ? 'on':''}}" bindtap="clickTs" style="color:{{ts_c}}">通识教育</view>
  <view class="weekday {{zy_c == 'green' ? 'on':''}}" bindtap="clickZy" style="color:{{zy_c}}">专业教育</view>
  <view class="weekday {{tz_c == 'green' ? 'on':''}}" bindtap="clickTz" style="color:{{tz_c}}">拓展教育</view>
  <view class="weekday {{oth_c == 'green' ? 'on':''}}" bindtap="clickOth" style="color:{{oth_c}}">其它课程</view>
</view>

<view qq:if="{{ts_c == 'green'}}" class="headText">
    <text style="font-size:24rpx">通识要求<text style="color:blue">{{studyInfo.tsData.tsPoint.tsr}}</text>学分，得到<text style="color:green">{{studyInfo.tsData.tsPoint.tsg}}</text>学分，未得到<text style="color:red">{{studyInfo.tsData.tsPoint.tsn}}</text>学分</text>
</view>
<view qq:if="{{zy_c == 'green'}}" class="headText">
    <text style="font-size:24rpx">专业要求<text style="color:blue">{{studyInfo.zydata.zyPoint.zyr}}</text>学分，得到<text style="color:green">{{studyInfo.zydata.zyPoint.zyg}}</text>学分，未得到<text style="color:red">{{studyInfo.zydata.zyPoint.zyn}}</text>学分</text>
</view>
<view qq:if="{{tz_c == 'green'}}" class="headText">
    <text style="font-size:24rpx">拓展要求<text style="color:blue">{{studyInfo.tzdata.tzPoint.tzr}}</text>学分，得到<text style="color:green">{{studyInfo.tzdata.tzPoint.tzg}}</text>学分，未得到<text style="color:red">{{studyInfo.tzdata.tzPoint.tzn}}</text>学分</text>
</view>

<view class="content">
  <view class="tableView">
    <view class="table_header">
      <view class="th th1"></view>
      <view class="th th2">课程</view>
      <view class="th th3">学分</view>
      <view class="th th4">分数</view>
      <view class="th th5">绩点</view>
      <view class="th th6">类别</view>
      <view class="th th7">修读学期</view>
    </view>
    <loading hidden="{{hidden}}">
      获取数据中...
    </loading>

    <view qq:if="{{ts_c == 'green'}}" qq:for="{{studyInfo.tsData.tsItems}}" qq:key="this">
      <view class="table_cell">
        <view class="td td1">
          <view qq:if="{{item.courseSituation == '4'}}">
            <image src="/images/pass.png" class="classIcon"></image>
          </view>
          <view qq:elif="{{item.courseSituation == '3'}}">
            <image src="/images/not.png" class="classIcon"></image>
          </view>
          <view qq:elif="{{item.courseSituation == '2'}}">
            <image src="/images/fail.png" class="classIcon"></image>
          </view>
          <view qq:elif="{{item.courseSituation == '1'}}">
            <image src="/images/in.png" class="classIcon"></image>
          </view>
        </view>
        <view class="td td2">{{item.courseTitle}}</view>
        <view class="td td3">{{item.credit}}</view>
        <view class="td td4" style="font-weight:900">{{item.maxGrade}}</view>
        <view class="td td5" style="font-weight:900">{{item.gradePoint}}</view>
        <view class="td td6">{{item.courseCategory}}</view>
        <view class="td td7">{{item.courseTerm}}</view>
      </view>
      <view class="divLine-s"></view>
    </view>

    <view qq:if="{{zy_c == 'green'}}" qq:for="{{studyInfo.zydata.zyItems}}" qq:key="this">
      <view class="table_cell">
        <view class="td td1">
          <view qq:if="{{item.courseSituation == '4'}}">
            <image src="/images/pass.png" class="classIcon"></image>
          </view>
          <view qq:elif="{{item.courseSituation == '3'}}">
            <image src="/images/not.png" class="classIcon"></image>
          </view>
          <view qq:elif="{{item.courseSituation == '2'}}">
            <image src="/images/fail.png" class="classIcon"></image>
          </view>
          <view qq:elif="{{item.courseSituation == '1'}}">
            <image src="/images/in.png" class="classIcon"></image>
          </view>
        </view>
        <view class="td td2">{{item.courseTitle}}</view>
        <view class="td td3">{{item.credit}}</view>
        <view class="td td4" style="font-weight:900">{{item.maxGrade}}</view>
        <view class="td td5" style="font-weight:900">{{item.gradePoint}}</view>
        <view class="td td6">{{item.courseCategory}}</view>
        <view class="td td7">{{item.courseTerm}}</view>
      </view>
      <view class="divLine-s"></view>
    </view>

    <view qq:if="{{tz_c == 'green'}}" qq:for="{{studyInfo.tzdata.tzItems}}" qq:key="this">
      <view class="table_cell">
        <view class="td td1">
          <view qq:if="{{item.courseSituation == '4'}}">
            <image src="/images/pass.png" class="classIcon"></image>
          </view>
          <view qq:elif="{{item.courseSituation == '3'}}">
            <image src="/images/not.png" class="classIcon"></image>
          </view>
          <view qq:elif="{{item.courseSituation == '2'}}">
            <image src="/images/fail.png" class="classIcon"></image>
          </view>
          <view qq:elif="{{item.courseSituation == '1'}}">
            <image src="/images/in.png" class="classIcon"></image>
          </view>
        </view>
        <view class="td td2">{{item.courseTitle}}</view>
        <view class="td td3">{{item.credit}}</view>
        <view class="td td4" style="font-weight:900">{{item.maxGrade}}</view>
        <view class="td td5" style="font-weight:900">{{item.gradePoint}}</view>
        <view class="td td6">{{item.courseCategory}}</view>
        <view class="td td7">{{item.courseTerm}}</view>
      </view>
      <view class="divLine-s"></view>
    </view>

    <view qq:if="{{oth_c == 'green'}}" qq:for="{{studyInfo.qtdata.qtItems}}" qq:key="this">
      <view class="table_cell">
        <view class="td td1">
          <view qq:if="{{item.courseSituation == '4'}}">
            <image src="/images/pass.png" class="classIcon"></image>
          </view>
          <view qq:elif="{{item.courseSituation == '3'}}">
            <image src="/images/not.png" class="classIcon"></image>
          </view>
          <view qq:elif="{{item.courseSituation == '2'}}">
            <image src="/images/fail.png" class="classIcon"></image>
          </view>
          <view qq:elif="{{item.courseSituation == '1'}}">
            <image src="/images/in.png" class="classIcon"></image>
          </view>
        </view>
        <view class="td td2">{{item.courseTitle}}</view>
        <view class="td td3">{{item.credit}}</view>
        <view class="td td4" style="font-weight:900">{{item.maxGrade}}</view>
        <view class="td td5" style="font-weight:900">{{item.gradePoint}}</view>
        <view class="td td6">{{item.courseCategory}}</view>
        <view class="td td7">{{item.courseTerm}}</view>
      </view>
      <view class="divLine-s"></view>
    </view>

  </view>
</view>
<view class="content-ver">
  <view class="foot"><image src="/images/pass.png" class="classIcon"></image>已过</view>
  <view class="foot"><image src="/images/not.png" class="classIcon"></image>未修</view>
  <view class="foot"><image src="/images/fail.png" class="classIcon"></image>未过</view>
  <view class="foot"><image src="/images/in.png" class="classIcon"></image>在读</view>
</view>
<view class="footer-text" style="margin-top:30rpx;margin-bottom:30rpx">
  <text>西院助手 V1.1</text>
  <text>AlgoriMind-信息技术学院实验室</text>
  <text>2018-2020</text>
</view>
