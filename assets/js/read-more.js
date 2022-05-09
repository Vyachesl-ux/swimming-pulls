(()=>{

   const readMore = document.querySelectorAll('.services-read-more');
   readMore.forEach(element => {
      element.body = document.querySelector('.services-content__item-wrapp');
      console.log(element.body);
      if(!element.body) return;
      element.addEventListener('click', (e) => {

         const show = (e.target.parentNode).classList.toggle('show');
         element.body.style.height = show ? element.body.firstElementChild.offsetHeight + "px" : 0;
      })
   })
})()