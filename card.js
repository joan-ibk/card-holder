const cardNumber = document.getElementById("number");
const numberInp = document.getElementById("card-number");

const cardName = document.getElementById("name");
const nameInp = document.getElementById("card-name");

const cardMonth = document.getElementById("month");
const monthInp = document.getElementById("card-month");

const cardYear = document.getElementById("year");
const yearInp = document.getElementById("card-year");

const cardCvc = document.getElementById("cvc");
const cvcInp = document.getElementById("card-cvc");

const submitBtn = document.getElementById("submit-btn");

const completed = document.querySelector("thank");
const form = document.querySelector("form");

function setCardNumber(e) {
    cardNumber.innerText= format(e.target.value);
}