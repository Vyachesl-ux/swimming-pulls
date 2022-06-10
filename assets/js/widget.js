

$(document).ready(function () {
                //Открытие виджета по клику
 jQuery('body').on('click', '.callback-button-phone', function (e) {
      e.preventDefault();
      jQuery('.widget-callback').toggleClass('widget-callback-form-open');
   });
});

$(document).ready(function () {
                //ajax-отправка данных
jQuery("#calbback-widget-form").submit(function () {
                        var formID = jQuery(this).attr('id');
                        var formNm = jQuery('#' + formID);
                        jQuery.ajax({
                        type: "POST",
                         url: '../../mail.php',
                         data: formNm.serialize(),
                         success: function (data) { 
                                jQuery(formNm).html(data);
                          },
                          error: function (jqXHR, text, error) {
                                jQuery(formNm).html(error);        
                            }
                        });
                        return false;
                    });
 });
