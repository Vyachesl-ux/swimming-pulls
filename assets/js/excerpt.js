let txt = document.querySelectorAll(".services-content__item-text");
let btn = document.querySelectorAll(".services-read-more");
let wrap = document.querySelectorAll(".services-content__item-wrapp");

wrap.forEach((e) => {
  let elem = e.children[1];

  let string = e.children[1].innerHTML;
  console.log(string);
  if (!e.classList.contains("show")) {
    e.children[1].innerHTML = getExcerpt(string, 300).shortText;
  } else {
    e.children[1].innerHTML = getExcerpt(string, 300).fullText;
  }

  elem.addEventListener("click", () => {
    e.classList.toggle("show");
    if (e.classList.contains("show")) {
      elem.innerHTML = getExcerpt(string, 300).fullText;
    } else {
      setTimeout(() => {
        elem.innerHTML = getExcerpt(string, 300).shortText;
      }, 270);
    }
  });
});

function getExcerpt(str, limit) {
  var fullText = str;
  var shortText = str;
  let hash = window.location.hash;
  hash = hash.substring(1);
  let read = "";
  hash === "ru"
    ? (read =
        "<strong style='text-align: right; display: block;'>Читать далее</strong>")
    : (read =
        "<strong style='text-align: right; display: block;'>Читати далi</strong>");
  shortText =
    shortText.substr(0, shortText.lastIndexOf(" ", limit)) +
    "..." +
    "<br>" +
    read;
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
