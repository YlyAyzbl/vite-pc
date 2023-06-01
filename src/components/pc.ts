import io from 'socket.io-client';
import { onMounted, ref } from 'vue';

let ling = '00,00,of\n'
// const socket = io("http://45.128.220.103:3000");
function zero() {
    // socket.emit('message', { from: 'cat', to: 'car', message: ling });
}


function init(key: string) {


    // const socket = io("http://45.128.220.103:3001");
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




    let zuo = '-1,00,of\n'
    let ling = '00,00,of\n'
    let you = '01,00,of\n'
    let shang = '00,01,of\n'
    let xia = '00,-1,of\n'


    // 客户端 cat

    const btn1 = document.getElementById('zuo')
    const btn2 = document.getElementById('you')
    const btn3 = document.getElementById('shang')
    const btn4 = document.getElementById('xia')


    if (key == 'W' || key == 'w') {

        changeColor(btn3)
    }
    if (key == 'S' || key == 's') {

        changeColor(btn4)
    }
    if (key == 'A' || key == 'a') {
   
        changeColor(btn1)
    }
    if (key == 'D' || key == 'd') {

        changeColor(btn2)
    }







}


export { init }