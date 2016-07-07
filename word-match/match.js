$(function () {
    var words = ["cave", "skate", "lake", "plane", "rainy"];
    var randomArr = shuffle([...Array(words.length).keys()])
    $('.chart:even .img div').css('background-image', function (i, n) {
        $(this).attr('word', words[i])
        return 'url(images/' +
            (randomArr[i] + 1) +
            '.png)';
    })
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    $('.left .img:gt(4)').after(function (i, n) {
        var word = words[i];
        var $div = $('<div>')
            .css({
                backgroundImage: 'url("images/1110001.png")'
            })
            .attr('word', word)
        $div.append($('<div>').text(word))
        return $div;
    })
    $('.img').click({}, function (evt) {
        if ($(this).parents('.word').length > 0) {
            if ($(this).is('[word]')) {
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
            } else {
                $(this)
                    .addClass('move move-name')
                    .removeClass('shadow')
                    .next()
                    .addClass('move trumpet');
            }
        } else {
            $('.img').removeClass('shadow');
            $(this).addClass('shadow')
        }
    });
});