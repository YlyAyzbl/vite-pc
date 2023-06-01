<template>
    <div class="rongQi">
        <div class="pad">

            <button id="shang">up</button>
            <button id="you">right</button>
            <button id="xia">down</button>
            <button id="zuo">left</button>


        </div>
        <div class="room">
            <button id="keyBoard">点击此处激活车辆控制</button>
            自己ID<input type="text" v-model="myPeerid" id="myPeerid" />
            <br>
            对方ID<input type="text" v-model="youPeerid" id="youPeerid" />
            <br>
            <el-switch v-model="chaoSheng" /> 超声波跟随
            <br>
            <button id="callBtn">确认</button>
        </div>

        <div class="live">
            <h1>录像</h1>
            <template v-if="isOffer">
                <video id="localVideo" autoplay muted style="width: 1280px;height: 720px;"></video>
            </template>
            <video id="remoteVideo" autoplay muted style="width: 1280px;height: 720px;"></video>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted, watch } from 'vue'
import { init } from "@/components/pc"
// import Peer from 'peerjs';

const myPeerid = ref('');
const youPeerid = ref('');

const isOffer = ref(true)




/* 
var peer = new Peer("pc", {
    host: 'peer.miaolme.com',
    port: 8089,
    secure: true,
    path: '/video'
});
 */
function throttle<T extends (...args: any[]) => void>(
    fn: T,
    delay: number
): (...args: Parameters<T>) => void {
    let lastTime = 0;
    let timer: ReturnType<typeof setTimeout> | null = null;
    return function (...args: Parameters<T>): void {
        const now = new Date().getTime();
        if (now - lastTime < delay) {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                lastTime = now;
                // @ts-ignore
                fn.apply(this, args);
            }, delay);
        } else {
            lastTime = now;
            // @ts-ignore
            fn.apply(this, args);
        }
    };
}

let chaoSheng = ref(false);


function logKey(event: any) {
    init(event.key)
}

const throttledLogKey = throttle(logKey, 500);







const changeColor = (btn: HTMLElement | null, t?: string) => {
    if (btn != null) {
        if (t == null) {
            btn.style.backgroundColor = "#35363a";
            btn.style.color = "white";
        } else {
            btn.style.background = "#f0f0f0"
            btn.style.color = "black";
        }

    }


}

onMounted(() => {
    const keyBoard = document.getElementById('keyBoard');
    if (keyBoard)
        keyBoard.addEventListener('keydown', throttledLogKey);

    const btn1 = document.getElementById('zuo')
    const btn2 = document.getElementById('you')
    const btn3 = document.getElementById('shang')
    const btn4 = document.getElementById('xia')


    setInterval(() => {
        changeColor(btn1, '')
        changeColor(btn2, '')
        changeColor(btn3, '')
        changeColor(btn4, '')
    }, 1000)
})


</script>
<style scoped>
#shang,
#xia,
#zuo,
#you {
    border-radius: 20px;
    background-color: pink;
}
</style>