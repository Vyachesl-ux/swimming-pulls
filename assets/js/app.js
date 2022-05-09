(() => {
  let readMore = document.querySelectorAll(".services-read-more");
  readMore.forEach((e) => {
    e.addEventListener("click", (event) => {
      let item = event.target.parentNode;
      item.classList.toggle("show");
      item.classList.contains("show")
        ? (e.innerHTML = "Свернуть")
        : setTimeout(() => {
            e.innerHTML = "...Читать далее";
          }, 200);
    });
  });
})();
