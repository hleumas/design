$(function() {
    $('a.email').each(function() {
        $(this).text($(this).text().replace('(zavináč)', '@'));
        $(this).attr('href', $(this).attr('href').replace('(zavináč)', '@'));
    });
});
