const alert = document.querySelector(".alert");

function checkbox_validation(classname, count, type="min") {
    var checkboxes = document.querySelector(classname);
    var checked = 0;
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked == true) {
            checked = checked + 1;
        }
    }
    if (checked == 0) {
        return false;
    }
    if (type == "min" && checked >= count) {
        return true;
    }
    if (type == "exact" && checked == count) {
        return true;
    }
    if (type == "max" && checked <=count) {
        return true;
    }
    return false;
}

function show_alert(text) {
    span = alert.getElementsByTagName("span");
    span.innerText = text;
    alert.style.display = "block";
    console.log(alert);
}

function hide_alert() {
    alert.style.display = "none";
}



function check_a1(classname, count, type="exact") {
    okay = checkbox_validation(classname, count, type);
    if (okay == true) {
        turn_page(1, 2);
    } else {
        show_alert("하나를 선택하셔야 합니다!");
        play_url("경고: 최소 한 개");
    }
}

function check_a2(classname, count, type="max") {
    okay = checkbox_validation(classname, count, type);
    if (okay == true) {
        //turn_page(2, 3);
        show_alert("설문이 종료되었습니다.");
    } else {
        show_alert("최소 1개에서 최대 3개까지만 선택할 수 있습니다!");
        play_url("경고: 최소 한 개")
    }
}