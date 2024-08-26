const lightbox = {
    gallery: document.querySelector(".gallery"),
    init: function () {
        this.container = document.createElement("div");
        this.container.id = "lightbox";
        document.body.appendChild(this.container);

        this.lightboxImg = document.createElement("img");
        this.container.appendChild(this.lightboxImg);

        this.loadImages();
    },
    loadImages: function (keywordsArr, defSize = "300/300") {
        let keywords = ["random=1","random=2","random=3","random=4","random=5",
                        "random=6","random=7","random=8","random=9","random=10"];
        if (keywordsArr) keywords = keywordsArr;

        //        <img src="https://picsum.photos/300/300?random=1" alt="">
        let htmlCode = "";
        for (let keyword of keywords) {
            keyword = keyword.trim().toLocaleLowerCase();

            const url = `https://picsum.photos/${defSize}?${keyword}`;
            htmlCode += `<img src="${url}" alt="${keyword}">`
        }
        this.gallery.innerHTML = htmlCode;

        this.addListeners();
    },
    addListeners: function() {
        const images = document.querySelectorAll(".gallery img");
        images.forEach (img => {
            img.addEventListener("click",
                (event) => this.galleryImgClicked(img));
        });
        this.container.addEventListener("click", (event) => {
            this.hide();
        })
    },
    galleryImgClicked: function(img) {
        this.show(img);
    },
    show: function (img) {
        this.lightboxImg.src = img.src;
        this.container.classList.add("active");
    },
    hide: function () {
        this.container.classList.remove("active");
    }
};

lightbox.init();