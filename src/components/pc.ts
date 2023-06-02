import io from 'socket.io-client';
import { onMounted, ref } from 'vue';
import { Chat } from '@/utils/chat';


interface Data {
    type: string;
    msg: string;
}


function init(key: string) {

    const shang: Data = { type: 'move', msg: JSON.stringify({ x: 0, y: 1 }) }
    const xia: Data = { type: 'move', msg: JSON.stringify({ x: 0, y: -1 }) }
    const zuo: Data = { type: 'move', msg: JSON.stringify({ x: -1, y: 0 }) }
    const you: Data = { type: 'move', msg: JSON.stringify({ x: 1, y: 0 }) }


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





    // 客户端 cat

    const btn1 = document.getElementById('zuo')
    const btn2 = document.getElementById('you')
    const btn3 = document.getElementById('shang')
    const btn4 = document.getElementById('xia')

    console.log('代码执行，当前按键是', key)
    if (key == 'W' || key == 'w') {
        Chat(shang)
        changeColor(btn3)
    }
    if (key == 'S' || key == 's') {
        Chat(xia)
        changeColor(btn4)
    }
    if (key == 'A' || key == 'a') {
        Chat(zuo)
        changeColor(btn1)
    }
    if (key == 'D' || key == 'd') {
        Chat(you)
        changeColor(btn2)
    }







}


export { init }