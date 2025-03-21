let flag = false;

function playWithSound(videoId) {
    let videos = document.querySelectorAll("video");

    videos.forEach((vid) => {
        if (vid.id !== videoId) {
            vid.pause();
        }
    });

    let vid = document.getElementById(videoId);
    vid.muted = false;

    if (!flag) {
        flag = true;
        vid.play();
    } else {
        flag = false;
        vid.pause();
    }
}