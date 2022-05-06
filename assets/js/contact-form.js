"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);
    let formData = new FormData(form);

    if (error === 0) {
      form.classList.add("_sending");
      let response = await fetch("sendmail.php", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        let result = await response.json();
        alert(result.message);
        form.Preview.innerHTML = "";
        form.reset();
      } else {
        alert("Ошибка отправки формы");
      }
    } else {
      alert("Заполните обязательные поля в форме");
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll(".__req");

    for (let i = 0; i < formReq.length; i++) {
      const input = formReq[i];
      formRemoveError(input);
      console.log(input.value);
      if (input.classList.contains("__email")) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else {
        if (input.value === "") {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }
  function formAddError(input) {
    input.parentElement.classList.add("__error");
    input.classList.add("__error");
  }
  function formRemoveError(input) {
    input.parentElement.classList.remove("__error");
    input.classList.remove("__error");
  }

  //функция проверки email
  function emailTest(input) {
    return !/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(
      input.value
    );
  }
});
