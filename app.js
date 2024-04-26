function imageTitleHover() {
    let imageHovers = document.querySelectorAll(".homeImageLinks");
    let i = 0
    let length = imageHovers.length;
    for (i; i < length; i++) {
        if (document.addEventListener) {
            imageHovers[i].addEventListener("mouseover", function (index) {
                return function () {
                    imageHovers[index].firstElementChild.style.display = 'flex';
                };
            }(i));
        }
        if (document.addEventListener) {
            imageHovers[i].addEventListener("mouseout", function (index) {
                return function () {
                    imageHovers[index].firstElementChild.style.display = 'none';
                };
            }(i));
        };
    };
};

imageTitleHover();

function homeLinks() {
    const webDiv = document.getElementById("homeImageLink1");
    const motionDiv = document.getElementById("homeImageLink2");
    const brandingDiv = document.getElementById("homeImageLink3");
    const amazonDiv = document.getElementById("homeImageLink4");
        if (webDiv) {
            webDiv.addEventListener("click", function() {
                window.location.href = "development.html";
            });
        } 
        if (motionDiv) {
            motionDiv.addEventListener("click", function() {
                window.location.href = "motion.html";
            });
        }
        if (brandingDiv) {
            brandingDiv.addEventListener("click", function() {
                window.location.href = "branding.html";
            });
        }
        if (amazonDiv) {
            amazonDiv.addEventListener("click", function() {
                window.location.href = "amazon.html";
            });
        }
}
homeLinks();











//katie's web development motto

if (hardwork === true) {
    success();
} else {
    return "Condition does not exist";
}













const webDiv = document.getElementById("homeImageLink1");
const motionDiv = document.getElementById("homeImageLink2");
const brandingDiv = document.getElementById("homeImageLink3");
const amazonDiv = document.getElementById("homeImageLink4");

    webDiv.addEventListener('click', function() {
        window.location.href = "development.html";
    })
    motionDiv.addEventListener('click', function() {
        window.location.href = "motion.html";
    })
    brandingDiv.addEventListener('click', function() {
        window.location.href = "branding.html";
    })
    amazonDiv.addEventListener('click', function() {
        window.location.href = "amazon.html";
    })


    // function amazonScroll() {
    //     const scrollArray = [1];
    //     window.addEventListener('scroll', function () {
    //         scrollArray.push(window.scrollY);
    //         const lastIndex = scrollArray.length - 1;
    //         const rect = document.getElementById("amazonAlt").getBoundingClientRect();
    //         if (scrollArray[lastIndex] >= (rect.top + window.scrollY)) {
    //             const selectAmazonAplusText = document.getElementById("amazonAplusText");
    //             const selectAmazonAltText = document.getElementById("amazonAltText");
    //             selectAmazonAplusText.style.display = 'none';
    //             selectAmazonAltText.style.display = 'flex';
    //             console.log("yoyoyo");
    //         }
    //         else {
    //             const selectAmazonAplusText = document.getElementById("amazonAplusText");
    //             const selectAmazonAltText = document.getElementById("amazonAltText");
    //             selectAmazonAplusText.style.display = 'flex';
    //             selectAmazonAltText.style.display = 'none';
    //             console.log("yoyoyo");
    //             console.log(window.scrollY);
    //         }
    //     });
    // }
    
    // amazonScroll();