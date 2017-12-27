$(document).ready(function() {


    // LOGIN MODAL

    // Get the modal
    var modal = document.getElementById('login-wrapper');
    var profileModal = document.getElementById('profile-wrapper');
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            $('.login-box').removeClass('open');
            $('.registration-box').removeClass('open');
            $('.pass-reset-box').removeClass('open');
        }
        else if (event.target == profileModal) {
            profileModal.style.display = "none";
            $('.profile-box').removeClass('open');
        }
    };


    // Login Modal Box
    $('#loginWrapperOpen').click(function(){
        $('.login-box').addClass('open');
    });


    // Registration Box
    // Registration Open
    $('.login-form-reg-button').click(function(){
        $('.login-box').removeClass('open');
        $('.registration-box').addClass('open');
    });
    // Registration Open
    $('#registrationBack').click(function(){
        $('.registration-box').removeClass('open');
        $('.login-box').addClass('open');
    });


    // Reset Password Box
    //Reset Pass Open
    $('.login-form-link').click(function(){
        $('.login-box').removeClass('open');
        $('.pass-reset-box').addClass('open');
    });
    //Reset Pass Back
    $('#passResetBack').click(function(){
        $('.pass-reset-box').removeClass('open');
        $('.login-box').addClass('open');
    });
    // Open New Password Box
    $('#passResetButton').click(function(){
        $('.new-password-box').addClass('open');
    });
    // Close New Password Box
    $('#newPassSubmit').click(function(){
        $('.new-password-box').removeClass('open');
    });

    

    // Top Nav hover
    $(".main-nav-dropdown").hover(function(){
        // menu triangle show
        $('img', this).addClass('show');
    },function(){
        // menu triangle hide
        $('img', this).removeClass('show');
    });

    // Product Favourite Button
    $(".list-page").hover(function(){
        // product facourite icon show
        $('.list-product-fav-icon', this).addClass('show');
    },function(){
        // product facourite icon hide
        $('.list-product-fav-icon', this).removeClass('show');
    });

    // List-page sidebar menu dropdown 

    // Dropdown 1 - list items
    $( "#list-sidebar-heading").click(function() {
        $( "#list-sidebar-heading-dropdown").slideToggle( 200, function() {
          // Animation complete.
          if ($(this).is(':visible'))
          $(this).css('display','flex');
        });
        // + icon toggle
        $(this).find('.mobile-menu-span').toggleClass('open');
    });
    // Dropdown 2 - action sale
    $( "#action-sidebar-heading").click(function() {
        $( "#action-sidebar-heading-dropdown").slideToggle( 200, function() {
          // Animation complete.
          if ($(this).is(':visible'))
          $(this).css('display','flex');
        });
        // + icon toggle
        $(this).find('.mobile-menu-span').toggleClass('open');
    });
    // Dropdown 3 - price 
    $( "#price-sidebar-heading").click(function() {
        $( "#price-sidebar-heading-dropdown").slideToggle( 200, function() {
          // Animation complete.
          if ($(this).is(':visible'))
          $(this).css('display','flex');
        });
        // + icon toggle
        $(this).find('.mobile-menu-span').toggleClass('open');
    });
    // Dropdown 4 - trademark 
    $( "#trademark-sidebar-heading").click(function() {
        $( "#trademark-sidebar-heading-dropdown").slideToggle( 200, function() {
          // Animation complete.
          if ($(this).is(':visible'))
          $(this).css('display','flex');
        });
        // + icon toggle
        $(this).find('.mobile-menu-span').toggleClass('open');
    });
    // Dropdown 4 - size 
    $( "#size-sidebar-heading").click(function() {
        $( "#size-sidebar-heading-dropdown").slideToggle( 200, function() {
          // Animation complete.
          if ($(this).is(':visible'))
          $(this).css('display','flex');
        });
        // + icon toggle
        $(this).find('.mobile-menu-span').toggleClass('open');
    });

    // Text Page Tabs
    $('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
    });
    
    // Text Page Tabs
    $('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
    });

    // Mobile Category menu open
    $('#category-menu-toggle').click(function(){
        $('.mobile-category-menu').addClass('open');
        $('body').addClass('body-scroll');
    });
    // Mobile Category menu close
    $('#mobileCatClose').click(function(){
        $('.mobile-category-menu').removeClass('open');
        $('body').removeClass('body-scroll');
    });

    // Mobile Nav menu open
    $('#nav-menu-toggle').click(function(){
        $('.mobile-nav-menu').toggleClass('open');
        $('body').addClass('body-scroll');
    });
    // Mobile Nav menu close
    $('#mobileNavClose').click(function(){
        $('.mobile-nav-menu').toggleClass('open');
        $('body').removeClass('body-scroll');
    });

    // Mobile Menu Dropdown Toggle
    $('#categoryMenuItem').find('a').click(function (e) {
        e.stopPropagation();
        $(this).parent().toggleClass("active");
    });


    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.header-mobile-top-nav').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();
        
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('.header-mobile-top-nav').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('.header-mobile-top-nav').removeClass('nav-up').addClass('nav-down');
            }
        }
        
        lastScrollTop = st;
    }


});