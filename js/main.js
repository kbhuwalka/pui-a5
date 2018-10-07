$(document).ready(function(){
  $('.sidenav').sidenav();
  $('.parallax').parallax();
  $('select').formSelect();

  $('#add_to_cart_button').on("click", function(){
    quantity = $('#quantity_selector').val();
    console.log(quantity);
     M.toast({html: '<span>'+quantity+' items added to the cart</span><button class="btn-flat toast-action">Undo</button>',
              classes:"rounded"});
  });
});
