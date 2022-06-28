$(document).ready(function(){
  $(".latest-news").owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    navText: ["Anterior","Próximo"],
    responsive : {
      0 : {
        items: 1,
      },
      480 : {
        items: 1,
      },
      768 : {
        items: 4,
      },
      1200 : {
        items: 6,
      }
    }
  })
});

$(function() {
  $(".news .item").on("click", function() {
    
    $("video").attr( {
      "src": "./assets/mp4/"+$(this).data('video')+".mp4",
      "poster": "./assets/images/"+$(this).data('video')+".jpg"
    });
  });
});

// const owl = $(".item").data(owlCarousel)

// $("#btn-prev").on("click", () => {
//   owl.prev();
// })
// $("#btn-next").on("click", () => {
//   owl.next();
// })

const owl = $(".owl-carousel");

$('#btn-prev').click(function(){
  owl.trigger('prev.owl.carousel')
});

$('#btn-next').click(function(){
  owl.trigger('next.owl.carousel')
});

const element = $("#header");

$(".menu").click(function() {
  element.toggleClass("open-menu");
})