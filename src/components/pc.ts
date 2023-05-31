import io from 'socket.io-client';
import { onMounted } from 'vue';

let ling = '00,00,of\n'
const socket = io("http://45.128.220.103:3000");
function zero() {
    socket.emit('message', { from: 'cat', to: 'car', message: ling });
}


function init(key: string) {


    const socket = io("http://45.128.220.103:3001");


    let zuo = '-1,00,of\n'
    let ling = '00,00,of\n'
    let you = '01,00,of\n'
    let shang = '00,01,of\n'
    let xia = '00,-1,of\n'

    let intervalId: any;
    // 客户端 cat

    const btn1 = document.getElementById('zuo')
    const btn2 = document.getElementById('you')
    const btn3 = document.getElementById('shang')
    const btn4 = document.getElementById('xia')













    if (btn1 != null) {
        if (!intervalId)
            btn1.addEventListener('mousedown', function () {
                btn1.style.backgroundColor = "#35363a";
                btn1.style.color = "white";
                intervalId = setInterval(function () {
                    socket.emit('message', { from: 'cat', to: 'car', message: zuo }); // 坐标
                }, 100);
            });

        btn1.addEventListener('mouseup', function () {
            if (intervalId)
                clearInterval(intervalId);
            zero();
            btn1.style.background = "#f0f0f0"
            btn1.style.color = "black";
            console.log('off');

        });


    }

    if (btn2 != null) {
        if (!intervalId)
            btn2.addEventListener('mousedown', function () {
                btn2.style.backgroundColor = "#35363a";
                btn2.style.color = "white";
                console.log('右')
                intervalId = setInterval(function () {
                    socket.emit('message', { from: 'cat', to: 'car', message: you }); // 坐标
                }, 100);

            });

        btn2.addEventListener('mouseup', function () {
            if (intervalId)
                clearInterval(intervalId);
            zero();
            btn2.style.backgroundColor = "#f0f0f0";
            btn2.style.color = "black";
            console.log('off');

        });


    }
    if (btn3 != null) {

        btn3.addEventListener('mousedown', function () {
            btn3.style.backgroundColor = "#35363a";
            btn3.style.color = "white";
            intervalId = setInterval(function () {
                socket.emit('message', { from: 'cat', to: 'car', message: shang }); // 坐标
            }, 100);

        });

        btn3.addEventListener('mouseup', function () {
            btn3.style.backgroundColor = "#f0f0f0";
            btn3.style.color = "black";
            if (intervalId)
                clearInterval(intervalId);
            zero();
            console.log('off');

        });


    }
    if (btn4 != null) {
        if (!intervalId)
            btn4.addEventListener('mousedown', function () {
                btn4.style.backgroundColor = "#35363a";
                btn4.style.color = "white";
                intervalId = setInterval(function () {
                    socket.emit('message', { from: 'cat', to: 'car', message: xia }); // 坐标
                }, 100);

            });

        btn4.addEventListener('mouseup', function () {
            if (intervalId)
                clearInterval(intervalId);
            zero();
            btn4.style.backgroundColor = "#f0f0f0";
            btn4.style.color = "black";
            console.log('off');

        });

    }

}


onMounted(() => {

    socket.emit('identify', { username: 'cat' }); // 发送标识请求
    socket.emit('message', { from: 'cat', to: 'car', message: '#connect success#' }); // 发送消息给客户端 car
    zero()
})
export { init }