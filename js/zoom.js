const targets = document.querySelectorAll(".on-focus");
const focus_btn = document.querySelectorAll(".on-focus-btn");
const zoom_div = document.querySelector(".zoom-div");
const text_box = document.querySelector(".text-form");

zoom_div.style.display = "none";


function zoom(event) {
    var rect = event.target.getBoundingClientRect();
    posY = rect.top + window.pageYOffset;
    posL = rect.left;
    zoom_div.style.display="flex";
    zoom_div.style.top=posY+"px";
    zoom_div.style.left=posL+"px";
    zoom_div.innerText=event.target.innerText;
}

for (var i = 0; i < targets.length; i++) {
    targets[i].addEventListener("mouseover", zoom);
}

function exit_zoom(event) {
    zoom_div.style.display="none";
    stop_audio();
}

zoom_div.addEventListener("mouseout", exit_zoom);

for (var i = 0; i < focus_btn.length; i++) {
    focus_btn[i].addEventListener("mouseout", stop_audio);
}