<script setup lang="ts">
import { cover_video } from '~/assets/temp/temp'

//响应式高度
const windowheight = ref(0)
//封装onResize()方法
const onResize = () => {
    //获取浏览器高度
   const height = document.documentElement.clientHeight
   windowheight.value = height
}
onResize()
// 控制视频播放，当菜单改变时暂停播放，也就是内容覆盖了视频的时候
const videoRef = ref()
const changeNavbarColor = ref(false)
const onRoll = () => {
    const rollTop = document.documentElement.scrollTop || document.body.scrollTop
    const clientheight = document.body.clientHeight
    // 滚动高度 大于 可移动高度则改变菜单头部
    if (rollTop >= (clientheight - 80)) {
        changeNavbarColor.value = true
        //视频暂停
        videoRef.value.pause()
    }
    else{
        changeNavbarColor.value = false
        //视频播放
        videoRef.value.play()
    }
}
//生命周期函数，给window绑定监听事件
onMounted(() => {
    window.addEventListener('resize',onResize,false)
    window.addEventListener('scroll',onRoll,false)
})
//生命周期函数，给window取消监听事件
onUnmounted(() => {
    window.removeEventListener('resize',onResize)
    window.removeEventListener('scroll',onRoll)
})
</script>

<template>
  <!-- 鼠标悬停在 e-header 自定义组件上没有提示, 有时候需要重启 vscode 才能生效 -->
  <!-- 组件没有默认值时，在其他地方使用会提示缺少参数 -->
  <EHeader :text-style="{color: 'gray'}" :style="changeNavbarColor ? { 'background-color': '#92a8d1' } : ''" />

  <section class="vision">
    <!-- ref 可以获取到 video 元素原生属性 -->
    <video ref="videoRef" loop autoplay muted :src="cover_video" />
    <div class="package" >
        <section>
            <h1>hi</h1>
            <h6>欢迎光临</h6>
        </section>
    </div>
  </section>

  <section id="id0" :style="{ 'margin-top': `${windowheight}px` }" class="substance">
    <h1>{{ windowheight }}</h1>
    <p v-for="n in 10" :key="n">
        first {{ n }}
    </p>
  </section>

   <section class="relative z-2 h-200px">
    <FlutterWave />
    <h1>Flutter Wave</h1>
   </section>

  <section v-for="item in 10" :id="`id${item}`" :key="item" :class="`substance-${item}`" class="substance">
    <p v-for="n in 10" :key="n">
        {{item}} - {{ n }}
    </p>
  </section>
</template>

<style setup lang="scss">

.vision {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;

    video {
        width: 100%;
        height: 100%;
        object-fit: cover;//图片或视频会完全覆盖容器，并尝试保持原始长宽比例
    }

    .package {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        // background-color: rgba(12,12,13,0.5);

        display: flex;
        justify-content: center;
        align-items: center;
        color: rgb(128, 114, 115);
        font-size: 30px;
        
    }
}

.substance{
    position:relative;
    z-index: 3;
    background-color: white;
}

// 为了看清视频暂停 让 substance-1 元素背景透明
.substance-1 {
  background-color: transparent;
}
</style>