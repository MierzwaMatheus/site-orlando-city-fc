$(document).ready(function(){
  $(".latest-news").owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    navText: ["Anterior","Próximo"],
    responsive: {
      0: {
        item: 1
      },
      480: {
        item: 3
      },
      768: {
        item: 4
      },
      1200: {
        item: 6
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