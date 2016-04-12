$('.settings .row:nth-child(2) span:nth-child(2), .app-settings .row:nth-child(1) span:nth-child(2), .app-settings .row:nth-child(2) span:nth-child(2), .access .row:nth-child(1) span:nth-child(2), .access .row:nth-child(2) span:nth-child(2)').click(function() {
    var item = $(this);
    item.hasClass('clean') ? item.removeClass('clean') : item.addClass('clean');
});
