let txt = document.querySelectorAll(".services-content__item-text");
let btn = document.querySelectorAll(".services-read-more");
let wrap = document.querySelectorAll(".services-content__item-wrapp");
txt.forEach((e) => {
  var string = e.innerHTML;
  var description = getExcerpt(string, 310);
  e.innerHTML = description.shortText;
  // console.log(description.fullText);
});

// принимает строку и лимит после скольки знаков искать пробел и обрезать
function getExcerpt(str, limit) {
  var fullText = str;
  var shortText = str;
  let hash = window.location.hash;
  hash = hash.substring(1);
  let read = '';
  hash === 'ru' ? read = "<strong style='text-align: right; display: block;'>Читать далее</strong>" : read = "<strong style='text-align: right; display: block;'>Читати далi</strong>"
  shortText = shortText.substr(0, shortText.lastIndexOf(" ", limit)) + "..."+"<br>"+read;
  var returnString = {
    fullText: fullText,
    shortText: shortText,
  };
  return returnString;
}
// функция возвратит объект , свойство shortText короткое описание обрезанное по limit и пробелу fullText полный текст
