$(document).ready(function () {
  var $videoSrc;
  $(".video-btn").click(function () {
    $videoSrc = $(this).data("src");
  });

  $('#myModal').on('shown.bs.modal', function (e) {
          $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" );
  })

  $("#myModal").on("hide.bs.modal", function (e) {
    $("#video").attr("src", $videoSrc);
  });
});

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          stagePadding:100,
          items:2
      }
  }
})