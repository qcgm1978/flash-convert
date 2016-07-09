$(function () {
    var words=['hair','face','eye','eyes','ear','ears','nose','mouth','big','small','short','long']
    for (var i = 0; i < 12; i++) {
        var $article = $('<article>');
        var index = (i + 1);
        var m = index > 9 ? '' : '0'
        var endWithS = words[i].endsWith('s');
        var strWithS = words[i].slice(0, -1)+'<i>'+words[i].slice(-1)+'<i>';
        var html = endWithS ? strWithS : words[i];
        $article
            .append($('<img>', {
            src: 'images/000' + m + index + '.png'
        }))
        .append($('<strong>',{
                html: html
            }))
        $('section').append($article)
    }
});