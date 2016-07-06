$(function () {
    var words = ["way", "bay", "tail", "day", "play"];
    $('.chart:even .img div').css('background-image', function (i, n) {
        return 'url(images/' +
            (i + 1) +
            '.png)';
    })
    $('.left .img:gt(4)').after(function (i, n) {
        var $div=$('<div>')
        var $img=$('<img>',{
            src:'images/1110001.png'
        });
        $div.append($img).append($('<div>').text(words[i]))
        return $div;
    })
});