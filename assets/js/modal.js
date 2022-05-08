$(function () {
  const modalCall = $(".projects-content__item-image--info-description");
  const modalClose = $("[data-close]");
  modalCall.on("click", function (event) {
    event.preventDefault();
    let modalId = $(".modal");
    $(modalId).addClass("show");
    $("body").addClass("no-scroll");
    setTimeout(function () {
      $(modalId).find(".modal__dialog").css({
        transform: "rotateX(0)",
      });
    }, 200);
    $("#worksSlide").slick("setPosition");
  });
  modalClose.on("click", function (event) {
    event.preventDefault();
    let $this = $(this);
    let modalParent = $this.parents(".modal");
    modalParent.find(".modal__dialog").css({
      transform: "rotateX(90deg)",
    });
    setTimeout(function () {
      modalParent.removeClass("show");
      $("body").removeClass("no-scroll");
    }, 200);
  });
  $(".modal").on("click", function (event) {
    $(this).removeClass("show");
    $("body").removeClass("no-scroll");
  });
  $(".modal__dialog").on("click", function (event) {
    event.stopPropagation();
  });
});
