const page1 = document.querySelector(".survey-1");
const page2 = document.querySelector(".survey-2");
const page_mapper = {
    "1": page1,
    "2": page2,
};

function turn_page(prev, next) {
    page_mapper[prev].style.display = "none";
    page_mapper[next].style.display = "flex";
}