$(function () {
    var words = ["way", "bay", "tail", "day", "play"];
    $('.chart:even .img div').css('background-image', function (i, n) {
        return 'url(images/' +
            (i + 1) +
            '.png)';
    })
    $('.left:odd .img').append(function (i, n) {
        return $('<span>').text(words[i]);
    })
});