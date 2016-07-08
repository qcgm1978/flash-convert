$(function () {
    var words = ["cave", "skate", "lake", "plane", "rainy"];
    var randomArr = shuffle([...Array(words.length).keys()])
    $('.chart .img div').css('background-image', function (i, n) {
        var random = randomArr[i];
        $(this).attr('word', words[random])
        return 'url(images/' +
            (random + 1) +
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
    $('.word [word]').click({},
        function (evt) {
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
                var that = this;
                setTimeout(function () {
                    $(that).removeClass('sound')
                }, 1000)
            }
        }
    )
    $('.img').click({word: {ini: true}}, function (evt) {
        if ($(this).parents('.word').length > 0) {
            var word = $(this).next().attr('word');
            evt.data.word.right = word;
        } else {
            var word = $(this).children('div').attr('word');
            evt.data.word.left = word;
        }
        if (evt.data.word.left == evt.data.word.right && !evt.data.word.ini) {
            var that = this;
            var moveObj = $('.word [word=' +
                evt.data.word.left +
                ']').prev();
            var $chartObj = $('.chart .img div').filter('[word=' +
                evt.data.word.left +
                ']').parent();
            var offset = $chartObj.index() - moveObj.index('.word .img');
            moveObj
                .next()
                .addBack()
                .animate({
                    left: "-110",
                    top: (86 + 10) * offset
                }, 1000, function () {
                    $(moveObj)
                        .css({
                            'background-image': 'url("images/bg.png")',
                            'background-size': 'cover',
                            'transform': 'rotateY(0)'
                        })
                        .add($chartObj).removeClass('shadow')
                        .addClass('correct-transition');
                    $(moveObj)
                        .css('transform', 'rotateY(180deg) scale(1.1)');
                    $chartObj.css('transform', 'scale(1.1)');
                    setTimeout(()=> {
                        $(moveObj)
                            .css('transform', 'rotateY(180deg) scale(1)');
                        $chartObj.css('transform', 'scale(1)').css('z-index',0);
                    }, 2000);

                });
        } else {
            $('.img').removeClass('shadow');
            $(this).addClass('shadow')
        }
        evt.data.word.ini = false;
    });
});