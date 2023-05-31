<template>
    <div>
        <div class="signal">
            <div class="bar active"></div>
            <div class="bar active"></div>
            <div class="bar active"></div>
            <div class="bar active"></div>
            <div id="xin" class="bar"></div>
            <div class="yanchi">
                <div class="yanChiu">{{ downloadSpeed }}kb</div>
                <div class="yanChid">{{ uploadSpeed }}kb</div>
            </div>
            <div class="shiyan">
                <div>延迟:</div>
                <div>{{ delayTime }}mm</div>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'

import { onMounted } from 'vue'


onMounted(() => {
    const xinDiv = document.querySelector('#xin');
    const suiJi = () => {
        const total = simulateDelay();
        uploadSpeed.value = total.uploadSpeed +30;
        downloadSpeed.value = total.downloadSpeed;
        delayTime.value = total.totalTime + 10;
        if (xinDiv !== null) {
            if (downloadSpeed.value > 120) {
                // 如果大于120，则为xinDiv添加active类
                xinDiv.classList.add('active');
            } else {
                // 否则移除active类
                xinDiv.classList.remove('active');
            }
        }
    }

    setInterval(suiJi, 1000);
})
const uploadSpeed = ref(100)
const downloadSpeed = ref(100)
const delayTime = ref(999)

interface SimulateDelayResult {
    totalTime: number;
    uploadSpeed: number;
    downloadSpeed: number;
}

function simulateDelay(): SimulateDelayResult {
    const uploadSpeed = Math.floor(Math.random() * 100 + 50) // 上传速度，单位是kb/s，随机生成50~150之间的数
    const downloadSpeed = Math.floor(Math.random() * 200 + 100) // 下载速度，单位是kb/s，随机生成100~300之间的数
    const uploadTime = Math.floor(Math.random() * 1000 / uploadSpeed) // 上传耗时，单位是毫秒
    const downloadTime = Math.floor(Math.random() * 1000 / downloadSpeed) // 下载耗时，单位是毫秒
    const totalTime = uploadTime + downloadTime // 总耗时，单位是毫秒
    return { totalTime, uploadSpeed, downloadSpeed }
}

</script>
<style scoped>
.signal {
    display: flex;
    align-items: flex-end;
    height: 50px;
    width: 150px;
}

.bar {
    height: 10px;
    width: 13px;
    margin-right: 2px;
    background-color: #ccc;
}

.bar.active {
    background-color: rgb(27, 179, 60);
}

.bar:nth-of-type(1) {
    height: 10px;
}

.bar:nth-of-type(2) {
    height: 20px;
}

.bar:nth-of-type(3) {
    height: 30px;
}

.bar:nth-of-type(4) {
    height: 40px;
}

.bar:nth-of-type(5) {
    height: 50px;
}

.yanchi {
    margin-left: 5px;
}

.yanChiu {
    color: green;
}

.yanChid {
    color: orange;
}

.shiyan {
    margin-left: 15px;
}
</style>