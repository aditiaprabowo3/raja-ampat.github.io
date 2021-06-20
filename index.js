// owlcarousel
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        autoplay:true,
        dots:false,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            700:{
                items:2
            },
            900:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
});


// navbar
$(window).scroll(function () {
    if($(window).scrollTop()) {
        $(".navbar").addClass("putih")
    }
    else {
        $(".navbar").removeClass("putih")
    }
});


// thumbnail

let thumbnail = document.getElementsByClassName('thumbnail')
let activeImage = document.getElementsByClassName('active')

for (var i=0; i < thumbnail.length; i++) {

    thumbnail[i].addEventListener('mouseover', function() {
        if(activeImage.length > 0) {
            activeImage[0].classList.remove('active')
        }

        this.classList.add('active')
        document.getElementById('big-photo').src = this.src
    })
}