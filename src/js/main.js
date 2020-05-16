/*import shuffle from "lodash/shuffle";
import axios from "axios";*/
import $ from "jquery";

window.addEventListener("load", () => {
    const menuLiClass = ".menu__item, .menu-scroll__item";
    const menuLi = $(menuLiClass);

    const logoTitleShowPointClass = "#block_scroll_point";
    const logoTitleClass = ".header-scroll__logo__title";
    const logoTitleShowAddClass = "header-scroll__logo__title--show";

    const headerWrapper = ".header-scroll__wrapper";
    const headerWrapperShow = "header-scroll__wrapper--show";
    const headerWrapperHide = "header-scroll__wrapper--hide";
    
    menuLi.hover(function () {
        $(this).siblings().css("opacity", 0.5);
    },
    function () {
        $(this).siblings().css("opacity", 1);
    });

    if($(headerWrapper).length) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > $(logoTitleShowPointClass).offset().top) {
                $(headerWrapper).removeClass(headerWrapperHide);
                $(headerWrapper).addClass(headerWrapperShow);
                $(logoTitleClass).addClass(logoTitleShowAddClass);
            }
            else {
                $(logoTitleClass).removeClass(logoTitleShowAddClass);
                $(headerWrapper).removeClass(headerWrapperShow);
                $(headerWrapper).addClass(headerWrapperHide);
            }
        });
    }

});