
import { styleType } from 'element-plus/es/components/table-v2/src/common';
<script setup>

</script>
<template>
   <div class="find">
       <div class="findheader">
        <h2>达邻网</h2>
        <p class="findword">找回密码</p>
        <div class="go">
            <p>
              <a href="javascript:;">注册</a>
              <a href="javascript:;">登录</a>
              <a href="javascript:;">我的商城</a>
        </p>
        </div>
       </div>
       <div class="findbox">
            
       </div>
       <div class="findfooter">

       </div>
   </div> 
</template>

<style scoped lang='scss'>
.find{
    
    .findheader{
     height: 120px;
     width: 100%;
    display: flex;
    align-items: center;
    background-color: #e4e4e4;
    h2{
        margin-right:20px ;
        margin-left: 200px;
        font-size: 45px;
        color: #f95454;
    }
    .findword{
        margin-right:300px ;
        
        font-size: 30px;
    }
    .go{
        margin-left: 400px;

        p{
            width: 300px;
            height: 100%;
            

            a{
                line-height: 1;
                padding: 0 10px;
                color: #2b2929;
                display: inline-block;
                font-size: 20px;
            ~a {
                border-left: 1px solid #1b1919;
                }
      
            }
            a:hover{
                color: #f95454;
            }
        }
    }
     
     
    }  
}
</style>