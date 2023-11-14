<script setup>
import {useUserStore}from '@/stores/userStore'
import {getLikeListAPI} from '@/apis/user'
import {ref,onMounted}from 'vue'
import {getCheckInfoAPI} from '@/apis/checkout'
import GoodsItem from '@/views/Home/components/GoodsItem.vue'
const likeList=ref([])
const userStore = useUserStore()

const getLikeList= async ()=>{
  const res=await getLikeListAPI({limit:4})
  likeList.value=res.result
}
onMounted(()=>getLikeList())
//控制弹框打开
const manageshowDialog=ref(false)
const showDialog=ref(false)
const addDialog=ref(false)
const deleteDialog=ref(false)
const checkInfo = ref({}) // 订单对象
const firstAddress =ref({})  // 地址对象
const curAddress =ref({})// 本地地址存储对象
const getCheckInfo=async()=>{
    const res =await getCheckInfoAPI()
    checkInfo.value=res.result
    curAddress.value=checkInfo.value.userAddresses
    //适配默认地址
    //从地址列表中筛选出来 isDefault ===0 那一项
    const item = checkInfo.value.userAddresses.find(item=>item.isDefault ===0)
    firstAddress.value=item
}
onMounted(()=>getCheckInfo())

//添加地址.准备表单对象
const addform =ref({
    receiver:'',
    concat:'',
    address:''
})
const cancelAdd=()=>{
  addDialog.value = false
}
const determineAdd=()=>{
  addDialog.value = false
  curAddress.value.push(addform.value)
  addform.value={}
}
// 如何更新数据到服务端

//切换地址
const activeAddress=ref({})
const switchAddress=(item)=>{
    activeAddress.value=item
}
const cancelShow=()=>{
  showDialog.value=false
}
const confirm=()=>{
  firstAddress.value=activeAddress.value
    showDialog.value=false
    activeAddress.value={}
}

// 删除地址
const cancelDelete=()=>{
  deleteDialog.value=false
}
const dswitchAddress=(item)=>{
    activeAddress.value=item
}
const deleteswitchAddress=()=>{
  const index =curAddress.value.findindex(item=>item.receiver==activeAddress.receiver)
  curAddress.value.splice(index,1)
  deleteDialog.value=false
  
}
</script>

<template>
  <div class="UserInfo">
  <div class="home-overview">
    <!-- 用户信息 -->
    <div class="user-meta">
      <div class="avatar">
        <img src="@/assets/images/12.jpg" />
      </div>
      <h4>{{ userStore.userInfo?.account }}</h4>
    </div>
    <div class="item">
      <a href="javascript:;">
        <span class="iconfont icon-hy"></span>
        <p><el-button size="large" @click="membershowDialog = true">会员中心</el-button></p>
      
      </a>
      <a href="javascript:;">
        <span class="iconfont icon-aq"></span>
        <p><el-button size="large" @click="secureshowDialog = true">安全设置</el-button></p>
        
      </a>
      <a href="javascript:;">
        <span class="iconfont icon-dw"></span>
        <p><el-button size="large" @click="manageshowDialog = true">地址管理</el-button></p>
      </a>
    </div>
  </div>
  <div class="like-container">
    <div class="home-panel">
      <div class="ht">
        <h4 class="ht1">用户名：{{userStore.userInfo?.account}} </h4>
        <h4 class="ht2">VIP等级：</h4>
        <h4 class="ht2">余额：</h4>
      </div>
      
      <div class="box-body">
          <div class="address">
               <h4>常用地址：</h4>
              <div class="none" v-if="!firstAddress">您还未保存有任何地址，请点击地址管理来添加。</div>
              <ul v-else>
                <li><span>收<i />货<i />人：</span>{{ firstAddress.receiver }}</li>
                <li><span>联系方式：</span>{{ firstAddress.contact }}</li>
                <li><span>收货地址：</span>{{ firstAddress.address }}</li>
              </ul>
          </div>
        </div>
    </div>

    <!-- 地址管理选择的弹框 -->

    <el-dialog v-model="manageshowDialog" title="地址管理选项" width="30%" center>
    <div>
    <span class="dialog-change">
      <el-button size="large" @click="showDialog = true">切换地址</el-button>
      <el-button size="large" @click="addDialog = true">添加地址</el-button>
      <el-button size="large" @click="deleteDialog= true">删除地址</el-button>
    </span>
    </div>
    </el-dialog>

    <!-- 切换地址的弹框 -->

      <el-dialog v-model="showDialog" title="切换收货地址" width="30%" center>
      <div class="addressWrapper">
    <div class="text item" :class="{active:activeAddress.id===item.id}" @click="switchAddress(item)" v-for="item in curAddress"  :key="item.id">
      <ul>
      <li><span>收<i />货<i />人：</span>{{ item.receiver }} </li>
      <li><span>联系方式：</span>{{ item.contact }}</li>
      <li><span>收货地址：</span>{{ item.fullLocation + item.address }}</li>
      </ul>
    </div>
    </div>
    <template #footer>
    <span class="dialog-footer">
      <el-button @click="cancelShow" >取消</el-button>
      <el-button type="primary" @click="confirm">确定</el-button>
    </span>
    </template>
    </el-dialog>

