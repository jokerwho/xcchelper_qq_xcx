<scroll-view scroll-y>
<block>
    <view class="homecard homefunc" style="margin-top:16rpx;height:370rpx" animation="{{nav_show}}">
      <navigator hover-class="none" url="/pages/grade/grade">
        <image src="/images/homefunc/grade.png" class="homefunc-icon"></image>
        <text class="homefunc-text">成绩</text>
      </navigator>
      <navigator hover-class="none" url="/pages/schedule/schedule">
        <image src="/images/homefunc/class.png" class="homefunc-icon"></image>
        <text class="homefunc-text">课表</text>
      </navigator>
      <navigator hover-class="none" url="/pages/luqu/luqu">
        <image src="/images/homefunc/luqu.png" class="homefunc-icon"></image>
        <text class="homefunc-text">录取查询</text>
      </navigator>
      <navigator hover-class="none" url="/pages/xuanke/xuanke">
        <image src="/images/homefunc/take.png" class="homefunc-icon"></image>
        <text class="homefunc-text">选课</text>
      </navigator>
      <navigator hover-class="none" url="/pages/xiudu/xiudu">
        <image src="/images/homefunc/fx.png" class="homefunc-icon"></image>
        <text class="homefunc-text">修读详情</text>
      </navigator>
      <navigator hover-class="none" url="/pages/nav/nav">
        <image src="/images/homefunc/map.png" class="homefunc-icon"></image>
        <text class="homefunc-text">导航</text>
      </navigator>
    </view>
</block>

<block>
    <view class="btnLabelX">
      <view class="btnItem" animation="{{btn1}}" style="color:rgb(26,173,25)" bindtap="todayClass">今日课程</view>
      <view class="btnItem" animation="{{btn2}}" style="color:rgb(26,173,25)" bindtap="tomoClass">明日课程</view>
      <view class="btnItem" animation="{{btn3}}" style="color:cornflowerblue" bindtap="developing">快速评教</view>
      <view class="btnItem" animation="{{btn4}}" style="color:cornflowerblue" bindtap="courseMsg">课程通知</view>
    </view>
</block>

<block>
    <view class="homecard one" style="height:270rpx" animation="{{one_show}}">
      <view>{{onemonth}} {{dayornight}} {{oneday}}</view>
      <view style="font-size:25rpx;padding:20rpx 30rpx 30rpx 30rpx">{{onecontent}}</view>
    </view>
</block>
<block>
    <view class="homecard" style="height:410rpx" animation="{{cal_show}}">
      <view class="classfunc">
        <image src="/images/homefunc/dot.png" class="classfunc-head-icon"></image>
        <text class="classfunc-head-text">倒计时</text>
        <image src="/images/homefunc/menu.png" class="classfunc-head-icon" style="padding-left:470rpx;padding-right:10rpx" bindtap="onMenu"></image>
        <view class="menu" hidden="{{menuHidden}}">
          <view class="menuItem" style="margin-top: 10rpx;color:{{daysMode == 1 ? 'green':''}}" bindtap="clickCet">四六级</view>
          <view class="menuItem" style="color:{{daysMode == 2 ? 'green':''}}" bindtap="clickKy">考研</view>
          <view class="menuItem" style="color:{{daysMode == 3 ? 'green':''}}" bindtap="clickQm">期末</view>
          <view class="menuItem" style="color:{{daysMode == 4 ? 'green':''}}" bindtap="clickJsj">二级</view>
          <view class="menuItem" style="color:{{daysMode == 5 ? 'green':''}}" bindtap="clickJz">教资</view>
          <view class="menuItem" bindtap="back">取消</view>
        </view>
      </view>
      <view class="classfunc-col divLine"></view>
      <view class="classfunc-col">

        <view qq:if="{{mainLoaded == 1}}">
          <view class="classfunc-large-text">离{{day}}还有</view>
          <view class="classfunc-digit-text" style="padding:0rpx 0rpx 0rpx 0rpx">{{days}}</view>
          <view style="display:flex;justify-content: center;align-items:center;font-size:34rpx;padding-top:10rpx">天</view>

        </view>
        <view qq:if="{{mainLoaded == 0}}">
          <view class="classfunc-large-text">离XXX还有</view>
          <view class="classfunc-digit-text" style="padding:0rpx 0rpx 0rpx 0rpx">000</view>
          <view style="display:flex;justify-content: center;align-items:center;font-size:34rpx;padding-top:10rpx">天</view>
        </view>
      </view>
    </view>
