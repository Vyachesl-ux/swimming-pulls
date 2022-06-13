(() => {
  let wrap = document.querySelectorAll(".services-content__item-wrapp");

  wrap.forEach((e) => {
    let elem = e.children[1];

    let string = e.children[1].innerHTML;
    if((document.documentElement.clientWidth <= 600)){
      if (!e.classList.contains("show")) {
        e.children[1].innerHTML = getExcerpt(string, 300).shortText;
      } else {
        e.children[1].innerHTML = getExcerpt(string, 300).fullText;
      }

    }
    if (document.documentElement.clientWidth <= 320) {
      if (!e.classList.contains("show")) {
        e.children[1].innerHTML = getExcerpt(string, 150).shortText;
      } else {
        e.children[1].innerHTML = getExcerpt(string, 150).fullText;
      }
    }
    if(document.documentElement.clientWidth <= 600){
      elem.addEventListener("click", () => {
        e.classList.toggle("show");
        if (e.classList.contains("show")) {
          elem.innerHTML = getExcerpt(string, 300).fullText;
        } else {
          setTimeout(() => {
            elem.innerHTML = getExcerpt(string, 300).shortText;
          }, 510);
        }
      });
    }
    if (document.documentElement.clientWidth <= 320) {
      elem.addEventListener('click', () => {
        if (e.classList.contains("show")) {
          elem.innerHTML = getExcerpt(string, 150).fullText;
        } else {
          setTimeout(() => {
            elem.innerHTML = getExcerpt(string, 150).shortText;
          }, 510);
        }
      })
    }
      
  });

  function getExcerpt(str, limit) {
    var fullText = str;
    var shortText = str;
    let hash = window.location.hash;
    hash = hash.substring(1);
    let read = "";

    switch (hash) {
      case 'ru':
        read = "<strong style='text-align: right; display: block;'>Читать далее</strong>"; 
        break;
      case '':
        read = "<strong style='text-align: right; display: block;'>Читать далее</strong>"; 
        break;
      case 'ukr':
        read = "<strong style='text-align: right; display: block;'>Читати далi</strong>";
        break;
      default:
        read = "<strong style='text-align: right; display: block;'>Читать далее</strong>"; 
        break;
    }
    
    shortText = shortText.substr(0, shortText.lastIndexOf(" ", limit)) + ` ...<br>${read}`
      
    if (hash === "ru") {
      fullText =
        fullText +
        "<br>" +
        "<strong style='text-align: right; display: block;'>Свернуть</strong>";
    } else {
      fullText =
        fullText +
        "<br>" +
        "<strong style='text-align: right; display: block;'>Згорнути</strong>";
    }
    var returnString = {
      fullText: fullText,
      shortText: shortText,
    };
    return returnString;
  }
})();
