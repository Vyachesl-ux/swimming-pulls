(() => {
  let readMore = document.querySelectorAll(".services-read-more");
  let hash = window.location.hash;
  hash = hash.substring(1);
  // readMore.forEach((e) => {
  //   hash === 'ru' ? e.innerHTML = 'Читать далее' : e.innerHTML = 'Читати далі'
  //   e.addEventListener("click", (event) => {
  //     let item = event.target.parentNode;
  //     item.classList.toggle("show");
  //     if (hash === 'ru') {

  //       item.classList.contains('show') ? e.innerHTML = 'Свернуть' : setTimeout(() => {
  //         e.innerHTML = "Читать далее";
  //       }, 200);
  //     } else {

  //       item.classList.contains('show') ? e.innerHTML = "Згорнути" : setTimeout(() => {
  //         e.innerHTML = "Читати далі";
  //       }, 200);
  //     }
  //   });
  // });
})();