</block>
<block>
    <view class="homecard" style="height:548rpx" animation="{{class_show}}">
      <view class="classfunc">
        <image src="/images/homefunc/dot.png" class="classfunc-head-icon"></image>
        <text class="classfunc-head-text">课程修读总情</text>
        <loading hidden="{{hidden}}">
          刷新中...
        </loading>
        <image src="/images/homefunc/info.png" class="classfunc-head-icon" style="padding-left:380rpx;padding-right:10rpx" bindtap="calmsg"></image>
      </view>
      <view class="classfunc-col">
        <view class="divLine"></view>
        <view class="classfunc-large-text">当前平均学分绩点(GPA)</view>
        <view class="classfunc-digit-text" qq:if="{{mainLoaded == 1}}">{{studyInfo.gpa}}</view>
        <view class="classfunc-digit-text" qq:else="{{mainLoaded == 0}}">0.00</view>
        <view class="divLine-s"></view>
      </view>
      <view class="classfun-col" style="text-align: center;">
        <view class="classfunc-normal-text">计划内总课程
          <text style="font-weight:bold" qq:if="{{mainLoaded == 1}}">{{studyInfo.ipa}}</text>
          <text style="font-weight:bold" qq:else="{{mainLoaded == 0}}">000</text> 门</view>
        <view class="classfunc-normal-text">通过
          <text style="font-weight:bold;color:green" qq:if="{{mainLoaded == 1}}">{{studyInfo.ipp}}</text>
          <text style="font-weight:bold;color:green" qq:else="{{mainLoaded == 0}}">00</text> 门 未通过
          <text style="font-weight:bold;color:red" qq:if="{{mainLoaded == 1}}">{{studyInfo.ipf}}</text>
          <text style="font-weight:bold;color:red" qq:else="{{mainLoaded == 0}}">00</text> 门</view>
        <view class="classfunc-normal-text">未修
          <text style="font-weight:bold;color:gray" qq:if="{{mainLoaded == 1}}">{{studyInfo.ipn}}</text>
          <text style="font-weight:bold;color:gray" qq:else="{{mainLoaded == 0}}">00</text> 门 在读
          <text style="font-weight:bold;color:blue" qq:if="{{mainLoaded == 1}}">{{studyInfo.ipi}}</text>
          <text style="font-weight:bold;color:blue" qq:else="{{mainLoaded == 0}}">00</text> 门</view>
      </view>
    </view>
</block>
<block>
    <view class="homecard" animation="{{info_show}}" style="margin-bottom:30rpx">
      <view class="classfunc">
        <image src="/images/homefunc/dot.png" class="classfunc-head-icon"></image>
        <text class="classfunc-head-text">个人名片</text>
      </view>
      <view class="classfunc-col divLine"></view>
      <view class="classfunc">
        <view class="classfunc-col" style="padding-left:24rpx">
          <view class="classfunc-normal-text">姓名：
            <text>{{mainInfo.name}}</text>
          </view>
          <view class="classfunc-normal-text">籍贯：
            <text>{{mainInfo.domicile}}</text>
          </view>
          <view class="classfunc-normal-text">学号：
            <text>{{mainInfo.studentId}}</text>
          </view>
          <view class="classfunc-normal-text">所在院系：
            <text>{{mainInfo.collegeName}}</text>
          </view>
          <view class="classfunc-normal-text">当前专业：
            <text>{{mainInfo.majorName}}</text>
          </view>
          <view class="classfunc-normal-text">所在班级：
            <text>{{mainInfo.className}}</text>
          </view>
          <view class="classfunc-normal-text">电子邮箱：
            <text>{{mainInfo.email}}</text>
          </view>
          <!--view class="classfunc-normal-text">手机：<text>{{mainInfo.phoneNumber}}</text></view-->
          <view class="classfunc-normal-text" style="margin-bottom:30rpx">政治面貌：
            <text>{{mainInfo.politicalStatus}}</text>
          </view>
        </view>
        <view class="classfunc-avatar">
          <open-data type="userAvatarUrl"></open-data>
        </view>
        
      </view>
    </view>
</block>
</scroll-view>