function imageTitleHover() {
    let imageHovers = document.querySelectorAll(".homeImageLinks");
    let i = 0
    let length = imageHovers.length;
    for (i; i < length; i++) {
        if (document.addEventListener) {
            imageHovers[i].addEventListener("mouseover", function (index) {
                return function () {
                    imageHovers[index].firstElementChild.style.display = 'flex';
                    console.log("yoyoyo");
                };
            }(i));
        }
        if (document.addEventListener) {
            imageHovers[i].addEventListener("mouseout", function (index) {
                return function () {
                    imageHovers[index].firstElementChild.style.display = 'none';
                    console.log("yoyoyo");
                };
            }(i));
        };
    };
};

imageTitleHover();

function amazonScroll() {
    const scrollArray = [1];
    window.addEventListener('scroll', function () {
        scrollArray.push(window.scrollY);
        const lastIndex = scrollArray.length - 1;
        if (scrollArray[lastIndex] >= 998) {
            const selectAmazonAplusText = document.getElementById("amazonAplusText");
            const selectAmazonAltText = document.getElementById("amazonAltText");
            selectAmazonAplusText.style.display = 'none';
            selectAmazonAltText.style.display = 'flex';
            console.log("yoyoyo");
        }
        else {
            const selectAmazonAplusText = document.getElementById("amazonAplusText");
            const selectAmazonAltText = document.getElementById("amazonAltText");
            selectAmazonAplusText.style.display = 'flex';
            selectAmazonAltText.style.display = 'none';
            console.log("yoyoyo");
            console.log(window.scrollY);
        }
    });
}

amazonScroll();