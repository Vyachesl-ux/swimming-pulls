(() => {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
        return '0<span class="' + currentClass + '"></span>' + "/0" + '<span class="' + totalClass + '"></span>';
      },
    },
  });
})();
