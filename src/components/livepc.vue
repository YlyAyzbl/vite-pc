<template>
    <div class="rongQi">
        <div class="pad">

            <button id="shang">up</button>
            <button id="zuo">left</button>
            <button id="xia">down</button>
            <button id="you">right</button>

        </div>
        <div class="room">
            <button @keydown="logKey">点击此处激活车辆控制</button>
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



let chaoSheng = ref(false);


function logKey(event: any) {
    console.log(event.key);
}


onMounted(() => {
    init(key);
})



</script>
<style scoped>
#shang,
#xia,
#zuo,
#you {
    border-radius: 10px;
}
</style>