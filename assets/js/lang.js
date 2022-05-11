
let lang = document.querySelector('.lang');
let select = document.querySelector('.sub-menu');
let changeItem = document.querySelector('.change-lang');
const allLang = ['ru', 'ukr'];
lang.addEventListener('click', () => {
   select.classList.toggle('isOpen');
});

select.addEventListener('click', changeLang);

function changeLang(event) {
   changeItem.innerHTML = event.target.innerHTML;
   if (event.target.innerHTML === 'UKR') {
      document.querySelector('.sub-menu__item').innerHTML = "RU";
   } else {
      document.querySelector('.sub-menu__item').innerHTML = "UKR";
   }
   console.log(changeItem.innerHTML);
   location.href = `${window.location.pathname}${"#"}${changeItem.innerHTML.toLowerCase()}`;
   location.reload();
}
(function changeLanguage(event) {
   let hash = window.location.hash;
   hash = hash.substring(1)
   changeItem.innerHTML = hash.toUpperCase();
   if (hash === 'ukr') {
      document.querySelector('.sub-menu__item').innerHTML = "RU";

   } else {
      null;
   }
   if (hash === '') changeItem.innerHTML = 'ru'.toUpperCase();
   if (!allLang.includes(hash)) {
      location.href = `${window.location.pathname}${"#ru"}`;
      changeItem.innerHTML = "RU";

   }

   document.querySelector('title').innerHTML = langArr['title'][hash];

   // menu
   let element = {};
   let item = [];

   for (const key in langArr) {
      if (Object.hasOwnProperty.call(langArr, key)) {
         element = langArr[key];
      }
   }
   document.querySelectorAll('.main-menu').forEach(e => {
      // e.innerHTML = langArr['main-menu'][hash];
      
   })
})()
