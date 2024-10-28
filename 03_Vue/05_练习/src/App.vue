<script setup>
import {ref} from "vue"
  // 创建一个变量来记录选项卡的状态
  const current=ref(0) //0球员 1球队
</script>
<template>
  <!-- 选项卡的外部容器 -->
  <div class="tab-wrapper">
    <!-- 选项卡的头部 -->
    <header class="tab-head">
      <!-- 定义两个按钮 -->
      <div @click="current=0" class="tab-button" :class="{active:current===0}">热门球员</div>
      <div @click="current=1" class="tab-button" :class="{active:current===1}">热门球队</div>
    </header>

    <!-- 选项卡的主体 -->
    <div class="main">
      <div v-show="current===0">
      <!-- 球员 -->
        <div class="tab-list">
          <div class="tab-item">
            <!-- 图片 -->
            <div class="photo">
              <img src="/images/梅西.jpeg" alt="梅西">
              <span>1</span>
            </div>

            <!-- 描述 -->
            <div class="desc">
              <span class="name">梅西</span>
              <div class="hot-bar">
                <div class="inner">
                  433760热度
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div v-show="current===1">
      <!-- 球队 -->
          <div class="tab-list">
          <div class="tab-item">
            <!-- 图片 -->
            <div class="photo">
              <img src="/images/法国.jpg" alt="法国">
              <span>1</span>
            </div>

            <!-- 描述 -->
            <div class="desc">
              <span class="name">法国</span>
              <div class="hot-bar">
                <div class="inner">
                  333760热度
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .tab-wrapper{
    width: 800px;
    background-color: rgb(45, 83, 211);
    box-sizing: border-box;
    padding: 20px;
  }
  .tab-head{
    display: flex;
    border-radius: 10px;
    overflow: hidden;
  }
  .tab-button{
    background-color: white;
    font-size: 30px;
    flex: auto;
    padding: 10px 0;
    text-align: center;
    cursor: pointer;
    transition: 0.5s;
  }

  .tab-button:not(.active):hover{
    color: rgb(187, 3, 52);

  }
  .active{
     background-color: rgb(187, 3, 52);
     color: white;
  }
  .tab-list{
    margin:20px;
  }
  .tab-item{
    display: flex;
    margin-bottom: 20px;
  }
  /*容器*/
  .photo{
    width:150px;
    height: 135px;
    background-color: #fff;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
  }
  /*图片*/
  .photo img{
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
  /*排名*/
  .photo span{
    position: absolute;
    top: 0;
    left: 0;
    width:50px;
    height: 50px;
    background-color: rgb(245, 102, 1);
    font-size: 20px;
    font-weight: bold;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-right-radius: 20px;
    border-top-left-radius: 20px;
  }
  .desc{
    font-size: 30px;
    color: white;
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    flex: auto;
    margin-left: 30px;
  }
  .hot-bar{
    background-color: #bfa;
    border-radius: 20px;
    background-color: rgb(3, 37, 103);
    text-indent: 0.5em;
    overflow: hidden;
  }
  .inner{
    border-radius: 20px;
    background-image: linear-gradient(90deg,rgb(187,3,52) 50%,rgb(66,2,12));
    width:50%;
    white-space: nowrap;
  }
</style>