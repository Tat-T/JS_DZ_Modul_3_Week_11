$(document).ready(function() {
    $('.frame6 button').hover(function() {
        // Создаем элемент подсказки
        var tooltip = $('<div class="tooltip top"></div>');
        tooltip.text($(this).attr('data-tooltip'));
        $('body').append(tooltip);

        // Позиционируем подсказку
        var btnOffset = $(this).offset();
        var tooltipHeight = tooltip.outerHeight();
        var tooltipWidth = tooltip.outerWidth();
        var topPosition = btnOffset.top - tooltipHeight - 10; // 10px отступ сверху
        var leftPosition = btnOffset.left + ($(this).outerWidth() / 2) - (tooltipWidth / 2);

        // Проверяем, помещается ли подсказка сверху
        if (topPosition < $(window).scrollTop()) {
            // Если не помещается сверху, позиционируем снизу
            topPosition = btnOffset.top + $(this).outerHeight() + 10; // 10px отступ снизу
            tooltip.removeClass('top').addClass('bottom');
        } else {
            tooltip.removeClass('bottom').addClass('top');
        }

        tooltip.css({
            top: topPosition,
            left: leftPosition
        }).fadeIn(200);
    }, function() {
        // Удаляем подсказку
        $('.tooltip').remove();
    });
});
