<template>
    <div>

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
import { ref, onMounted } from 'vue'
import { defineProps, defineEmits } from 'vue';



const onVideoLoaded = () => {
    ElMessage({
        showClose: true,
        message: '小车动画加载完毕',
        type: 'success',
    })

}
onMounted(() => {

    const video = document.getElementById("carVideo") as HTMLVideoElement;
    video.currentTime = 0;
    video.play();
    video.addEventListener('timeupdate', function () {
        console.log(video.currentTime)
    })

    let tixing = false;
    setInterval(() => {
        if (jiance(1023, 1100, 352, 401)) {//读书馆
            console.log('图书馆')

            video.currentTime = 18.2;
            // showImage.value = true;
            video.play()

            video.addEventListener('timeupdate', function () {

                // console.log(video.currentTime)



                if (video.currentTime >= 26 && video.currentTime <= 27) {
                    if (!tixing) {
                        ElNotification({
                            title: 'Success',
                            message: '小车已抵达图书馆',
                            type: 'success',
                        })
                        tixing = true;
                        setTimeout(() => {
                            tixing = false;
                        }, 5000); // 5s 后重置激活状态

                    }

                }




                if (this.currentTime >= 36.5 && this.currentTime <= 37) {

                    this.pause();
                    if (!tixing) {
                        ElNotification({
                            title: 'Success',
                            message: '小车已完成目标',
                            type: 'success',
                        })
                        tixing = true;
                        setTimeout(() => {
                            tixing = false;
                        }, 5000); // 5s 后重置激活状态
                    }

                }
            });

            ElMessage({
                showClose: true,
                message: '小车正在前往读书馆,请等待...',
                type: 'success',
            })
            clickPosition.value.x = 0
            clickPosition.value.y = 0
        } else if (jiance(410, 577, 512, 566)) { // 传入x1,x2,y1,y2 小大顺序体育馆
            console.log('你点击了体育馆')


            video.currentTime = 0;
            // showImage.value = true;
            video.play()

            video.addEventListener('timeupdate', function () {

                // console.log(video.currentTime)



                if (video.currentTime >= 7.5 && video.currentTime <= 8.5) {
                    if (!tixing) {
                        ElNotification({
                            title: 'Success',
                            message: '小车已抵达体育馆',
                            type: 'success',
                        })
                        tixing = true;
                        setTimeout(() => {
                            tixing = false;
                        }, 5000); // 5s 后重置激活状态

                    }

                }




                if (this.currentTime >= 17.5 && this.currentTime <= 18) {

                    this.pause();
                    if (!tixing) {
                        ElNotification({
                            title: 'Success',
                            message: '小车已完成目标',
                            type: 'success',
                        })
                        tixing = true;
                        setTimeout(() => {
                            tixing = false;
                        }, 5000); // 5s 后重置激活状态
                    }

                }
            });

            ElMessage({
                showClose: true,
                message: '小车正在前往体育馆,请等待...',
                type: 'success',
            })
            clickPosition.value.x = 0
            clickPosition.value.y = 0



        } else if (jiance(1150, 1217, 505, 540)) { // 传入x1,x2,y1,y2 小大顺序一食堂
            console.log('你点击一食堂')


            video.currentTime = 37.5;
            // showImage.value = true;
            video.play()

            video.addEventListener('timeupdate', function () {

                // console.log(video.currentTime)

                if (video.currentTime >= 44.5 && video.currentTime <= 45.5) {
                    if (!tixing) {
                        ElNotification({
                            title: 'Success',
                            message: '小车已抵达一食堂',
                            type: 'success',
                        })
                        tixing = true;
                        setTimeout(() => {
                            tixing = false;
                        }, 5000); // 5s 后重置激活状态

                    }

                }
                if (this.currentTime >= 53.5 && this.currentTime <= 54.5) {

                    this.pause();
                    if (!tixing) {
                        ElNotification({
                            title: 'Success',
                            message: '小车已完成目标',
                            type: 'success',
                        })
                        tixing = true;
                        setTimeout(() => {
                            tixing = false;
                        }, 5000); // 5s 后重置激活状态
                    }

                }
            });

            ElMessage({
                showClose: true,
                message: '小车正在前往一食堂,请等待...',
                type: 'success',
            })
            clickPosition.value.x = 0
            clickPosition.value.y = 0



        } else if (jiance(3000, 3000, 3000, 3000)) { // 传入x1,x2,y1,y2 小大顺序机电楼
            console.log('你点击了机电楼')


            video.currentTime = 53;
            // showImage.value = true;
            video.play()

            video.addEventListener('timeupdate', function () {

                console.log(video.currentTime)



                if (video.currentTime >= 61 && video.currentTime <= 61.5) {

                    if (!tixing) {
                        ElNotification({
                            title: 'Success',
                            message: '小车已抵达机电楼',
                            type: 'success',
                        })
                        tixing = true;
                        setTimeout(() => {
                            tixing = false;
                        }, 5000); // 5s 后重置激活状态

                    }

                }




                if (video.currentTime >= 70.5 && video.currentTime <= 71) {

                    this.pause();
                    if (!tixing) {
                        ElNotification({
                            title: 'Success',
                            message: '小车已完成目标',
                            type: 'success',
                        })
                        tixing = true;
                        setTimeout(() => {
                            tixing = false;
                        }, 5000); // 5s 后重置激活状态

                    }

                }
            });

            ElMessage({
                showClose: true,
                message: '小车正在前往机电楼,请等待...',
                type: 'success',
            })
            clickPosition.value.x = 0
            clickPosition.value.y = 0



        } else if (checkWithinRadius(735, 310)) { // 传入x1,x2,y1,y2 小大顺序 循环
            console.log('你点击了飞创工坊')


            video.currentTime = 71.5;
            // showImage.value = true;
            video.play()

            video.addEventListener('timeupdate', function () {

                // console.log(video.currentTime)

                if (this.currentTime >= 128 && this.currentTime <= 129) {
                    video.currentTime = 71.5;
                    if (!tixing) {
                        ElNotification({
                            title: 'Success',
                            message: '循环持续执行中',
                            type: 'success',
                        })
                        tixing = true;
                        setTimeout(() => {
                            tixing = false;
                        }, 5000); // 5s 后重置激活状态
                    }

                }
            });

            ElMessage({
                showClose: true,
                message: '小车正在正在执行自动巡航模式',
                type: 'success',
            })
            clickPosition.value.x = 0
            clickPosition.value.y = 0



        }
    })

}

);

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
</style>