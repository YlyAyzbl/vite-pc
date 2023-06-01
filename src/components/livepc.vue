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
            <el-switch v-model="chaoSheng" /> 超声波跟随
            <br>
            <button id="callBtn">确认</button>
        </div>

        <div class="container-fluid">
            <h1 class="text-center">监控</h1>
            <!--  <video autoplay controls id="1"></video>
            <video autoplay controls id="2"></video>
            <video autoplay controls id="3"></video>
            <video autoplay controls id="4"></video> -->
            <div class="jianKong">
                <div id="jk1">监控1</div>
                <div id="jk2">监控2</div>
                <div id="jk3">监控3</div>
                <div id="jk4">监控4</div>
            </div>
            <div id="di1"></div>
            <div id="di2"></div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted, watch } from 'vue'
import { init } from "@/components/pc"
import { GetStream, GetStream2, GetStream3, GetStream4 } from '../utils/peer'
import { RemoveClass, AddClass } from '../utils/simple'
const jk1S = ref(true)
const jk2S = ref(true)
const jk3S = ref(true)
const jk4S = ref(true)

function createVideoPlayer(id: string, object: any, pl: string) {
    // 创建video元素
    const videoElement = document.createElement('video');
    videoElement.controls = true;
    videoElement.id = id
    videoElement.srcObject = object;
    // 将video元素添加到id为"jk"的父元素上
    const container = document.getElementById(pl);
    container?.appendChild(videoElement);
}


function destroyVideoPlayer(id: string) {
    // 找到要销毁的video元素
    const videoElement = document.getElementById(id) as HTMLVideoElement
    console.log(videoElement)
    // 销毁video元素
    videoElement?.remove()

}








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
    var jk1 = document.getElementById('jk1')
    var jk2 = document.getElementById('jk2')
    var jk3 = document.getElementById('jk3')
    var jk4 = document.getElementById('jk4')


    jk1?.addEventListener("click", () => {
        if (jk1S.value) {
            AddClass(jk1, "bg-success")
            jk1S.value = false
            createVideoPlayer("v1", GetStream(), 'di1')
        } else {
            RemoveClass(jk1, "bg-success")
            destroyVideoPlayer("v1")
            jk1S.value = true
            console.log("执行移除")
        }

    })
    jk2?.addEventListener("click", () => {
        if (jk2S.value) {
            AddClass(jk2, "bg-success")
            jk2S.value = false
            createVideoPlayer("v2", GetStream2(), 'di1')
        } else {
            RemoveClass(jk2, "bg-success")
            jk2S.value = true
            destroyVideoPlayer("v2")
        }
    })
    jk3?.addEventListener("click", () => {
        if (jk3S.value) {
            AddClass(jk3, "bg-success")
            jk3S.value = false
            createVideoPlayer("v3", GetStream3(), 'di2')
        } else {
            RemoveClass(jk3, "bg-success")
            jk3S.value = true
            destroyVideoPlayer("v3")
        }
    })
    jk4?.addEventListener("click", () => {
        if (jk4S.value) {
            AddClass(jk4, "bg-success")
            jk4S.value = false
            createVideoPlayer("v4", GetStream4(), 'di2')
        } else {
            RemoveClass(jk4, "bg-success")
            jk4S.value = true
            destroyVideoPlayer("v4")
        }
    })


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

.jianKong {
    display: flex;
}
</style>