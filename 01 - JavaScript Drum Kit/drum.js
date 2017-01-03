function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio){
        return
    }
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    removeTransition(e);
    // Added removeTransition() because the class "playing" would get stuck if you held the key down. This resolved it
}

function removeTransition(e){
    if(e.propertyName !== 'transform'){
        return;
    }
    this.classList.remove('playing')
};

window.addEventListener('keydown', playSound);

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));