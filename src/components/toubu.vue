<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect">
        <el-menu-item index="0"><img class="logo" src="@/assets/bac/logo.png" height="35" alt="飞创工坊"></el-menu-item>
        <div class="flex-grow" />
        <!--  <el-menu-item index="1">Processing Center</el-menu-item> -->


        <el-sub-menu index="1">
            <template #title>小车控制</template>
            <!-- <el-menu-item index="1-1">手机端控制</el-menu-item> -->
            <el-menu-item index="1-1">电脑端控制</el-menu-item>
            <el-menu-item index="1-2">超声波避障</el-menu-item>
        </el-sub-menu>
        <!--       <el-sub-menu index="2">
            <template #title>小车避障</template>
            <el-menu-item index="2-1">演示动画</el-menu-item> -->


        <!--         <el-sub-menu index="2-4"> 折叠
                <template #title>四个折叠</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu> -->
        <!--   </el-sub-menu> -->
    </el-menu>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { Router, useRouter } from 'vue-router'


const router: Router = useRouter()
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath) // 可以根据key和keyPath来判断选择的啥 然后做路由跳转
    if (key == '0') {
        router.push('/');
        console.log('跳转了首页')
    } else if (key == '1-2') {
        router.push('/plus');
        console.log('跳转了雷达演示动画')
    } else if (key == '1-1') {
        router.push('/control2');
        console.log('跳转了电脑控制')
    }
}
</script>

<style scoped>
.flex-grow {
    flex-grow: 1;
}

.logo {
    margin-top: 7px;
}
</style>