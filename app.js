document.addEventListener('DOMContentLoaded', () => {
    const dino = document.querySelector('.dino');


    function control(e) {
        if ( e.keyCode === 32) {
            console.log('pressed');
        }
    }

    document.addEventListener('keyup', control);


})