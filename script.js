// ��ȡ���Ű�ť����ƵԪ��
const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('.pause-btn');
const audio = document.querySelector('audio');

// ������Ű�ťʱ������Ƶ
playBtn.addEventListener('click', function () {
    audio.play();
});

// �����ͣ��ťʱ��ͣ��Ƶ
pauseBtn.addEventListener('click', function () {
    audio.pause();
});

