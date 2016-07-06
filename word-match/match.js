$(function () {
    var words = ["cave", "skate", "lake", "plane", "rainy"];
    $('.chart:even .img div').css('background-image', function (i, n) {
        return 'url(images/' +
            (i + 1) +
            '.png)';
    })
    $('.left .img:gt(4)').after(function (i, n) {
        var word = words[i];
        var $div = $('<div>')
            .css({
            backgroundImage:'url("images/1110001.png")'
        })
            .attr('word',word)

        $div.append($('<div>').text(word))
        return $div;
    })
    $('[word]').click({},function (evt) {
        $(this).addClass('sound')
        var word = $(this).attr('word');
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