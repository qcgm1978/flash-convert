$(function () {
    var words = ["cave", "skate", "lake", "plane", "rainy", 'play', 'sail', 'tail', 'day', 'train', 'way', 'bay'];

    function renderChartImgs(array) {
        var randomArr = shuffle(array)
        $('.chart .img div').each(function (i, n) {
            var random = randomArr[i];
            var imgUrl = 'images/' +
                words[random] +
                '.png';
            var $img = $('<img/>').attr('src', imgUrl)
            $img.on('load', function () {
                $(this).remove(); // prevent memory leaks as @benweet suggested
                $(n).attr('word', words[random])
                $(n).css('background-image',
                    'url(' +
                    imgUrl +
                    ')');
            })
        });
    }

    renderChartImgs([...Array(5).keys()]);
    $('#left-arrow,#right-arrow').click({page: 1}, function (evt) {
        var page = evt.data.page;
        if ($(this).is('#right-arrow')) {
            page = page == 3 ? page : ++page;
        } else {
            page = page == 1 ? page : --page;
        }
        evt.data.page = page;
        if (page < 3) {
            var endIndex = 5 * page == 5 ? 5 : 5 * page;
            renderChartImgs([...Array(5).keys()].map((e, i)=>i + endIndex - 5));
            renderWordsArea(words.slice(endIndex - 5, endIndex));
        } else {
            renderChartImgs([...Array(2).keys()].map((e, i)=>i + 10));
            renderWordsArea(words.slice(10, 10 + 2));
        }
        setPage.call(this, evt, page)
    })
    function setPage(evt, page) {
        $('.word .img')
            .css({'background-image': 'url(images/left-back.png)'})
            .next().addBack().css({
                left: 'auto', top: 'auto',
                'background-size': 'contain'
            })
        if (page == 3) {
            $('#left-arrow').attr('src', 'images/arrow.png')
            $('#right-arrow').attr('src', 'images/arrow-grey.png')
        } else if (page == 2) {
            $('#left-arrow,#right-arrow').attr('src', 'images/arrow.png')
        } else {
            $('#right-arrow').attr('src', 'images/arrow.png')
            $('#left-arrow').attr('src', 'images/arrow-grey.png')
        }
    }

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

    function renderWordsArea(words) {
        $('.left .img').slice(5, 5 + words.length)
            //.next('div.pronounce')
            //.remove()
            //.end()
            .html(function (i, n) {
                var word = words[i];
                var $div = $('<div class="pronounce">')
                    .css({
                        backgroundImage: 'url("images/1110001.png")'
                    })
                    .attr('word', word)
                $div.append($('<div>').addClass('txt').text(word))
                return $div;
            })
    }

    renderWordsArea(words.slice(0, 5));
    $('.pronounce').click({},
        function (evt) {
            if ($(evt.target).is('[word]')) {
                $(evt.target).addClass('sound')
                var word = $(evt.target).attr('word');
                if ($.isEmptyObject(evt.data[word])) {
                    var audioElement = document.createElement('audio');
                    audioElement.setAttribute('src', 'sounds/' + word + '.mp3');
                    audioElement.setAttribute('autoplay', 'autoplay');
                    evt.data[word] = audioElement
                    audioElement.play();
                } else {
                    evt.data[word].play();
                }
                setTimeout(function () {
                    $(evt.target).removeClass('sound')
                }, 1000)
            }
        }
    )
    $('.img').click({word: {ini: true}}, function (evt) {
        if ($(this).parents('.word').length > 0) {
            var word = $(this).find('[word]').attr('word');
            evt.data.word.right = word;
        } else {
            var word = $(this).children('div').attr('word');
            evt.data.word.left = word;
        }
        if (evt.data.word.left == evt.data.word.right && !evt.data.word.ini) {
            var that = this;
            var moveObj = $('.word [word=' +
                evt.data.word.left +
                ']').parent();
            var $chartObj = $('.chart .img div').filter('[word=' +
                evt.data.word.left +
                ']').parent();
            var offset = $chartObj.index() - moveObj.index('.word .img');
            moveObj
                .animate({
                    left: "-110",
                    top: 86  * offset
                }, 1000, function () {
                    $(moveObj)
                        .css({
                            //'transform': 'rotateY(0)'
                        })
                        .add($chartObj).removeClass('shadow')
                        .addClass('correct-transition');
                    $(moveObj)
                        .css('transform', 'scale(1.1)');
                    $chartObj.css('transform', 'scale(1.1)');
                    setTimeout(()=> {
                        $(moveObj)
                            .css('transform', 'scale(1)');
                        $chartObj.css('transform', 'scale(1)').css('z-index', 2).css({'background-image': 'url("images/bg.png")',
                            'background-size': 'cover'
                        });
                    }, 2000);
                });
        } else {
            $('.img').removeClass('shadow');
            $(this).addClass('shadow')
        }
        evt.data.word.ini = false;
    });
});
class Test {
}
export default Test;