<template>
    <div>
        <el-row class="row-bg">
            <el-col :span="6">
                <div class="Switch">
                    <div> <el-switch v-model="value1" /></div>
                    <div class="xunzi"> Dijkstra寻路 </div> <!-- 迪克斯特拉寻路算法 -->
                </div>
            </el-col>
            <el-col :span="6">
                <img class="che" src="@/assets/ball/车.png" height="40" alt="car">
                <img class="arrow" src="@/assets/ball/箭头.png" width="80" alt="arrow">
                <img src="@/assets/ball/小球.png" width="40" alt="ball">
            </el-col>
            <el-col :span="3"> </el-col>
            <el-col :span="9">
                <div class="xinHao">
                    <battery></battery>
                    <singal></singal>
                </div>
            </el-col>
        </el-row>
        <div @click="handleClick($event)" class="box-card">

            <div class="text item">
                <!-- <img v-if="showImage" src="@/assets/load/load.png" alt=""> -->
                <video @loadedmetadata="onVideoLoaded" id="carVideo" src="@/assets/car/ball.mp4"></video>
            </div>
        </div>

    </div>
</template>

<script setup lang='ts'>
import type { Action } from 'element-plus'
import { ElMessage, ElMessageBox, ElNotification } from 'element-plus'
import { ref, onMounted, watch } from 'vue'
import { defineProps, defineEmits } from 'vue';
import battery from '@/components/battery.vue'
import singal from '@/components/singal.vue'

const value1 = ref(true)
const xunlu = () => {
    value1.value = !value1.value
}

const onVideoLoaded = () => {
    ElMessage({
        showClose: true,
        message: '小车动画加载完毕',
        type: 'success',
    })

}
onMounted(() => {





})
const goToMessage = (startTime: number, endTime: number, message: string, message2: string, messageType: any, coordinates: { x1: any; x2: any; y1: any; y2: any; }) => {
    const { x1, x2, y1, y2 } = coordinates;
    const video = document.getElementById("carVideo") as HTMLVideoElement;
    /* 优化函数,用于发送右上角提示消息 */
    let tixing = false;
    /* 去某地函数 开始 结束 开始提示 终止提示 提示类型 坐标  const tiYuGuan = { x1: 481, x2: 662, y1: 584, y2: 631 } */
    if (jiance(x1, x2, y1, y2)) {
        video.currentTime = startTime;
        video.play();

        video.addEventListener('timeupdate', function () {
            if (video.currentTime >= endTime && video.currentTime <= endTime + 0.5) {
                this.pause();
                if (!tixing) {
                    ElNotification({
                        title: 'Success',
                        message: message2,
                        type: 'success',
                    });
                    tixing = true;
                    setTimeout(() => {
                        tixing = false;
                    }, 5000);
                }
            }
        });

        ElMessage({
            showClose: true,
            message,
            type: messageType,
        });

        clickPosition.value.x = 0;
        clickPosition.value.y = 0;
    }
}
/* 回工坊函数 */
const goHome = (startTime: number, endTime: number) => {
    const video = document.getElementById("carVideo") as HTMLVideoElement;
    /* 优化函数,用于发送右上角提示消息 */
    let tixing = false;
    /* 去某地函数 开始 结束 开始提示 终止提示 提示类型 坐标  const tiYuGuan = { x1: 481, x2: 662, y1: 584, y2: 631 } */
    if (video.currentTime >= startTime)
        video.play();
    video.addEventListener('timeupdate', function () {
        if (video.currentTime >= endTime && video.currentTime <= endTime + 0.5) {
            this.pause();
            this.currentTime = 0

            if (!tixing) {
                ElNotification({
                    title: 'Success',
                    message: '小车已完成任务',
                    type: 'success',
                });
                tixing = true;
                setTimeout(() => {
                    tixing = false;
                }, 5000);
            }

        }
    })
}





