document.addEventListener('DOMContentLoaded', () => {
    const dino = document.querySelector('.dino');
    let isJamping = false;


    function control(e) {
        if ( e.keyCode === 32) {
            if(!isJamping){
                isJamping = true;
                jump();
            }
        }
    }

    document.addEventListener('keyup', control);

    function jump(){
        let position = 0;
        let timerId = setInterval(() => {

            // move down
            if (position === 150) {
                clearInterval(timerId)
                console.log('down');
                let downTimerId = setInterval(() => {
                    if(position === 0) {
                        clearInterval(downTimerId);
                        isJamping = false;
                    }
                    position -= 30;
                    dino.style.bottom = position + 'px';   
                }, 20)
            }

            // move up
            console.log('up');
            position += 30;
            dino.style.bottom = position + 'px';  
        }, 20)
    }



})