jQuery(function($) {});
jQuery(function($) {
    $('.et-social-icon a, .et-extra-social-icon a').attr('target', '_blank');
});
document.addEventListener('DOMContentLoaded', function(event) {
    if (window.location.hash && !(window.location.hash.includes('targetText='))) {
        setTimeout(function() {
            if (window.hasOwnProperty('et_location_hash_style')) {
                window.db_location_hash_style = window.et_location_hash_style;
            } else {
                window.scrollTo(0, 0);
                var db_hash_elem = document.getElementById(window.location.hash.substring(1));
                if (db_hash_elem) {
                    window.db_location_hash_style = db_hash_elem.style.display;
                    db_hash_elem.style.display = 'none';
                }
            }
            setTimeout(function() {
                var elem = jQuery(window.location.hash);
                elem.css('display', window.db_location_hash_style);
                et_pb_smooth_scroll(elem, false, 800);
            }, 700);
        }, 0);
    }
});
jQuery(function($) {
    $('#et-info .et-social-icons').prependTo('#et-secondary-menu');
    $('#et-secondary-menu .et_duplicate_social_icons').remove();
});
jQuery(function($) {
    $('#et-info-phone').wrap(function() {
        var num = '(907) 242-2082';
        num = num.replace(/[^0-9+]+/g, '-');
        num = num.replace(/^[-]|[-]$/g, '');
        return '<a href="tel:' + num + '"></a>';
    });
});
