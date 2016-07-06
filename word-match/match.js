$(function () {
var words=["way", "bay", "tail", "day", "play"];
   $('.left:odd .img').append(function (i,n) {
       return $('<span>').text(words[i]);
   })
});