
        function showSidebar(){
            const sidebar = document.querySelector('.sidebar')
            sidebar.style.display='flex'
        }
     
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display= 'none'
}



const X = document.getElementById('main-video');
const Y = document.getElementById('playBtn');
const Z = document.getElementById('rangeArea');
const A = document.getElementById('muteBtn');
const B = document.getElementById('volumeArea');

Y.addEventListener('click', function(){
    if(X.paused){
        X.play();
        Y.innerHTML = '&#10074;&#10074;';
    } else{
        X.pause();
        Y.innerHTML = '&#9658;';
    }
})

X.addEventListener('timeupdate', function(){
    const progress = (X.currentTime / X.duration) *100;
    Z.value = progress;
})

Z.addEventListener('input', function(){
    if(!isNaN(X.duration)){
        const time= (Z.value/100)* X.duration;
        X.currentTime = time;
    }
})

A.addEventListener('click', function(){
    if(X.muted){
        X.muted = false;
        A.innerHTML = '&#128266;';
        B.value = X.volume;
    } else{
        X.muted = true;
        A.innerHTML = '&#128263;';
        B.value= 0;
    }
})

B.addEventListener('input', function(){
    X.volume = B.value;
    if(B.value > 0){
        X.muted = false;
        A.innerHTML = '&#128263;';
    }
})



