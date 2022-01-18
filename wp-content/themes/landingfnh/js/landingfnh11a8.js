jQuery(document).ready(function () {
    jQuery('.projet-slider').slick({

        infinite: true,
        slidesToShow: 2,
        dots: false,
        arrows: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
      }
    ]

    });

    jQuery('#amount').on('keyup paste', function (e) {
        var amount = parseInt(jQuery(this).val());
        var deductible = parseInt(amount * 0.75)
        deductible = (deductible > 50000 ? 50000 : deductible);
        var real_cost = amount - deductible;

        jQuery('#deductible').val(deductible  ||  '');
        jQuery('#real-cost').val(real_cost || '');
        var urlCalc = jQuery('#faireundon-calc').attr('href');
        
        var arrayUrl = urlCalc.split('?');
        
        var restVariable = "";
        var querystring = "";
        var variables = arrayUrl[1].split('&');
        for (var i = 0; i < variables.length; i++) {
            if (!variables[i].includes('montant=')) {
                
                querystring += "&" + variables[i];
            }
        }
        if(!isNaN(amount)){
            querystring = "?montant=" + amount + querystring;
            jQuery('#faireundon-calc').attr('href', arrayUrl[0] + querystring)
           }
    });


});


jQuery(document).ready(myfunction);
jQuery(window).on('resize', myfunction);

function myfunction() {
    var videoSize = jQuery(".video-local").height();
    jQuery('#visuel-haut').height(videoSize);
}
