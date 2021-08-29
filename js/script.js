$(function(){

    let pagin = $('.pagin');
    let contentLeftTopSlider = $('.content-left-top-slider');
    let contentLeftBottomSlider = $('.content-left-bottom-slider');
    let images = $('.images');
    let titlesTeas = $('.titles-teas');
    let namesTeas = $('.names-teas');
    let teaImg = $('.tea-img');
    let navbarCart = $('.navbar-cart');
    let cartPanel = $('.cart-panel');
    let cartClose = $('.cart-close');
    let overlay = $('.overlay');
    let checkout = $('.checkout');
    let noCheckout = $('.no-checkout');
    let subtotalLink = $('.subtotal-link');
    let subtotalLinkOverlay = $('.subtotal-link-overlay');
    let descBox = $('.desc-box');
    let tasteBox = $('.taste-box');
    let aromaBox = $('.aroma-box');
    let backsBox = $('.backs-box');

    function teaImgHide() {
        teaImg.each(function () {
            $(this).fadeOut(600);
        });
    }

    navbarCart.on('click', function () {
        overlay.fadeIn(600);
        cartPanel.css('transform', 'translateX(0)');
    });
    cartClose.on('click', function () {
        cartPanel.css('transform', 'translateX(100%)');
        overlay.fadeOut(600);
    });
    checkout.on('click', function () {
        subtotalLinkOverlay.css('transform', 'translateY(-100%)');
        subtotalLink.css('visibility', 'hidden');
        noCheckout.css('visibility', 'visible');
    });

    pagin.on('click', function () {

        pagin.each(function () {
            $(this).removeClass('pagin-active')
        });
        $(this).addClass('pagin-active');

        param = $(this).attr('id');
        switch (param) {
            case 'pagin1':
                contentLeftTopSlider.css('transform', 'translateX(0)');
                contentLeftBottomSlider.css('transform', 'translateX(-83.33333%)');
                images.css('transform', 'translateY(0)');
                titlesTeas.css('transform', 'translateY(0)');
                namesTeas.css('transform', 'translateY(0)');
                teaImgHide();
                $('#tea1').fadeIn(600);
                descBox.css('transform', 'translateY(0)');
                tasteBox.css('transform', 'translateY(0)');
                aromaBox.css('transform', 'translateY(0)');
                backsBox.css('transform', 'translateY(0)');
                break;
            case 'pagin2':
                contentLeftTopSlider.css('transform', 'translateX(-16.666666%)');
                contentLeftBottomSlider.css('transform', 'translateX(-66.666664%)');
                images.css('transform', 'translateY(-16.666666%)');
                titlesTeas.css('transform', 'translateY(-16.666666%)');
                namesTeas.css('transform', 'translateY(-16.666666%)');
                teaImgHide();
                $('#tea2').fadeIn(600);
                descBox.css('transform', 'translateY(-16.666666%)');
                tasteBox.css('transform', 'translateY(-16.666666%)');
                aromaBox.css('transform', 'translateY(-16.666666%)');
                backsBox.css('transform', 'translateY(-16.666666%)');
                break;
            case 'pagin3':
                contentLeftTopSlider.css('transform', 'translateX(-33.333332%)');
                contentLeftBottomSlider.css('transform', 'translateX(-49.999998%)');
                images.css('transform', 'translateY(-33.333332%)');
                titlesTeas.css('transform', 'translateY(-33.333332%)');
                namesTeas.css('transform', 'translateY(-33.333332%)');
                teaImgHide();
                $('#tea3').fadeIn(600);
                descBox.css('transform', 'translateY(-33.333332%)');
                tasteBox.css('transform', 'translateY(-33.333332%)');
                aromaBox.css('transform', 'translateY(-33.333332%)');
                backsBox.css('transform', 'translateY(-33.333332%)');
                break;
            case 'pagin4':
                contentLeftTopSlider.css('transform', 'translateX(-49.999998%)');
                contentLeftBottomSlider.css('transform', 'translateX(-33.333332%)');
                images.css('transform', 'translateY(-49.999998%)');
                titlesTeas.css('transform', 'translateY(-49.999998%)');
                namesTeas.css('transform', 'translateY(-49.999998%)');
                teaImgHide();
                $('#tea4').fadeIn(600);
                descBox.css('transform', 'translateY(-49.999998%)');
                tasteBox.css('transform', 'translateY(-49.999998%)');
                aromaBox.css('transform', 'translateY(-49.999998%)');
                backsBox.css('transform', 'translateY(-49.999998%)');
                break;
            case 'pagin5':
                contentLeftTopSlider.css('transform', 'translateX(-66.666664%)');
                contentLeftBottomSlider.css('transform', 'translateX(-16.666666%)');
                images.css('transform', 'translateY(-66.666664%)');
                titlesTeas.css('transform', 'translateY(-66.666664%)');
                namesTeas.css('transform', 'translateY(-66.666664%)');
                teaImgHide();
                $('#tea5').fadeIn(600);
                descBox.css('transform', 'translateY(-66.666664%)');
                tasteBox.css('transform', 'translateY(-66.666664%)');
                aromaBox.css('transform', 'translateY(-66.666664%)');
                backsBox.css('transform', 'translateY(-66.666664%)');
                break;
            case 'pagin6':
                contentLeftTopSlider.css('transform', 'translateX(-83.33333%)');
                contentLeftBottomSlider.css('transform', 'translateX(0)');
                images.css('transform', 'translateY(-83.33333%)');
                titlesTeas.css('transform', 'translateY(-83.33333%)');
                namesTeas.css('transform', 'translateY(-83.33333%)');
                teaImgHide();
                $('#tea6').fadeIn(600);
                descBox.css('transform', 'translateY(-83.33333%)');
                tasteBox.css('transform', 'translateY(-83.33333%)');
                aromaBox.css('transform', 'translateY(-83.33333%)');
                backsBox.css('transform', 'translateY(-83.33333%)');
                break;
            default: break;
        }
    })


});
