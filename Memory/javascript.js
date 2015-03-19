$(document).ready(function(){
  var card_array = ["Tokyo Ghoul", "Tokyo Ghoul", "DBZ", "DBZ", "Bobobo", "Bobobo", "Broly", "Broly", "Levi", "Levi", "Grandma", "Grandma", "Blackarot", "Blackarot", "Shamu", "Shamu", "It G Ma", "It G Ma", "Ye", "Ye"];
  var click_count = 0;
  var click_1 = 'nothing';
  var click_2 = 'nothing';
  
  function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}
	var fluffled_array = shuffle(card_array);
  
  for(i in fluffled_array){
    $('#card_holder').append('<div class="card"><p>'+fluffled_array[i]+'</p></div>');
  };
  $('.card').click(function(){
    if(click_count == 0){
  	$(this).find('p').css('opacity', 1);
    $(this).find('p').addClass('clicked');  
      click_count = 1;
      click_1 = $(this).find('p').text();
    }
    else{	
      $(this).find('p').css('opacity', 1);
      click_count = 0;
      click_2 = $(this).find('p').text();
      $(this).find('p').addClass('clicked');
      if(click_1 != click_2){
         setTimeout(function(){$('.clicked').css('opacity', '0').removeClass('clicked')}, 1000);
      }
    };
	});
});
