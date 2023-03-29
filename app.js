document.addEventListener('DOMContentLoaded', () => {
    const dino = document.querySelector('.dino');
    let isJamping = false;
    let gravity = 0.9;


    function control(e) {
        if ( e.keyCode === 32) {
            if(!isJamping){
                isJamping = true;
                jump();
            }
        }
    }

    document.addEventListener('keyup', control);

    let position = 0;

    function jump(){
        let count = 0;
        let position = 0;
        let timerId = setInterval(() => {

            // move down
            if (count === 15) {
                clearInterval(timerId)
                console.log('down');
                let downTimerId = setInterval(() => {
                    if(count === 0) {
                        clearInterval(downTimerId);
                        isJamping = false;
                    }
                    position -= 5;
                    count --;
                    position = position * gravity;
                    dino.style.bottom = position + 'px';   
                }, 20)
            }

            // move up
            console.log('up');
            count ++;
            position += 30;
            position = position * gravity;
            dino.style.bottom = position + 'px';
            console.log(dino.style.bottom);  
        }, 20)
    }



})