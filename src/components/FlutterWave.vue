<script setup lang="ts">
//HTMLCanvasElement是所有  <canvas> 元素的代称
const canvasRef = ref<HTMLCanvasElement>()

const WavePlay = (canvas: HTMLCanvasElement) => {
    const { clientWidth,clientHeight } = canvas
    // 设置画布宽高
    canvas.width = clientWidth
    canvas.height = clientHeight
    const ctx = canvas.getContext('2d')//代表一个二维渲染上下文

    const waveCount = 2 //水波个数
    const waveWidth = clientWidth / waveCount //水波宽度
    const waveHeight = 70 //水波高度
    const startX = -waveWidth * 2
    const startY = 70

    let setoff = 0
    const move = () => {
        if (!ctx)
          return

        setoff += 5
        if(setoff >= waveWidth * 2) 
            setoff = 0
        
        // 清除画布
        ctx.clearRect(0,0,clientWidth,clientHeight)
        // 开始新路径
        ctx.beginPath()
        // 设置填充颜色
        ctx.fillStyle = 'lightsteelblue'
        //起点
        ctx.moveTo(startX + setoff,startY)

        let cpx = startX + setoff + waveWidth / 2
        let x = startX + setoff + waveWidth

        for (let i = 0; i < waveCount; i++) {
            //可以看https://www.php.cn/faq/390026.html
            ctx.quadraticCurveTo(cpx,startY - waveHeight,x,startY)
            cpx += waveWidth
            x += waveWidth
            ctx.quadraticCurveTo(cpx,startY - waveHeight,x,startY)
            cpx += waveWidth
            x += waveWidth
        }

        // ctx.quadraticCurveTo(cpx,startY - waveHeight,x,startY)
        // cpx += waveWidth
        // x += waveWidth
        // ctx.quadraticCurveTo(cpx,startY + waveHeight,x,startY)
        // cpx += waveWidth
        // x += waveWidth
        // ctx.quadraticCurveTo(cpx,startY - waveHeight,x,startY)
        //添加一条从当前位置到指定坐标点的直线
        ctx.lineTo(startX + setoff + waveWidth * 4,clientHeight)
        ctx.lineTo(startX + setoff ,clientHeight)
        // 填充路径
        ctx.fill()
        //每隔80毫秒,move()函数就会被调用一次
        setTimeout(move,80)

    }

    move()
}
 onMounted(() => {
    if(canvasRef.value)
    WavePlay(canvasRef.value)
 })
</script>


<template>
    <section class="h-140px bg-white">
        <canvas ref="canvasRef" class="w-[100%] h-[100%]"></canvas>
    </section>
</template>