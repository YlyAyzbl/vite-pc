<template>
    <div>
        <div class="battery" id="battery">
            <div class="batteryShape">
                <div class="level">
                    <div class="percentage" id="percentage"></div>
                </div>
            </div>
            <nav class="percent" id="percent">100%</nav>
        </div>

    </div>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue'


onMounted(() => {
    let battery = randomBattery()
    setBatteryLevel(battery)
    const timer = setInterval(dianLiang, 5000);
    function dianLiang() {
        let fixedNum = battery.toFixed(1)
        console.log(fixedNum)
        if (battery <= 30) {
            setBatteryLevel(30)
            clearInterval(timer)
        } else {
            setBatteryLevel(fixedNum)
        }
        battery -= 0.3
    }

})

/* 电池电量随机数 */

const randomBattery = () => {
    // 生成 0 到 1 之间的随机数
    const randomNum = Math.random();

    // 将随机数缩放到 0 到 50 之间
    const scaledNum = randomNum * 50;

    // 将缩放后的数值向上取整，并将结果加上 30
    const randomNumber = Math.ceil(scaledNum) + 30;

    return randomNumber;
}



/* 设置电池电量 */
const setBatteryLevel = (level: string | number) => {
    const percentage = document.getElementById("percentage");
    const percent = document.getElementById("percent");
    if (percentage) { percentage.style.width = level + "%"; }
    if (percent) { percent.innerHTML = level + "%"; }
}
</script>
<style scoped>
.battery {
    display: flex;
    height: 70px;
    width: 130px;
}

.batteryShape {
    position: relative;
    width: 65px;
    height: 30px;
    margin: 10px 0;
    border: 3px solid #333;
    border-radius: 10px;
}

.batteryShape::before {
    content: "";
    position: absolute;
    top: 50%;
    right: -9px;
    transform: translateY(-50%);
    width: 6px;
    height: 12px;
    background: #333;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}

.batteryShape::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: rgba(255, 255, 255, 0.1);
}

.level {
    position: absolute;
    top: 4px;
    left: 4px;
    right: 4px;
    bottom: 4px;
    overflow: hidden;
    border-radius: 4px;
}

.percentage {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(90deg, #ffeb3b, #27ff80);
    /* background: linear-gradient(90deg, #9c28af, #fd2c72); */
}

.percent {
    color: #424141;
    font-size: 1em;
    font-weight: 600;
    margin-left: 10px;
    margin-top: 16px;
}
</style>