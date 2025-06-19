/*-----------------------------------------------------------------------------------

    Theme Name: Lawyer - Attorney and Lawyers HTML Template
    Description: Attorney and Lawyers HTML Template
    Author: Legal Vires
    Version: 1.0    
                
    ---------------------------------- */

!(function (t) {
  "use strict";
  var s = t(window);
  function a() {
    var e, a;
    (e = t(".full-screen")),
      (a = s.height()),
      e.css("min-height", a),
      (e = t("header").height()),
      (a = t(".screen-height")),
      (e = s.height() - e),
      a.css("height", e);
  }
  t("#preloader").fadeOut("normall", function () {
    t(this).remove();
  }),
    s.on("scroll", function () {
      var e = s.scrollTop(),
        a = t(".navbar-brand img"),
        o = t(".navbar-brand.logodefault img");
      e <= 50
        ? (t("header").removeClass("scrollHeader").addClass("fixedHeader"),
          a.attr("src", "img/logos/lolo-2.png"))
        : (t("header").removeClass("fixedHeader").addClass("scrollHeader"),
          a.attr("src", "img/logos/lolo.png")),
        o.attr("src", "img/logos/lolo.png");
    }),
    s.on("scroll", function () {
      500 < t(this).scrollTop()
        ? t(".scroll-to-top").fadeIn(400)
        : t(".scroll-to-top").fadeOut(400);
    }),
    t(".scroll-to-top").on("click", function (e) {
      e.preventDefault(), t("html, body").animate({ scrollTop: 0 }, 600);
    }),
    t(".parallax,.bg-img").each(function (e) {
      t(this).attr("data-background") &&
        t(this).css(
          "background-image",
          "url(" + t(this).data("background") + ")"
        );
    }),
    t(".story-video").magnificPopup({ delegate: ".video", type: "iframe" }),
    t(".source-modal").magnificPopup({
      type: "inline",
      mainClass: "mfp-fade",
      removalDelay: 160,
    }),
    s.resize(function (e) {
      setTimeout(function () {
        a();
      }, 500),
        e.preventDefault();
    }),
    0 !== t(".copy-clipboard").length &&
      (new ClipboardJS(".copy-clipboard"),
      t(".copy-clipboard").on("click", function () {
        var e = t(this);
        e.text();
        e.text("Copied"),
          setTimeout(function () {
            e.text("Copy");
          }, 2e3);
      })),
    a(),
    t(document).ready(function () {
      t(".info-carousel").owlCarousel({
        loop: !0,
        responsiveClass: !0,
        autoplay: !0,
        smartSpeed: 1500,
        nav: !1,
        dots: !0,
        center: !0,
        margin: 30,
        responsive: { 0: { items: 1 }, 768: { items: 2 }, 1200: { items: 3 } },
      }),
        t(".service-carousel").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !1,
          smartSpeed: 1500,
          nav: !1,
          dots: !0,
          center: !1,
          margin: 30,
          responsive: {
            0: { items: 1, margin: 0 },
            768: { items: 2 },
            1200: { items: 3 },
          },
        }),
        t(".testimonial-style1").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !1,
          thumbs: !0,
          thumbsPrerendered: !0,
          smartSpeed: 1500,
          nav: !1,
          dots: !1,
          center: !0,
          items: 1,
          margin: 0,
        }),
        t(".testimonial-style2").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !1,
          autoplayTimeout: 3e3,
          smartSpeed: 1500,
          nav: !0,
          center: !1,
          dots: !1,
          navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>",
          ],
          margin: 20,
          items: 1,
        }),
        t(".testimonial-style3").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !1,
          autoplayTimeout: 3e3,
          smartSpeed: 1500,
          nav: !1,
          center: !1,
          dots: !0,
          margin: 20,
          items: 1,
        }),
        t(".case-study-carousel").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !1,
          autoplayTimeout: 5e3,
          smartSpeed: 1500,
          nav: !1,
          dots: !0,
          margin: 20,
          responsive: {
            0: { items: 1 },
            576: { items: 2 },
            992: { items: 3, dots: !1 },
            1200: { items: 3 },
          },
        }),
        t(".client-carousel").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          autoplayTimeout: 5e3,
          smartSpeed: 1500,
          nav: !1,
          dots: !1,
          center: !1,
          margin: 0,
          responsive: { 0: { items: 1 }, 480: { items: 2 }, 768: { items: 3 } },
        }),
        t(".case-study-details").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !1,
          smartSpeed: 800,
          nav: !1,
          dots: !1,
          center: !1,
          margin: 20,
          responsive: {
            0: { items: 1 },
            767: { items: 2 },
            768: { items: 2 },
            992: { items: 3 },
          },
        }),
        t(".service-client-carousel").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          autoplayTimeout: 5e3,
          smartSpeed: 900,
          nav: !1,
          dots: !1,
          items: 1,
          margin: 15,
        }),
        t(".banner1 .owl-carousel").owlCarousel({
          items: 1,
          loop: !0,
          dots: !1,
          margin: 0,
          nav: !0,
          navText: [
            "<i class='ti-angle-left'></i>",
            "<i class='ti-angle-right'></i>",
          ],
          autoplay: !0,
          autoplayTimeout: 5e3,
          smartSpeed: 900,
          animateIn: "fadeIn",
          animateOut: "fadeOut",
          responsive: {
            0: { nav: !1, dots: !1 },
            576: { nav: !1, dots: !0 },
            991: { nav: !1, dots: !0 },
            1200: { nav: !0, dots: !1 },
          },
        }),
        t(".owl-carousel").owlCarousel({
          items: 1,
          loop: !0,
          dots: !1,
          margin: 0,
          autoplay: !0,
          smartSpeed: 500,
        }),
        t(".slider-fade").on("changed.owl.carousel", function (e) {
          e = e.item.index - 2;
          t(".sub-title").removeClass("animated fadeInUp"),
            t("h1").removeClass("animated fadeInUp"),
            t("p").removeClass("animated fadeInUp"),
            t(".butn").removeClass("animated fadeInUp"),
            t(".banner-single-img").removeClass("animated fadeInUp"),
            t(".owl-item")
              .not(".cloned")
              .eq(e)
              .find(".sub-title")
              .addClass("animated fadeInUp"),
            t(".owl-item")
              .not(".cloned")
              .eq(e)
              .find("h1")
              .addClass("animated fadeInUp"),
            t(".owl-item")
              .not(".cloned")
              .eq(e)
              .find("p")
              .addClass("animated fadeInUp"),
            t(".owl-item")
              .not(".cloned")
              .eq(e)
              .find(".butn")
              .addClass("animated fadeInUp"),
            t(".owl-item")
              .not(".cloned")
              .eq(e)
              .find(".banner-single-img")
              .addClass("animated fadeInUp");
        }),
        0 !== t(".horizontaltab").length &&
          t(".horizontaltab").easyResponsiveTabs({
            type: "default",
            width: "auto",
            fit: !0,
            tabidentify: "hor_1",
            activate: function (e) {
              var a = t(this),
                o = t("#nested-tabInfo");
              t("span", o).text(a.text()), o.show();
            },
          }),
        t(".countup").counterUp({ delay: 25, time: 2e3 }),
        t(".countdown").countdown({
          date: "01 Mar 2026 00:01:00",
          format: "on",
        }),
        t(".current-year").text(new Date().getFullYear());
    }),
    s.on("load", function () {
      t(".portfolio-gallery,.portfolio-gallery-isotope").lightGallery(),
        t(".portfolio-link").on("click", (e) => {
          e.stopPropagation();
        });
    });
})(jQuery);
