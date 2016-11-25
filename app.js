$(document).ready(function(){

// Get Data

$('form').on('submit', function(){
      event.preventDefault();
      getSongs();
    });

// $('form').on('submit', function(){
//       event.preventDefault();
//       getSongs();
//     });


});


function getSongs(){
  $.ajax({
    type:"GET",
    url:"https://api.spotify.com/v1/search?type=track&query="+$('#song').val(),
    success: showSongs,
    error: handleError
  });
}

function showSongs(response){

var firstTrack = response.tracks.items[0];
$('.btn-play').removeClass('disabled'); //enables play button after search
$('.title').text(firstTrack.name);    //sets the song title
$('.author').text(firstTrack.artists[0].name);    //sets the author
$('.cover-image').attr('src',firstTrack.album.images[0].url);   //sets the image
$('.js-player').attr('src',firstTrack.preview_url);   //plays the preview track

$('.btn-play').on('click', function(){
  $('.btn-play').toggleClass('playing');
  if ($('.btn-play').hasClass('playing')){
    $('.js-player').trigger('play');
  } else {
    $('.js-player').trigger('pause');
  }
  });
}

function handleError (error) {
  console.log("Error!");
  console.log(error.responseText);
}
