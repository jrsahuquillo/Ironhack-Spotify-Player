$(document).ready(function(){

// Get Data

$('form').on('submit', function(){
      event.preventDefault();
      getSongs();
    });

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
$('.cover').empty();
$('.title').text(firstTrack.name);
$('.author').text(firstTrack.artists[0].name);
var img = firstTrack.album.images[0].url;
var html = "<img class='album_picture' src =" + img + " >";
$('.cover').append(html);
console.log(firstTrack.album.images[0].url);

}

function handleError (error) {
  console.log("Error!");
  console.log(error.responseText);
}
