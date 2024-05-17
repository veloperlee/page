function brochure(prefix = "", img_length = 1, suffix = "") {

    const brochure_wrap = document.createElement("div");
    brochure_wrap.className = "brochure_wrap";

    document.body.append(brochure_wrap);



    document.addEventListener("keydown", keyDownHandler, false);


    function setImage(page) {
        // document.querySelector(".brochure_view .image img").setAttribute("src", `img/2023_Brochure-${page}.jpg`);
        // document.querySelector(".brochure_view .image img").setAttribute(prefix = "src", img_length = `img/2023_Brochure-${page}`, suffix = ".jpg" );

        const image = document.querySelector(".brochure_view .image img").setAttribute("src", prefix + page + suffix);
    }

    function goLeft() {
        const page = location.hash.substring(1);
        if (page > 1) {
            // showPage(--brochure_view.dataset.page);
            location.hash = '#' + (page - 1);
        }
    }

    function goRight() {
        const page = location.hash.substring(1);
        if (page < img_length) {
            // showPage(++brochure_view.dataset.page);
            location.hash = '#' + (page * 1 + 1);
        }
    }

    // 첫번째, 마지막 페이지 방향키 숨기기
    function showPage(page) {
        setImage(page);
        if (page <= 1) {
            document.querySelector(".brochure_view .button .left_button").classList.add("hide");
        } else {
            document.querySelector(".brochure_view .button .left_button").classList.remove("hide");
        }
        if (page == img_length) {
            document.querySelector(".brochure_view .button .right_button").classList.add("hide");
        } else {
            document.querySelector(".brochure_view .button .right_button").classList.remove("hide");
        }
    }

    // 방향키, ESC키 기능
    function keyDownHandler(event) {
        const brochure_view = document.querySelector(".brochure_view");
        if (!brochure_view) return;
        if (event.key == "ArrowLeft") {
            goLeft();
        } else if (event.key == "ArrowRight") {
            goRight();
        } else if (event.key == "Escape") {
            location.hash = '#';
        }
    }

    function view(page) {
        // const page = event.target.closest(".page").dataset.page;
        // 클릭시 view 전체 박스
        const brochure_view = document.createElement("div");
        brochure_view.className = "brochure_view";

        console.log(brochure_view);
        // 클릭시 이미지 표시
        const image = document.createElement("div"); // <div></div>
        image.className = "image"; // <div class="image"></div>
        const img = document.createElement("img"); // <div></div>
        // img.setAttribute("src", `img/2023_Brochure-${page}.jpg`);
        // img.setAttribute("src", event.target.getAttribute("src"));
        image.append(img);

        // 클릭시 버튼 표시
        const button = document.createElement("div");
        button.className = "button";

        const left_button = document.createElement("button");
        left_button.className = "left_button";

        left_button.addEventListener("click", goLeft);

        const right_button = document.createElement("button");
        right_button.className = "right_button";
        // right_button.addEventListener("click", function (event) {
        //     if (brochure_view.dataset.page < img_length) {
        //         img.setAttribute("src", `img/2023_Brochure-${brochure_view.dataset.page * 1 + 1}.jpg`);
        //         brochure_view.dataset.page++;
        //     }
        // });
        right_button.addEventListener("click", goRight);





        left_button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>`;
        right_button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>`;
        // const svg_left = document.createElement("img"); // <svg>
        // svg_left.setAttribute("src", `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --%3E%3Cpath d='M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z'/%3E%3C/svg%3E`);
        // left_button.append(svg_left);

        button.append(left_button, right_button);

        // 닫기 버튼
        const close = document.createElement("div");
        close.className = "close";

        close.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>`;

        brochure_view.append(close);

        close.addEventListener("click", function () {
            location.hash = '#';
        })

        brochure_view.addEventListener("click", function (event) {
            // console.log("event", event.target);
            // console.log(event.target.classList.contains("brochure_view"));
            if (event.target == brochure_view) {
                location.hash = '#';
            }
        })

        brochure_view.append(image, button);

        document.querySelector("body").append(brochure_view);
        showPage(page);
    }




    for (i = 1; i <= img_length; i++) {

        // 전체 박스
        const div_page = document.createElement("div"); // <div></div>
        // div_page.dataset.page = i;

        // 이미지 표시
        const div_image = document.createElement("div"); // <div></div>
        div_image.className = "image"; // <div class="image"></div>
        const img = document.createElement("img"); // <div></div>
        // img.setAttribute("src", `img/2023_Brochure-${i}.jpg`);
        img.setAttribute("src", prefix + i + suffix);
        div_image.append(img);

        // 페이지 번호 표시
        const div_text = document.createElement("div"); // <div></div>
        div_text.className = "text"; // <div class="text"></div>
        div_text.textContent = i + "Page";

        div_page.append(div_image);
        div_page.append(div_text);

        const a = document.createElement("a");
        a.className = "page"; // <div class="page"></div>
        a.href = "#" + i;
        a.append(div_page);

        document.querySelector(".brochure_wrap").append(a);


    }

    function hashChange() {
        const page = location.hash.substring(1);
        const brochure_view = document.querySelector(".brochure_view");
        if (brochure_view) brochure_view.remove();
        if (page) view(page);
    }

    window.onhashchange = hashChange;
    hashChange();
}
