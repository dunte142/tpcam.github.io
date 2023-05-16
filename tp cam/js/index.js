$(document).ready( () => {
  console.log("JQuery Cargado");

  // Cuando hacemos click en "suscribirme" de los form abreviados, abrimos el popup del form completo
  $(".miniform-submit").click(function(){
  
    $('html,body').animate({scrollTop:$(document).height() }) 
      //Si apreto el boton me manda al fianl del documento
  });

  $(".botons").click(function(){
    agradecer();
    cerrarForm();
  });

  



  function agradecer() {
    $(".agradecer.oculto").removeClass("oculto");
  }

  function cerrarForm() {
    $(".formulario").addClass("oculto");
  }





});

