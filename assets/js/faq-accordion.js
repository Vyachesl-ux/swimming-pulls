
(() => {
	const accodrions = document.querySelectorAll(".faq-accordion");

	accodrions.forEach(element => {
		element.body = element.querySelector(".faq-accordion__content-wrapper");

		if(!element.body) return;

		element.addEventListener("click", (e) => {
			const isOpen = element.classList.toggle("is-open");
			element.body.style.height = isOpen ? element.body.firstElementChild.offsetHeight + "px" : 0;
		});
	});
})();
