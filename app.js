function imageTitleHover() {
    let imageHovers = document.querySelectorAll(".homeImageLinks");
    let i = 0
    let length = imageHovers.length;
    for (i; i<length; i++) {
        if (document.addEventListener) {
            imageHovers[i].addEventListener("mouseover", function() {
                imageHovers[i].firstElementChild.display = block;
            console.log("yoyoyo")
            });
        } else {
            imageHovers[i].attachEvent("onclick", function() {
                // use buttons[i] to target clicked button
            });
        };
    };
};