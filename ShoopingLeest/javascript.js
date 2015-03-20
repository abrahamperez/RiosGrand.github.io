$('button').on('click',function(){
  var item = $('input').val();
  $('ul').append('<li>'+item+"</li>");
})
