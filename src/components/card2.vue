<template>
    <div>
        <div class="anNiu">
            <el-row>
                <el-col :span="2"> <el-button @click="btn1" type="primary">播放避障演示</el-button></el-col>
            </el-row>
        </div>
        <div @click="handleClick($event)" class="box-card">
            <div class="text item">
                <video @loadedmetadata="onVideoLoaded" id="carVideo" src="/assects/car/xray.mp4" width="1600"
                    height="900"></video>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ElMessage, ElMessageBox, ElNotification } from 'element-plus'
import { ref, onMounted } from 'vue'




// 点击坐标
let clickPosition = ref({ x: 0, y: 0 });
const handleClick = (event: MouseEvent) => {
    const currentElement = event.currentTarget as HTMLElement;
    const rect = currentElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    console.log(`点击坐标: (${x}, ${y})`);
    clickPosition.value = { x, y };
}




const jiance = (x1: number, x2: number, y1: number, y2: number) => {
    if (x1 <= clickPosition.value.x && x2 >= clickPosition.value.x) {
        if (y1 <= clickPosition.value.y && y2 >= clickPosition.value.y) {
            return true; // 在范围内
        } else {
            return false; // 在范围外
        }
    }
}

const onVideoLoaded = () => {
    ElMessage({
        showClose: true,
        message: '小车动画加载完毕',
        type: 'success',
    })

}

const btn1 = () => {
    const video = document.getElementById('carVideo') as HTMLVideoElement;
    video.src = '/assects/car/xray.mp4';
    video.play();
}


onMounted(() => {


})


</script>
<style scoped>
.box-card {
    margin: 0 auto;
    position: relative;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    z-index: 1;
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(25px);
    border-radius: 5px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

}

.anNiu {
    margin-bottom: 15px;
}
</style>