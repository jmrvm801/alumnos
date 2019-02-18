$(document).ready(function(){
  $.post('assets/php/data.php', {method : 'getAlumnos'}, function(r){
    r = JSON.parse(r);
    $.each(r, function(i, e){
      e[5] = moment().diff(e[2], 'years');
      e[5] = (e[5] == 1) ? e[5]+' Año' : e[5]+' Años';
      e[2] = moment(e[2], 'YYYY-MM-DD').format('DD-MMMM-YYYY');
      e[3] = moment(e[3], 'YYYY-MM-DD h:mm:ss').fromNow();
      
      $('.cards').append('<div class="col-lg-4"><div class="card shadow rounded"><div class="card-body"><h3 class="card-title bg-primary titulo text-center">'+e[0]+' '+e[1]+'</h3><p class="card-text collapse h5 text-center" id="collapse'+i+'">cumpleaños: '+e[2]+' / '+e[5]+'</p><a class="btn btn-primary actionTo" data-toggle="collapse" href="#collapse'+i+'">Detalles</a><span class="leftpadding right">'+e[3]+'</span></div></div></div>');
    });
  });
});
