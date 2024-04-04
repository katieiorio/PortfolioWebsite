function imageTitleHover() {
    let imageHovers = document.querySelectorAll(".homeImageLinks");
    let i = 0
    let length = imageHovers.length;
    for (i; i<length; i++) {
        if (document.addEventListener) {
            imageHovers[i].addEventListener("mouseover", function(index) {
                return function() {
                    imageHovers[index].firstElementChild.style.display = 'flex';
                    console.log("yoyoyo");
                };
            }(i));
        } 
        if (document.addEventListener) {
            imageHovers[i].addEventListener("mouseout", function(index) {
                return function() {
                    imageHovers[index].firstElementChild.style.display = 'none';
                    console.log("yoyoyo");
                };
            }(i));
        };
    };
};

imageTitleHover();

// console.log("joyoyo");