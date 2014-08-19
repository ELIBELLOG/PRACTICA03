//JavaScript
//espera que el documento este listo//
$(document).ready(function(e){	
  // calcula la altura del dispositivo//
  $('#principal').height($('#page').height());
   // espera que el dispositivo este listo 
  document.addEventListener("deviceready",function (){
       //crea la variable audio apartir del constructor del objeto del plugin que espesificacmos en config.xml//
	   audio=window.plugins.LowlatencyAudio;	 
    audio.preloadFX('do','audio/DO.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('re','audio/RE.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('mi','audio/MI.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('fa','audio/FA.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('sol','audio/SOL.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('la','audio/LA.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('si','audio/SI.mp3',function(){},function(e){alert('Error '+e);});
	})
   $('.nota').bind('touchstart',function(){
	   $(this).addClass('tocada');
	   audio.play($(this).attr('id'));
   }).bind('touchend',function(){
	   $(this).removeClass('tocada');
   });
	
});//ready