<!-- 添加地址的弹框 -->

      <el-dialog v-model="addDialog" title="添加收货地址" width="30%" center>
      <div class="addAddressWrapper">
      <div class="form">
            <el-form  :model="addform"  label-position="right" label-width="60px"
              status-icon>
              <el-form-item label="">
                收货人：<el-input v-model="addform.receiver"/>
              </el-form-item>
              <el-form-item  label="">
                联系方式：<el-input v-model="addform.contact"/>
              </el-form-item>
              <el-form-item  label="">
                收货地址：<el-input v-model="addform.address"/>
              </el-form-item>
              <div class="subBtn">
              <el-button size="large" @click="cancelAdd">取消</el-button>
              <el-button size="large" @click="determineAdd">确定</el-button>
              </div>
              
            </el-form>
      </div>
    </div>  
      
</el-dialog>
<!-- 删除地址数据 -->
<el-dialog v-model="deleteDialog" title="删除收货地址" width="30%" center>
  <div class="deleteaddressWrapper">
    <div class="text item" :class="{active:activeAddress.id===item.id}" @click="dswitchAddress(item)" v-for="item in curAddress"  :key="item.id">
      <ul>
      <li><span>收<i />货<i />人：</span>{{ item.receiver }} </li>
      <li><span>联系方式：</span>{{ item.contact }}</li>
      <li><span>收货地址：</span>{{ item.address }}</li>
      </ul>
    </div>
  </div>
  <template #footer>
    <span class="dialog-footer">
      <el-button @click="cancelDelete" >取消</el-button>
      <el-button type="primary" @click="deleteswitchAddress">删除</el-button>
    </span>
  </template>
</el-dialog>
    <!-- <div class="home-panel">
      <div class="header">
        <h4 data-v-bcb266e0="">猜你喜欢</h4>
      </div>
      <div class="goods-list">
        <GoodsItem v-for="good in likeList" :key="good.id" :goods="good" />
      </div> -->
    <!-- </div> -->
</div>
</div>
</template>

<style scoped lang="scss">
.UserInfo{
  background-color: #fdfcfc;
}
.home-overview {
  height: 130px;
  background: url(@/assets/images/center-bg.png) no-repeat center / cover;
  display: flex;

  .user-meta {
    flex: 1;
    display: flex;
    align-items: center;

    .avatar {
      width: 85px;
      height: 85px;
      border-radius: 50%;
      overflow: hidden;
      margin-left: 60px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    h4 {
      padding-left: 26px;
      font-size: 18px;
      font-weight: normal;
      color: white;
    }
  }

  .item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;

    &:first-child {
      border-right: 1px solid #f4f4f4;
    }

    a {
      color: white;
      font-size: 16px;
      text-align: center;

      .iconfont {
        font-size: 32px;
      }

      p {
        line-height: 32px;
      }
    }
  }
}

.like-container {
  border-radius: 4px;
}

.home-panel {
  height: 400px;
    .ht{
      width: 100%;
      height: px;
      margin-top:10px;
      margin-left: 10px;
     
    }
    h4{
      font-size: 20px;
      font-weight: 400;
      margin-top:20px
    }

  

  .goods-list {
    display: flex;
    justify-content: space-around;
  }
  .box-body{
    margin-top: 20px;
    margin-left: 10px;
    .address ul{
      margin-top: 15px;
      margin-left: 30px;
    }
    .address ul li{
      margin-top: 10px;
      span{
        font-size: 17px;
      }
    }

  }
}
.addressWrapper {
  max-height: 500px;
  overflow-y: auto;

.text {
  flex: 1;
  min-height: 90px;
  display: flex;
  align-items: center;

  &.item {
    border: 1px solid #f5f5f5;
    margin-bottom: 10px;
    cursor: pointer;

    &.active,
    &:hover {
      border-color: $xtxColor;
      background: lighten($xtxColor, 50%);
    }

    >ul {
      padding: 10px;
      font-size: 14px;
      line-height: 30px;
    }
  }
}
}
.addAddressWrapper .form .subBtn{
  display: flex;
  justify-content: center;
  margin-top:10px;
  button{
    margin-left: 50px;
    margin-right: 50px;
  }

}

.addAddressWrapper {
  max-height: 500px;
  overflow-y: auto;

.text {
  flex: 1;
  min-height: 90px;
  display: flex;
  align-items: center;

  &.item {
    border: 1px solid #f5f5f5;
    margin-bottom: 10px;
    cursor: pointer;

    &.active,
    &:hover {
      border-color: $xtxColor;
      background: lighten($xtxColor, 50%);
    }

    >ul {
      padding: 10px;
      font-size: 14px;
      line-height: 30px;
    }
  }
}
}
.dialog-change{
  display: flex;
  justify-content: center;
}
.deleteaddressWrapper{
  max-height: 500px;
  overflow-y: auto;
  .text {
  flex: 1;
  min-height: 90px;
  display: flex;
  align-items: center;

  &.item {
    border: 1px solid #f5f5f5;
    margin-bottom: 10px;
    cursor: pointer;

    &.active,
    &:hover {
      border-color: $xtxColor;
      background: lighten($xtxColor, 50%);
    }

    >ul {
      padding: 10px;
      font-size: 14px;
      line-height: 30px;
    }
  }
}
}
</style>