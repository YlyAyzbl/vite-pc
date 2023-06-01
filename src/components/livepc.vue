<template>
    <div class="rongQi">
        <div class="pad">

            <button id="shang">up</button>
            <button id="you">right</button>
            <button id="xia">down</button>
            <button id="zuo">left</button>


        </div>
        <div class="room">
            <button id="keyBoard" style="background-color: #ffffff;">点击此处激活车辆控制</button>
            <el-switch v-model="chaoSheng" /> 超声波跟随
            <br>

        </div>

        <div class="container-fluid">
            <h1 style="text-align: center;">监控</h1>
            <el-row :gutter="20" style="margin-bottom: 20px;">
                <el-col :span="6">
                    <div id="jk1" class="jian card">监控1</div>
                </el-col>
                <el-col :span="6">
                    <div id="jk2" class="jian card">监控2</div>
                </el-col>
                <el-col :span="6">
                    <div id="jk3" class="jian card">监控3</div>
                </el-col>
                <el-col :span="6">
                    <div id="jk4" class="jian card">监控4</div>
                </el-col>
            </el-row>
            <div id="di1" style="display: flex;justify-content: space-between;gap: 20px;">

            </div>
            <div id="di2" style="display: flex;justify-content: space-between;gap: 20px;margin-top:20px">

            </div>


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
    videoElement.width = 900
    videoElement.className = 'card'
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

const throttledLogKey = throttle(logKey, 100);







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
            AddClass(jk1, "jianAc")
            jk1S.value = false
            createVideoPlayer("v1", GetStream(), 'di1')
        } else {
            RemoveClass(jk1, "jianAc")
            destroyVideoPlayer("v1")
            jk1S.value = true
            console.log("执行移除")
        }

    })
    jk2?.addEventListener("click", () => {
        if (jk2S.value) {
            AddClass(jk2, "jianAc")
            jk2S.value = false
            createVideoPlayer("v2", GetStream2(), 'di1')
        } else {
            RemoveClass(jk2, "jianAc")
            jk2S.value = true
            destroyVideoPlayer("v2")
        }
    })
    jk3?.addEventListener("click", () => {
        if (jk3S.value) {
            AddClass(jk3, "jianAc")
            jk3S.value = false
            createVideoPlayer("v3", GetStream3(), 'di2')
        } else {
            RemoveClass(jk3, "jianAc")
            jk3S.value = true
            destroyVideoPlayer("v3")
        }
    })
    jk4?.addEventListener("click", () => {
        if (jk4S.value) {
            AddClass(jk4, "jianAc")
            jk4S.value = false
            createVideoPlayer("v4", GetStream4(), 'di2')
        } else {
            RemoveClass(jk4, "jianAc")
            jk4S.value = true
            destroyVideoPlayer("v4")
        }
    })


    const keyBoard = document.getElementById('keyBoard');
    if (keyBoard) {
        keyBoard.addEventListener('keydown', throttledLogKey);
        keyBoard.addEventListener('click', () => {
            keyBoard.style.backgroundColor = "#67C23A"
        });
        // 监听按钮失去焦点事件
        keyBoard.addEventListener('blur', function () {
            // 按钮失去焦点后移除键盘事件监听
            keyBoard.style.backgroundColor = "#ffffff"
        });

    }
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
}

.jian {
    text-align: center;
    background-color: aliceblue;
}

.jianAc {
    text-align: center;
    background-color: rgb(105, 228, 105);
}

.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    padding: 16px;
    border-radius: 5px;
    backdrop-filter: blur(10px);
    /*添加模糊度*/

}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.rongQi {
    height: 100%;
    background: url("@/assets/bac/Kirby_Background_HQ.png") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
</style>