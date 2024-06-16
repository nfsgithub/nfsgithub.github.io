// 获取播放按钮和音频元素
const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('.pause-btn');
const audio = document.querySelector('audio');

// 点击播放按钮时播放音频
playBtn.addEventListener('click', function () {
    audio.play();
});

// 点击暂停按钮时暂停音频
pauseBtn.addEventListener('click', function () {
    audio.pause();
});

