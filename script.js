function dohover(event) {
event.target.classList.add("hover_change");
}


function donthover(event) {
event.target.classList.remove("hover_change");
}

hovertest.onmouseover = dohover;
hovertest.onmouseout = donthover;
