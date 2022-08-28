$(document).ready(function() { 
  var navbarToggle = '.navbar-toggle'; // name of navbar toggle, BS3 = '.navbar-toggle', BS4 = '.navbar-toggler'  
  $('.dropdown, .dropup').each(function() {
    var dropdown = $(this),
      dropdownToggle = $('[data-toggle="dropdown"]', dropdown),
      dropdownHoverAll = dropdownToggle.data('dropdown-hover-all') || false;
    
    // Mouseover
    dropdown.hover(function(){
      var notMobileMenu = $(navbarToggle).size() > 0 && $(navbarToggle).css('display') === 'none';
      if ((dropdownHoverAll == true || (dropdownHoverAll == false && notMobileMenu))) { 
        dropdownToggle.trigger('click');
      }
    })
  });
});

    function init() {
        window.addEventListener('scroll', function(e){
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 100,
                header = document.querySelector("header");
            if (distanceY > shrinkOn) {
                classie.add(header,"smaller");
            } else {
                if (classie.has(header,"smaller")) {
                    classie.remove(header,"smaller");
                }
            }
        });
    }
    window.onload = init();
	
	
$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('show');

});