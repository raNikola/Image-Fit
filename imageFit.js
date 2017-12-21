!(function ($) {
    $(document).ready(function () {
      // Call Function and Set CLASS NAME
      imageFit('.CLASS_NAME');
    });
    function imageFit(className) {

        $(className).each(function () {
            var ratioWrap = $(this).width() / $(this).outerHeight();
            var ratioImg = $(this).find("img").width() / $(this).find("img").outerHeight();

            if (ratioImg < 1 || ratioImg > 1.49) {
                if (ratioWrap > ratioImg) {
                    $(this).find("img").css({"width": "100%", "height": "auto"});
                } else
                    $(this).find("img").css({"width": "auto", "height": "100%"});
            } else if (ratioImg == 1 || ratioImg == 0) {
                if (ratioWrap > 1) {
                    $(this).find("img").css({"width": "100%", "height": "auto"});
                } else {
                    $(this).find("img").css({"width": "auto", "height": "100%"});
                }
            } else {
                if (ratioImg > 1 || ratioImg < 1.49) {
                    $(this).find("img").css({"width": "100%", "height": "auto"});
                } else
                    $(this).find("img").css({"width": "auto", "height": "100%"});
            }
        });
    }

})(jQuery);
