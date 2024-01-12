<script setup lang="ts">
import {header_navbar,logo_png} from '~/assets/temp/temp'

// 看temp.ts
interface AnchorItem {
    title: string
    anchor: string
}

// anchorList? 加问号表示可以没有这个值，不是必须的
interface HeaderNavbar {
    title: string
    path: string
    anchorList? : AnchorItem[]
}

// 定义组件参数
// { [key: string]: string } 定义 map 类型 key 类型是 string, value 类型是 string
interface Props {
    navbars: HeaderNavbar[]
    textStyle?: { [key: string]: string }
}
// 可以设置默认值的组件参数
const props = withDefaults(defineProps<Props>(), {
    navbars: () => {
        return header_navbar
    },
})

const hoverIndex = ref(-1)
//隐藏鼠标移入
const handleMouseEnter = (index : number) => hoverIndex.value = index
//隐藏鼠标移出
const handleMouseLeave = () => hoverIndex.value = -1
</script>

<template>
    <!-- 样式使用 windicss 改写 -->
  <header class="w-[100%] h-70px fixed top-0 left-0 z-5">
    <section class="h-[100%] max-w-900px min-w-600px mx-auto flex justify-between">
        <section class="h-[100%] flex items-center">
            <img :src="logo_png" alt="" class="h-40px">
        </section>

        <section class="h-[100%]">
            <ul class="h-[100%] min-w-400px text-20px font-bold text-white flex justify-between items-center">
                <li 
                v-for="(navbar,navbarIndex) in navbars" :key="navbar.title" 
                class="h-[100%] relative"
                @mouseenter="handleMouseEnter(navbarIndex)"
                @mouseleave="handleMouseLeave"
                >
                    <router-link :to="navbar.path" class="h-[100%] flex items-center" :style="[textStyle]">
                        {{ navbar.title }}
                        <!-- 如果有二级菜单并且二级菜单数量大于0 显示图标 -->
                        <template v-if="navbar.anchorList && navbar.anchorList.length">
                            <!-- 对有二级菜单的项增加图标，向 vite 借个图标 -->
                            <!-- `fill-[${textStyle?.color}]` 表示如果文字颜色有改变，图标颜色也跟着变 -->
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24" data-v-4856e666=""
                            class="w-14px h-14px ml-4px fill-white" 
                            :style="`fill:${textStyle?.color}`"
                            >
                            <path d="M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"></path>
                            </svg>
                        </template>
                    </router-link>

                    <!-- 如果有二级菜单并且二级菜单数量大于0 显示二级菜单 -->
                    <template v-if="navbar.anchorList && navbar.anchorList.length">
                        <transition name="scroll-y-transition">
                            <ul v-if= "hoverIndex === navbarIndex" 
                             class="bg-white rounded-8px min-w-160px absolute top-55px left-[-30px] pl-22px py-12px"
                             style="box-shadow: 0 0 14px 0 rgb(0 0 0 / 4%);"
                            >
                              <li v-for="anchor in navbar.anchorList" :key="anchor.title" class="leading-40px">
                                <router-link :to="anchor.anchor" class="w-[100%] h-[100%] inline-block text-[#777] text-18px font-600 hover:text-20px hover:font-bold">
                                    {{ anchor.title }}
                                </router-link>
                              </li>
                            </ul>
                        </transition>
                    </template>
                </li>
            </ul>
        </section>
    </section>
  </header>
</template>

<style lang="scss" scoped>
  header {
    section {
       .navbar-content {
          .navbar {
            //二级菜单
            .navbar-item {
                li {
                    line-height: 40px;
                    a {
                        &:hover {
                          font-size: 22px;
                          font-weight: 700;
                        }
                    }
                }
            }
        }
    }
}
}
</style>