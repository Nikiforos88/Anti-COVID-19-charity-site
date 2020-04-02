$(function(){
    $('.selectpicker').selectpicker();
});

$('.navbar-toggler-icon').click(function(){  
    if ($('#navbarMenu').hasClass('show')) {
        $('#navbarMenu').removeClass('show');
        return false;
    }
  });