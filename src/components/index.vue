<template>
    <div>
        <el-container>
            <!-- 头部 -->
            <el-header>

                <toubu></toubu>
            </el-header>
            <el-main>
                <!-- 身体 -->
 
                <router-view></router-view>
            </el-main>
            <el-footer>
                <!-- 尾部 -->
            </el-footer>

        </el-container>
    </div>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue'
import card1 from '@/components/card1.vue'

import toubu from '@/components/toubu.vue'
import { ElMessage } from 'element-plus'

onMounted(() => {

})

</script>
<style scoped lang="less">

/*
.main {
    background-image: url(@/assets/bac/bac2.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}*/
</style>