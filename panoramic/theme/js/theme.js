(function ($) {
  'use strict';

  // revolution-slider
  (function () {
    var sliderElementSelector = '.revolution-slider__slider';
    var sliderElement = document.querySelector(sliderElementSelector);

    if (sliderElement) {
      let revapi,
        tpj = jQuery;

      tpj(document).ready(function () {
        $(sliderElementSelector).each(function (index, item) {
          revapi = tpj(item).show().revolution({
            sliderType: 'standard',
            jsFileLocation: '//tpserver.local/R_5452/wp-content/plugins/revslider/public/assets/js/',
            sliderLayout: sliderElement.classList.contains('revolution-slider__slider_autoheight') ? null : 'fullscreen',
            dottedOverlay: 'none',
            delay: 9000,
            navigation: {
              keyboardNavigation: 'off',
              keyboard_direction: 'horizontal',
              mouseScrollNavigation: 'off',
              mouseScrollReverse: 'default',
              onHoverStop: 'off',
              arrows: {
                style: 'metis',
                enable: true,
                hide_onmobile: false,
                hide_onleave: false,
                tmp: '',
                left: {
                  container: 'layergrid',
                  h_align: 'right',
                  v_align: 'bottom',
                  h_offset: 61,
                  v_offset: 1
                },
                right: {
                  container: 'layergrid',
                  h_align: 'right',
                  v_align: 'bottom',
                  h_offset: 0,
                  v_offset: 1
                }
              }
            },
            responsiveLevels: [1200, 992, 768, 576],
            visibilityLevels: [1200, 992, 768, 576],
            gridwidth: [1200, 992, 768, 576],
            gridheight: [800, 768, 960, 720],
            lazyType: 'single',
            shadow: 0,
            spinner: 'spinner5',
            stopLoop: 'on',
            stopAfterLoops: 0,
            stopAtSlide: 1,
            shuffle: 'off',
            autoHeight: 'off',
            disableProgressBar: 'on',
            hideThumbsOnMobile: 'off',
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
              simplifyAll: 'off',
              nextSlideOnWindowFocus: 'off',
              disableFocusListener: false
            }
          });

          if (revapi.revSliderSlicey) {
            revapi.revSliderSlicey();
          }

          $('.revolution-prev').on('click', function () {
            revapi.revprev();
          });

          $('.revolution-next').on('click', function () {
            revapi.revnext();
          });
        });

        RsAddonPanorama(tpj, revapi);

        window.revapi = revapi;

        // panorama-slider
        (function () {
          if (window.revapi) {
            window.revapi.bind('revolution.slide.onchange', function (e, data) {
              $('.panorama-slider__content').each(function (index, item) {
                if (index === data.slideIndex - 1) {
                  setTimeout(function () {
                    $(item).fadeIn(300);
                  }, 300);
                } else {
                  $(item).fadeOut(300);
                }
              });
            });
          }
        })();
      }); /* ready*/

      jQuery(window).on('scroll', function () {
        var wh = jQuery(this).height();
        jQuery('.tp-parallax-container').each(function () {
          var layer = jQuery(this);
          var po = Math.abs(layer.data('parallaxoffset'));
          if (po > 100) po = 100;
          if (po < 20) po = 0;
          po = (100 - po) / 100;
          TweenLite.to(layer, 0.2, { opacity: po });
        });
      });
    }
  })();
})(jQuery);
