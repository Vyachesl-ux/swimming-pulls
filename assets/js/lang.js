let lang = document.querySelector(".lang");
let select = document.querySelector(".sub-menu");
let changeItem = document.querySelector(".change-lang");
const allLang = ["ru", "ukr"];
lang.addEventListener("click", (e) => {
   e.preventDefault();
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
   let footerMenu = menu_footer[hash];
   document.querySelectorAll('.nav-items__link-item').forEach(e => {
      let value = e.innerHTML;
      if (value in footerMenu) {
         e.innerHTML = footerMenu[value];
      }
   })
   // main header 

   document.querySelector('.main-header').innerHTML = main_header["title"][hash];
   
   // main header text
   
   document.querySelector('.main-header__text').innerHTML = main_header_text["title"][hash];

   //buttons

let btn = buttons[hash];
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
   document.querySelectorAll('.services-content__item-title').forEach( e => {
      let value = e.innerHTML;
      if(value in serviceTitle){
         e.innerHTML = serviceTitle[value];
      }
   })

   // service content

   let serviceContent = service_content[hash];
   let serviceReadMore = document.querySelectorAll('.services-read-more');
   document.querySelectorAll('.services-content__item-text').forEach( e=> {
      let value = e.innerHTML;
      if(value in serviceContent){
         e.innerHTML = serviceContent[value];
      }
   })

   

   // projects
   document.querySelector('.projects-title').innerHTML = projects_title['title'][hash]

   let projectsTitleInfoHeader = projects_title_info_header[hash];
   document.querySelectorAll('.projects-content__item-image--info-header').forEach( e => {
      let value = e.innerHTML;
      if(value in projectsTitleInfoHeader){
         e.innerHTML = projectsTitleInfoHeader[value]
      }
   })

   document.querySelectorAll('.projects-content__item-image--info-description').forEach( e => {
      e.innerHTML = detailed['title'][hash]
   });
   document.querySelector('.projects-header').innerHTML = projects_header["title"][hash];
   document.querySelector('.projects-text').innerHTML = projects_text["title"][hash];
   
   // benefits
   
   document.querySelector('.benefits-content__title').innerHTML = benefits_content_title["title"][hash];
   document.querySelector('.benefits-content__text').innerHTML = benefits_content_text["title"][hash];
   
   let benefitsItemText = benefits_item_text[hash];
   document.querySelectorAll('.benefits-content__item--text').forEach(e => {
      let value = e.innerHTML;
      if(value in benefitsItemText){
         e.innerHTML = benefitsItemText[value];
      }
   })
   
   // faq
   
   document.querySelector('.faq-title').innerHTML = faq_title["title"][hash];
   
   let faqHeading = faq_accord_heading[hash];
    document.querySelectorAll('.faq-accordion__heading').forEach(e => {
      let value = e.innerHTML;
      if(value in faqHeading){
         e.innerHTML = faqHeading[value];
      }
   })

   let faqContentP = faq_content_p[hash];
   document.querySelectorAll('.faq-text').forEach(e => {
      let value = e.innerHTML;
      if(value in faqContentP){
         e.innerHTML = faqContentP[value]
      }
   })
   let faqList = faq_list[hash];
   document.querySelectorAll('.faq-list').forEach( e=> {
      let value = e.innerHTML;
      if(value in faqList){
         e.innerHTML = faqList[value]
      }
   })
   //modal

   let modal = modal_text[hash];
   document.querySelectorAll('.modal-text').forEach( e => {
      let value = e.innerHTML;
      if( value in modal){
         e.innerHTML = modal[value];
      }
   })
   document.querySelector('.form-title').innerHTML = form_title["title"][hash];
   document.querySelector('.form-text').innerHTML = form_text["title"][hash];
   document.querySelector('.contact-item__title').innerHTML = contact_title["title"][hash];
   document.querySelector('.contact-item__text').innerHTML = contact_text["title"][hash];
   document.querySelector('.copyright').innerHTML = copyright["title"][hash];

   let placeholder_cont = placeholder[hash];
   let inp = document.querySelectorAll('.form__input');
   inp.forEach ( e => {
      let value = e.getAttribute('placeholder');
      if(value in placeholder_cont){
         e.setAttribute('placeholder', placeholder_cont[value]);
      }
   })

   document.querySelector('.callback-button-title').innerHTML = widget["title"][hash];
   document.querySelector('.callback-form-title').innerHTML = widget_heading["title"][hash];
   document.querySelector('.callback-form__send').setAttribute('value', widget_send["title"][hash])

})();
