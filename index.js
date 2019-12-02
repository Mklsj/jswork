setInterval(function () {
    $.get('http://api.youngam.cn/picapi.php', function (data) {
        $('#pic_content').prepend(
            '<li><img src="' + data + '" alt=""></li>');
    });

//删除最后一个li
$('#pic_content li:last-child').remove();
$('#pic_content li:last-child').css({
    transform: 'scale(1.1) rotate(' + parseInt((Math.random() - 0.5) * 20) + 'deg)',
    opacity: '0'
});
}, 8000);