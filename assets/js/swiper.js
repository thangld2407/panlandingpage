
var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination"
    },
    mousewheel: false,
});


let a = document.querySelector(".swiperProduct")


var swiperProduct = new Swiper(a, {
    direction: "vertical",
    sliderPerview: 1,
    pagination: {
        el: ".swiper-pagination",
    },
})

let customer = document.querySelector(".swiperCustomer")
var swiperCustomer = new Swiper(customer, {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination"
    },
    mousewheel: false,
})