/*import shuffle from "lodash/shuffle";
import axios from "axios";*/
import $ from "jquery";

window.addEventListener("load", () => {
    const menuLiClass = ".menu__item";
    const menuLi = $(menuLiClass);

    const logoTitleShowPointClass = ".block-promo__title";
    const logoTitleClass = ".header__logo__title";
    const logoTitleShowAddClass = "header__logo__title--show"; 

    const logoImgClass = ".header__logo__wrapper";
    const logoImgScrollClass = "header__logo__wrapper--small";
    
    menuLi.hover(function () {
        $(this).siblings().css("opacity", 0.5);
    },
    function () {
        $(this).siblings().css("opacity", 1);
    });

    $(window).scroll(function(){
        if ($(this).scrollTop() > $(logoTitleShowPointClass).offset().top) {
            $(logoTitleClass).addClass(logoTitleShowAddClass);
            $(logoImgClass).addClass(logoImgScrollClass);
        }
        else {
            $(logoTitleClass).removeClass(logoTitleShowAddClass);
            $(logoImgClass).removeClass(logoImgScrollClass);
        }
    });
});