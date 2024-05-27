const swiper = document.querySelector(".swiper-wrapper");
fetch("./swiper.json")
.then((response) => response.json())
.then((data) => {
    console.log("아");
    for(let i=0; i<data.runner.length; i++){
        console.log(data.runner[i].img);
        swiper.innerHTML += `<div class="swiper-slide"><img src="${data.runner[i].img}"></div>`;
    }
})


// Swiper 인스턴스 생성
var mySwiper = new Swiper('.swiper-container', {
    // 옵션 설정
    slidesPerView: 1, // 한 번에 표시할 슬라이드 개수
    spaceBetween: 10, // 슬라이드 간 간격
    // pagination 설정 (페이징)
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // 페이징을 클릭하여 이동 가능하도록 설정
    },
    // navigation 설정 (네비게이션 버튼)
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000, // 각 슬라이드 간의 자동 재생 딜레이 (ms)
        disableOnInteraction: false, // 사용자 상호 작용 시 자동 재생 비활성화 여부
        pauseOnMouseEnter: true, // 마우스 오버시 자동재생 일시정지
        loop: true, // 자동재생
    },
    speed: 1000 // 이동속도
});
