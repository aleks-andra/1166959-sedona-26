var popup = document.querySelector(".hotel-search_wrapper-form");
var form = popup.querySelector(".hotel-search__form");
var buttonPopup = document.querySelector(".hotel-search__button--brown");
popup.classList.remove("hotel-search_wrapper-form--show");

var arrivaldate = popup.querySelector("[name=arrival_date]");
var departuredate = popup.querySelector("[name=departure_date]");
var amountadults = popup.querySelector("[name=amount-adults]");
var amountchildren = popup.querySelector("[name=amount-children]");


buttonPopup.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.toggle("hotel-search_wrapper-form--show");
});

form.addEventListener("submit", function(evt) {
  evt.preventDefault();
if (!arrivaldate.value || !departuredate.value || !amountadults.value || !amountchildren.value) {
    console.log("Ошибка");
    popup.classList.add("hotel-search_wrapper-form--error");
  } else {
    console.log("Отправка");
    form.submit();
  }
});
