const audio_permit = document.querySelector(".check-for-audio");
var audio = new Audio();
var check_audio = new Audio();

audio_permit.addEventListener("click", function(){
    audio_permit.style.display = "none";
});

function play_check_audio(link) {
    audio.pause();
    audio.currentTime = 0;
    check_audio.pause();
    check_audio.currentTime = 0;
    check_audio = audio_list[link];
    check_audio.play();
}

function play_url(link) {
    if (check_audio.paused) {
        audio = audio_list[link];
        audio.play();
    }
}

function stop_audio() {
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
}

const check_sound = document.querySelectorAll(".form-check-input");

function play_check(event) {
    if (event.target.checked) {
        play_check_audio("체크");
    } else {
        play_check_audio("체크해제");
    }
}

for (var i = 0; i < check_sound.length; i++) {
    check_sound[i].addEventListener("change", play_check);
}