function donghua1() {
    const video = document.getElementById("carVideo") as HTMLVideoElement;
    /* 优化函数,用于发送右上角提示消息 */
    let tixing = false;
    /* 去某地函数 开始 结束 开始提示 终止提示 提示类型 坐标  const tiYuGuan = { x1: 481, x2: 662, y1: 584, y2: 631 } */
    /* 体育馆一阶段 渣渣 */
    const tiYuGuan = { x1: 481, x2: 662, y1: 584, y2: 631 }
    goToMessage(0, 8, '小车正在前往体育馆', '小车已抵达体育馆', 'success', tiYuGuan)
    /* 二阶段 */
    goHome(8, 18)
    /* 图书馆 */
    const tuShuGuan = { x1: 1192, x2: 1227, y1: 409, y2: 461 }
    goToMessage(32, 40, '小车正在前往图书馆', '小车已抵达图书馆', 'success', tuShuGuan)
    goHome(40, 48)
    /* 食堂 */
    const shiTang = { x1: 1336, x2: 1413, y1: 578, y2: 623 }
    goToMessage(63, 72, '小车正在前往第一食堂', '小车已抵达第一食堂', 'success', shiTang)
    goHome(72, 81)
    /* 绕圈 */
    const gongFang = { x1: 840, x2: 861, y1: 332, y2: 378 }

    goToMessage(97, 132, '小车巡航中', '巡航命令持续执行中', 'success', gongFang)
    if (video.currentTime >= 132 && video.currentTime <= 132 + 0.5) {
        goToMessage(97, 132, '小车巡航中', '巡航命令持续执行中', 'success', gongFang)
    }
}

function donghua2() {
    const video = document.getElementById("carVideo") as HTMLVideoElement;
    /* 优化函数,用于发送右上角提示消息 */
    let tixing = false;
    /* 去某地函数 开始 结束 开始提示 终止提示 提示类型 坐标  const tiYuGuan = { x1: 481, x2: 662, y1: 584, y2: 631 } */
    /* 体育馆一阶段 渣渣 */
    const tiYuGuan = { x1: 481, x2: 662, y1: 584, y2: 631 }
    goToMessage(18, 25, '小车正在前往体育馆', '小车已抵达体育馆', 'success', tiYuGuan)
    /* 二阶段 */
    goHome(25, 32)
    /* 图书馆 */
    const tuShuGuan = { x1: 1192, x2: 1227, y1: 409, y2: 461 }
    goToMessage(32, 40, '小车正在前往图书馆', '小车已抵达图书馆', 'success', tuShuGuan)
    goHome(40, 48)
    /* 食堂 */
    const shiTang = { x1: 1336, x2: 1413, y1: 578, y2: 623 }
    goToMessage(63, 72, '小车正在前往第一食堂', '小车已抵达第一食堂', 'success', shiTang)
    goHome(72, 81)
    /* 绕圈 */
    const gongFang = { x1: 840, x2: 861, y1: 332, y2: 378 }

    goToMessage(97, 132, '小车巡航中', '巡航命令持续执行中', 'success', gongFang)
    if (video.currentTime >= 132 && video.currentTime <= 132 + 0.5) {
        goToMessage(97, 132, '小车巡航中', '巡航命令持续执行中', 'success', gongFang)
    }
}







/*  */

const play = () => {
    const video = document.getElementById("carVideo") as HTMLVideoElement;
    if (video.paused) {
        video.play() //如果视频没播放则...
    }
    else {
        video.pause();
    }
};
const replay = () => { const video = document.getElementById("carVideo") as HTMLVideoElement; video.currentTime = 0; video.play(); }; // 重播视频

// 点击坐标
let clickPosition = ref({ x: 0, y: 0 });
const handleClick = (event: MouseEvent) => {
    const currentElement = event.currentTarget as HTMLElement;
    const rect = currentElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    console.log(`点击坐标: (${x}, ${y})`);
    clickPosition.value = { x, y };
    const video = document.getElementById("carVideo") as HTMLVideoElement;
    if (value1.value == true) {
        console.log(value1.value)
        console.log(video.currentTime)
        donghua2()
    } else {
        console.log(video.currentTime)

        console.log(value1.value)

        donghua1()
    }


}

const checkWithinRadius = (x2: number, y2: number) => {
    // 计算点击坐标与指定点之间的距离
    var distance = Math.sqrt(Math.pow(clickPosition.value.x - x2, 2) + Math.pow(clickPosition.value.y - y2, 2));

    // 如果距离小于或等于30像素，则执行其他方法
    if (distance <= 10) {
        console.log(`距离小于30像素`);
        return true;
    } else {
        return false;
        console.log(`距离大于10像素`);
    }
}


const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
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



</script>
<style scoped>
.text {
    font-size: 14px;
}



.item {
    margin-bottom: px;
}


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


.xinHao {
    display: flex;
    justify-content: flex-end;
    padding-left: 20px;
}

.xinHao>div {
    /*调整子元素间距*/
    margin-left: 11px;
    margin-right: 5px;
}

.Switch {
    display: flex;

}

.che {
    margin-right: 30px;
}

.arrow {
    margin-right: 5px;
    margin-top: 2px;
}

.xunzi {
    font-size: 14px;
    color: #000;
    font-weight: bold;
    margin-left: 10px;
    margin-top: 5px;
}
</style>