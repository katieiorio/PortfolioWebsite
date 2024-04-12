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

// console.log("joyoyo");
function amazonScroll() {
    let amazonContentObjects = document.querySelectorAll(".amazonContent");
    let i = 0
    let length = amazonContentObjects.length;
    for (i; i < length; i++) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;

            if (scrolled >= 1416) {
                const selectAmazonAplusText = document.getElementById("amazonAplusText");
                const selectAmazonAltText = document.getElementById("amazonAltText");
                selectAmazonAplusText.style.display = 'none';
                selectAmazonAltText.style.display = 'block';
            }
            console.log(scrolled);
        });






// window.addEventListener('scroll', () => {
//     const scrolled = window.scrollY;

//     if (scrolled >= 1416) {
//         const selectAmazonAplusText = document.getElementById("amazonAplusText");
//         const selectAmazonAltText = document.getElementById("amazonAltText");
//         selectAmazonAplusText.style.display = 'none';
//         selectAmazonAltText.style.display = 'block';
//     }
//     console.log(scrolled);
// });