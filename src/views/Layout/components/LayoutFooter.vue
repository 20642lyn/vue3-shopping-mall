<template>
    <footer class="app_footer">
      <!-- 联系我们 -->
      <div class="contact">
        <div class="container">
          <dl>
            <dt><img src="@/assets/images/duo.png" alt="">品类齐全，轻松购物</dt>
            <dd>
            <h4>购物指南</h4>
            <p>购物流程</p>
            <p>会员介绍</p>
            <p>生活旅行</p>
            <p>常见问题</p>
            <p>大家电话</p>
            <p>联系客服</p>
            </dd>
            <dd>
            <h4>配送方式</h4>
            <p>上门自提</p>
            <p>211限时达</p>
            <p>配送服务查询</p>
            <p>配送费收取标准</p>
            </dd>
          </dl>
          <dl>
            <dt><img src="@/assets/images/kuai.png" alt="">多仓直发，极速配送</dt>
            <dd>
              <h4>支付方式</h4>
            <p>货到付款</p>
            <p>在线支付</p>
            <p>分期付款</p>
            <p>公司转账</p>
            </dd>
            <dd>
              <h4>售后服务</h4>
            <p>售后政策</p>
            <p>价格保护</p>
            <p>退款说明</p>
            <p>返修/退换货</p>
            <p>取消订单</p>
            </dd>
          </dl>
          
          <dl>
            <dt><img src="@/assets/images/shen.png " alt="">天天低价，限时秒杀</dt>
            <dd>
              <h4>限时秒杀</h4>
            <p>准时准点</p>
            <p>货量有限</p>
            <p>限时低价</p>
            <p>手快则有</p>
            <p>手慢则无</p>
            </dd>
            <dd>
              <h4>特色服务</h4>
            <p>夺宝岛</p>
            <p>DIY装机</p>
            <p>延保服务</p>
            <p>京东E卡</p>
            <p>京东通信</p>
            <p>京鱼座智能</p>
            </dd>
            <!-- <dd class="hotline">限时秒杀入口 <small>周六至周日 20:00-23:00</small></dd> -->
          </dl>
          <dl>
            <dt><img src="@/assets/images/hao.png" alt="">随时随地，APP下单</dt>
            <dd class="qrcode"><img src="@/assets/images/qrcode.jpg" /></dd>
            <dd class="download">
              <span>扫描二维码</span>
              <span>立马下载APP</span>
              <a href="javascript:;">下载页面</a>
            </dd>
          </dl>
        </div>
      </div>
      <!-- 其它 -->
      <div class="extra">
        <div class="container">
          <div class="slogan">
            <a href="javascript:;">
              <i class="iconfont icon-footer01"></i>
              <span>价格亲民</span>
            </a>
            <a href="javascript:;">
              <i class="iconfont icon-footer02"></i>
              <span>物流快捷</span>
            </a>
            <a href="javascript:;">
              <i class="iconfont icon-footer03"></i>
              <span>品质新鲜</span>
            </a>
          </div>
          <!-- 版权信息 -->
          <div class="copyright">
            <p>
              <a href="javascript:;">关于我们</a>
              <a href="javascript:;"> 联系我们 </a>
              <a href="javascript:;"> 联系客服</a>
              <a href="javascript:;">合作招商</a>
              <a href="javascript:;">商家帮助</a>
              <a href="javascript:;"> 营销中心</a>
              <a href="javascript:;">手机达邻</a>
              <a href="javascript:;"> 友情链接</a>
              <a href="javascript:;">销售联盟 </a>
              <a href="javascript:;"> 风险监测</a>
              <a href="javascript:;">质量公告</a>
              <a href="javascript:;">隐私政策</a>
            </p>
            <p> © 达邻</p>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <style scoped lang='scss'>
  .app_footer {
    overflow: hidden;
    background-color: #f5f5f5;
    padding-top: 10px;
  
    .contact {
      background: #f3f3f3;
  
      .container {
        padding: 30px 0 40px 25px;
        display: flex;
      }
  
      dl {
        height: 280px;
        text-align: center;
        padding: 0 60px;
        color: #131212;
  
        &:first-child {
          padding-left: 0;
        }
  
        &:last-child {
          border-right: none;
          padding-right: 0;
        }
      }
  
      dt {
        line-height: 1;
        font-size: 18px;
      }
  
      dd {
        margin: 36px 12px 0 0;
        float: left;
        width: 92px;
        height: 92px;
        padding-top: 10px;
        a:hover{
          color:#232121
        }
        p{
          margin-top: 8px;
        }
  
        &:last-child {
          margin-right: 0;
        }
      }
  
      .qrcode {
        width: 92px;
        height: 92px;
        padding: 7px;
        border: 1px solid #ededed;
      }
  
      .download {
        padding-top: 5px;
        font-size: 14px;
        width: auto;
        height: auto;
        border: none;
  
        span {
          display: block;
        }
  
        a {
          display: block;
          line-height: 1;
          padding: 10px 25px;
          margin-top: 5px;
          color: #fff;
          border-radius: 2px;
          background-color: $xtxColor;
        }
      }
  
      .hotline {
        padding-top: 20px;
        font-size: 22px;
        color: #232121;
        width: auto;
        height: auto;
        border: none;
  
        small {
          display: block;
          font-size: 15px;
          color: #999;
        }
      }
    }
  
    .extra {
      background-color: #333;
    }
  
    .slogan {
      height: 178px;
      line-height: 58px;
      padding: 60px 100px;
      border-bottom: 1px solid #434343;
      display: flex;
      justify-content: space-between;
  
      a {
        height: 58px;
        line-height: 58px;
        color: #fff;
        font-size: 28px;
  
        i {
          font-size: 50px;
          vertical-align: middle;
          margin-right: 10px;
          font-weight: 100;
        }
  
        span {
          vertical-align: middle;
          text-shadow: 0 0 1px #333;
        }
      }
    }
  
    .copyright {
      height: 170px;
      padding-top: 40px;
      text-align: center;
      color: #999;
      font-size: 15px;
  
      p {
        line-height: 1;
        margin-bottom: 20px;
      }
  
      a {
        color: #999;
        line-height: 1;
        padding: 0 10px;
        border-right: 1px solid #999;
  
        &:last-child {
          border-right: none;
        }
      }
    }
  }
  </style>