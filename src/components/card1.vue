<template>
    <div>
        <el-row class="row-bg">
            <el-col :span="6">
                <div class="Switch">
                    <div> <el-switch v-model="value1" /></div>
                    <div class="xunzi"> Dijkstra寻路 </div> <!-- 迪克斯特拉寻路算法 -->

                    <div>&nbsp; &nbsp; &nbsp; <el-switch v-model="value2" /></div>
                    <div>自动返航</div>
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
                <video @loadedmetadata="onVideoLoaded" id="carVideo" src="assects/car/小球循环.mp4"></video>
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
const tixing = ref(false)
const value1 = ref(true)
const value2 = ref(false)
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



    /*     const video = document.getElementById("carVideo") as HTMLVideoElement;
        video.addEventListener('timeupdate', function () {
            console.log(video.currentTime)
        }) */

})


const goToMessage = (startTime: number, endTime: number, message: string, message2: string, messageType: any, coordinates: { x1: any; x2: any; y1: any; y2: any; }) => {
    const { x1, x2, y1, y2 } = coordinates;
    const video = document.getElementById("carVideo") as HTMLVideoElement;
    /* 优化函数,用于发送右上角提示消息 */
    /* 去某地函数 开始 结束 开始提示 终止提示 提示类型 坐标  const tiYuGuan = { x1: 481, x2: 662, y1: 584, y2: 631 } */
    if (jiance(x1, x2, y1, y2)) {
        video.currentTime = startTime;
        video.play();

        video.addEventListener('timeupdate', function () {
            if (video.currentTime >= endTime && video.currentTime <= endTime + 0.5) {
                this.pause();
                if (!tixing.value) {
                    /*                     ElNotification({
                                            title: 'Success',
                                            message: message2,
                                            type: 'success',
                                        }); */
                    tixing.value = true;
                }
            }
        });
        if (!tixing.value) {
            ElMessage({
                showClose: true,
                message,
                type: messageType,
            });
            tixing.value = true;
            setTimeout(() => {
                tixing.value = false;
            }, 5000);
        }

        clickPosition.value.x = 0;
        clickPosition.value.y = 0;
    }
}










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
    tixing.value = false;
    //6
    const tiYuGuan = { x1: 481, x2: 662, y1: 584, y2: 631 }
    const tuShuGuan = { x1: 1192, x2: 1227, y1: 409, y2: 461 }
    const shiTang = { x1: 1336, x2: 1413, y1: 578, y2: 623 }
    const gongFang = { x1: 840, x2: 861, y1: 332, y2: 378 }
    if (value1.value) {
        if (jiance(tiYuGuan.x1, tiYuGuan.x2, tiYuGuan.y1, tiYuGuan.y2)) {
            video.src = '/assects/car/小球到体育馆.mp4';
            goToMessage(0, 6, '小车正在前往体育馆', '小车已抵达体育馆', 'success', tiYuGuan); // 等待 fn1 执行完成后再执行 fn2
            video.addEventListener('timeupdate', function () {
                if (video.currentTime >= 6 && video.currentTime <= 14) {
                    video.play();
                }
            })
        } else if (jiance(tuShuGuan.x1, tuShuGuan.x2, tuShuGuan.y1, tuShuGuan.y2)) {
            video.src = '/assects/car/小球到图书馆.mp4'
            goToMessage(0, 7, '小车正在前往图书馆', '小车已抵达图书馆', 'success', tuShuGuan); // 等待 fn1 执行完成后再执行 fn2
            video.addEventListener('timeupdate', function () {
                if (video.currentTime >= 7 && video.currentTime <= 15) {
                    video.play();
                }
            })
        } else if (jiance(shiTang.x1, shiTang.x2, shiTang.y1, shiTang.y2)) {

            video.src = '/assects/car/小球到一食堂.mp4';
            goToMessage(0, 7, '小车正在前往一食堂', '小车已抵达一食堂', 'success', shiTang);
            video.addEventListener('timeupdate', function () {
                if (video.currentTime >= 7 && video.currentTime <= 15) {
                    video.play();
                }
            })
        } else if (jiance(gongFang.x1, gongFang.x2, gongFang.y1, gongFang.y2)) {
            video.src = '/assects/car/小球循环.mp4';
            ElNotification({
                title: 'Success',
                message: '小车开始执行环绕',
                type: 'success',
            });
            video.play();
        }
    } else {
        if (jiance(tiYuGuan.x1, tiYuGuan.x2, tiYuGuan.y1, tiYuGuan.y2)) {
            video.src = '/assects/car/小球到体育馆x.mp4';
            goToMessage(0, 6, '小车正在前往体育馆', '小车已抵达体育馆', 'success', tiYuGuan); // 等待 fn1 执行完成后再执行 fn2
            video.addEventListener('timeupdate', function () {
                if (video.currentTime >= 6 && video.currentTime <= 14) {
                    video.play();
                }
            })
        } else if (jiance(tuShuGuan.x1, tuShuGuan.x2, tuShuGuan.y1, tuShuGuan.y2)) {
            video.src = '/assects/car/小球到图书馆x.mp4'
            goToMessage(0, 7, '小车正在前往图书馆', '小车已抵达图书馆', 'success', tuShuGuan); // 等待 fn1 执行完成后再执行 fn2
            video.addEventListener('timeupdate', function () {
                if (video.currentTime >= 7 && video.currentTime <= 15) {
                    video.play();
                }
            })
        } else if (jiance(shiTang.x1, shiTang.x2, shiTang.y1, shiTang.y2)) {
            video.src = '/assects/car/小球到一食堂x.mp4';
            goToMessage(0, 7, '小车正在前往一食堂', '小车已抵达一食堂', 'success', shiTang);
            video.addEventListener('timeupdate', function () {
                if (video.currentTime >= 7 && video.currentTime <= 15) {
                    video.play();
                }
            })
        } else if (jiance(gongFang.x1, gongFang.x2, gongFang.y1, gongFang.y2)) {
            video.src = '/assects/car/小球循环x.mp4';
            video.play();
        }
    }
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