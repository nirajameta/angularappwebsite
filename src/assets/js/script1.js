(function(){
    // setup your carousels as you normally would using JS
    // or via data attributes according to the documentation
    // https://getbootstrap.com/javascript/#carousel
    $('#carousel123').carousel({ interval: 2000 });
    $('#carouselABC').carousel({ interval: 3600 });
  }());

  // (function(){
   
  //   // setup your carousels as you normally would using JS
  //   // or via data attributes according to the documentation
  //   // https://getbootstrap.com/javascript/#carousel
  //   $('.nav-link').on('click',function() {
  //     alert("Calling")
  //     $('#navbarSupportedContent').collapse('hide');
  //   });
  // }());
  
  (function(){
      // alert("Calling")
    $('.carousel-showsixmoveone .item').each(function(){
      var itemToClone = $(this);
  
      for (var i=1;i<6;i++) {
        itemToClone = itemToClone.next();
  
        // wrap around if at end of item collection
        if (!itemToClone.length) {
          itemToClone = $(this).siblings(':first');
        }
  
        // grab item, clone, add marker class, add to collection
        itemToClone.children(':first-child').clone()
          .addClass("cloneditem-"+(i))
          .appendTo($(this));
      }
    });
  }());


  

 

  // $(document).ready(function(){
   
  // });






  