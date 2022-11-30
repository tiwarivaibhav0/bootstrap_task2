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

$('.loop').owlCarousel({
  center: true,
  items:2,
  loop:true,
  margin:50,
  responsive:{
    
      600:{
          items:2
      }
  }
});