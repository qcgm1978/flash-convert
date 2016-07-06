$(function () {
    var words = ["cave", "skate", "lake", "plane", "rainy"];
    $('.chart:even .img div').css('background-image', function (i, n) {
        return 'url(images/' +
            (i + 1) +
            '.png)';
    })
    $('.left .img:gt(4)').after(function (i, n) {
        var $div = $('<div>')
        var word = words[i];
        var $img = $('<img>', {
            src: 'images/1110001.png',
            alt: word
        });
        $div.append($img).append($('<div>').text(word))
        return $div;
    })
    $('[src="images/1110001.png"]').click({},function (evt) {
        var word = $(this).attr('alt');
        if ($.isEmptyObject(evt.data[word])) {
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'sounds/' + word + '.mp3');
            audioElement.setAttribute('autoplay', 'autoplay');
            evt.data[word] = audioElement
            audioElement.play();
        } else {
            evt.data[word].play();
        }
    });
});