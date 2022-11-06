window.addEventListener('load', () => {
    let video = document.querySelector('#video');
    let body = document.querySelector('body');
    let source = document.querySelector('source');
    let controlsPanel = document.querySelector('.controls');
    let player = document.querySelector('.player');
    if (localStorage.getItem('bgcolor')) body.style.backgroundColor = localStorage.getItem('bgcolor');
    if (localStorage.getItem('source')) {
        source.src = localStorage.getItem('source');
        video.load();
    }
    if (localStorage.getItem('volume')) video.volume = localStorage.getItem('volume');
    else video.volume = 0.5;
    if (localStorage.getItem('videoTime')) video.currentTime = localStorage.getItem('videoTime');
    if (localStorage.getItem('controlsBgc')) controlsPanel.style.backgroundColor = localStorage.getItem('controlsBgc');
    else controlsPanel.style.backgroundColor = 'rgb(179, 74, 78)';
    if (localStorage.getItem('playerBoxShadow')) player.style.boxShadow = localStorage.getItem('playerBoxShadow');
    else player.style.boxShadow = '15px 15px rgba(30, 27, 27, 0.82)';

    document.querySelector('#playBtn').addEventListener('click', () => {
        if (video.paused) {
            video.play();
        }
    });
    document.querySelector('#pauseBtn').addEventListener('click', () => {
        video.pause();
    });
    document.querySelector('#leftBtn').addEventListener('click', () => {
        video.currentTime -= 10;
    });
    document.querySelector('#rightBtn').addEventListener('click', () => {
        video.currentTime += 10;
    });
    document.querySelector('#volupBtn').addEventListener('click', () => {
        video.volume += 0.1;
        localStorage.setItem('volume', video.volume);
    });
    document.querySelector('#voldownBtn').addEventListener('click', () => {
        video.volume -= 0.1;
        localStorage.setItem('volume', video.volume);
    });

    document.querySelector('#firstVideo').addEventListener('click', () => {
        source.src = 'videos/video1.mp4';
        body.style.backgroundColor = '#221f25';
        localStorage.setItem('source', 'videos/video1.mp4');
        localStorage.setItem('bgcolor', '#221f25');
        controlsPanel.style.backgroundColor = 'rgb(179, 74, 78)';
        localStorage.setItem('controlsBgc', 'rgb(179, 74, 78)');
        player.style.boxShadow = '15px 15px rgba(30, 27, 27, 0.82)';
        localStorage.setItem('playerBoxShadow', '15px 15px rgba(30, 27, 27, 0.82)');
        video.load();
    });
    document.querySelector('#secondVideo').addEventListener('click', () => {
        source.src = 'videos/video2.mp4';
        body.style.backgroundColor = '#1c2a38';
        localStorage.setItem('source', 'videos/video2.mp4');
        localStorage.setItem('bgcolor', '#1c2a38');
        controlsPanel.style.backgroundColor = 'rgba(232, 218, 122, 0.89)';
        localStorage.setItem('controlsBgc', 'rgba(232, 218, 122, 0.89)');
        player.style.boxShadow = '15px 15px rgb(19, 34, 43)';
        localStorage.setItem('playerBoxShadow', '15px 15px rgb(19, 34, 43)');
        video.load();
    });
    document.querySelector('#thirdVideo').addEventListener('click', () => {
        source.src = 'videos/video3.mp4';
        body.style.backgroundColor = '#1b1315';
        localStorage.setItem('source', 'videos/video3.mp4');
        localStorage.setItem('bgcolor', '#1b1315');
        controlsPanel.style.backgroundColor = 'rgba(240,163,25,0.86)';
        localStorage.setItem('controlsBgc', 'rgba(240,163,25,0.86)');
        player.style.boxShadow = '15px 15px rgba(13, 5, 4, 0.91)';
        localStorage.setItem('playerBoxShadow', '15px 15px rgba(13, 5, 4, 0.91)');
        video.load();
    });

    setInterval(() => localStorage.setItem('videoTime', video.currentTime), 1000);
})