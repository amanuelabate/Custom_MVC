jQuery(document).ready(function() {
    jQuery('.tabs.standard .tab-links a').on('click', function(e) {
        var currentAttrValue = jQuery(this).attr('href');
        jQuery('.tabs ' + currentAttrValue).show().siblings().hide();
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });
    jQuery('.tabs.animated-fade .tab-links a').on('click', function(e) {
        var currentAttrValue = jQuery(this).attr('href');
        jQuery('.tabs ' + currentAttrValue).fadeIn(400).siblings().hide();
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });
    jQuery('.tabs.animated-slide-1 .tab-links a').on('click', function(e) {
        var currentAttrValue = jQuery(this).attr('href');
        jQuery('.tabs ' + currentAttrValue).siblings().slideUp(400);
        jQuery('.tabs ' + currentAttrValue).delay(400).slideDown(400);
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });
    jQuery('.tabs.animated-slide-2 .tab-links a').on('click', function(e) {
        var currentAttrValue = jQuery(this).attr('href');
        jQuery('.tabs ' + currentAttrValue).slideDown(400).siblings().slideUp(400);
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });
});