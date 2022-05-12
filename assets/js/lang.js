let lang = document.querySelector(".lang");
let select = document.querySelector(".sub-menu");
let changeItem = document.querySelector(".change-lang");
const allLang = ["ru", "ukr"];
lang.addEventListener("click", () => {
   select.classList.toggle("isOpen");
});

select.addEventListener("click", changeLang);

function changeLang(event) {
   changeItem.innerHTML = event.target.innerHTML;
   if (event.target.innerHTML === "UKR") {
      document.querySelector(".sub-menu__item").innerHTML = "RU";
   } else {
      document.querySelector(".sub-menu__item").innerHTML = "UKR";
   }
   console.log(changeItem.innerHTML);
   location.href = `${window.location.pathname
      }${"#"}${changeItem.innerHTML.toLowerCase()}`;
   location.reload();
}
(function changeLanguage(event) {
   let hash = window.location.hash;
   hash = hash.substring(1);
   changeItem.innerHTML = hash.toUpperCase();
   if (hash === "ukr") {
      document.querySelector(".sub-menu__item").innerHTML = "RU";
   } else {
      null;
   }
   if (hash === "") changeItem.innerHTML = "ru".toUpperCase();
   if (!allLang.includes(hash)) {
      location.href = `${window.location.pathname}${"#ru"}`;
      changeItem.innerHTML = "RU";
   }

   document.querySelector("title").innerHTML = langArr["title"][hash];

   // menu

   let mainMenu = menu[hash];
   document.querySelectorAll('.main-menu').forEach(e => {
      let value = e.innerHTML;
      if (value in mainMenu) {
         e.innerHTML = mainMenu[value];
      }
   })
   // main header 

   document.querySelector('.main-header').innerHTML = main_header["title"][hash];
   
   // main header text
   
   document.querySelector('.main-header__text').innerHTML = main_header_text["title"][hash];

   //buttons

let btn = buttons[hash];
console.log(btn);
   document.querySelectorAll('.btn-link').forEach( e => {
      let value = e.innerHTML;
      if(value in btn) {
         e.innerHTML = btn[value]
      }

   })
   // service
   document.querySelector('.services-title').innerHTML = service['title'][hash]

   // service title

   let serviceTitle = service_title[hash];
   console.log(serviceTitle);
   document.querySelectorAll('.services-content__item-title').forEach( e => {
      let value = e.innerHTML;
      if(value in serviceTitle){
         e.innerHTML = serviceTitle[value];
      }
   })

   // service content

   let serviceContent = service_content[hash];
   console.log(serviceContent);
   document.querySelectorAll('.services-content__item-text').forEach( e=> {
      let value = e.innerHTML;
      console.log(value);
      if(value in serviceContent){
         e.innerHTML = serviceContent[value];
      }
   })

   // projects
   document.querySelector('.projects-title').innerHTML = projects_title['title'][hash]

   let projectsTitleInfoHeader = projects_title_info_header[hash];
   console.log(projectsTitleInfoHeader);
   document.querySelectorAll('.projects-content__item-image--info-header').forEach( e => {
      let value = e.innerHTML;
      console.log(value);
      if(value in projectsTitleInfoHeader){
         e.innerHTML = projectsTitleInfoHeader[value]
      }
   })

   document.querySelectorAll('.projects-content__item-image--info-description').forEach( e => {
      e.innerHTML = detailed['title'][hash]
   });


})();
