$(function () {
    var words = ['hair', 'face', 'eye', 'eyes', 'ear', 'ears', 'nose', 'mouth', 'big', 'small', 'short', 'long']
    for (var i = 0; i < 12; i++) {
        var $article = $('<article>');
        var index = (i + 1);
        var m = index > 9 ? '' : '0'
        var endWithS = words[i].endsWith('s');
        var strWithS = words[i].slice(0, -1) + '<i>' + words[i].slice(-1) + '<i>';
        var html = endWithS ? strWithS : words[i];
        var $trumpet = $('<div>').addClass('trumpet');
        var $img = $('<img>', {
            src: 'images/000' + m + index + '.png'
        }).addClass('img');
        $article
            .append($img)
            .append($('<strong>', {
                html: html
            }))
            .append($trumpet)
        $('section').append($article)
    }
    function playSound(evt, text) {
        var word = text;
        if ($.isEmptyObject(evt.data[word])) {
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'sounds/' + word + '.mp3');
            audioElement.setAttribute('autoplay', 'autoplay');
            evt.data[word] = audioElement
            audioElement.play();
        } else {
            evt.data[word].play();
        }

    }

    $('.trumpet').click({},
        function (evt) {
            $(this).addClass('sound')
            setTimeout(function () {
                $(evt.target).removeClass('sound')
            }, 1000)
            playSound.call(this, evt, $(this).prev().text());
        }
    )
    var $frog = $('<img>', {
        src: 'frog.png'
    }).addClass('section-frog')
    var arr = shuffle([...Array(12).keys()])
    var index = 0
    $('footer').click({}, function (evt) {
        playSound.call(this, evt, 'GuaGua');
        if ($('.section-frog').length == 0) {
            $('.frog').hide();
            $frog.appendTo('section')
        }
        var numberCol = Math.floor(document.body.clientWidth/document.querySelector('article').offsetWidth);
        var column = parseInt(arr[index] % numberCol), row = parseInt(arr[index] / numberCol);
        $('.section-frog').css({
            left: $('article').width() * column + 6,
            top: 162 * row
        })
        if (index < 12) {
            index++;
        } else {
            index = 0;
        }
    })
    $('h1 img').click(function (evt) {
        var arr = shuffle($('article'));
        $('section').prepend(arr)
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
});