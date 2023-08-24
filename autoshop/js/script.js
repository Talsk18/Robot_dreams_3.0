const imgs = document.querySelectorAll("img");

for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', function () {
        if (imgs[i].classList.contains("animation")) {
            imgs[i].classList.add("deanimate");
        } else {
            imgs[i].classList.add("animation");
        }
    })
}



