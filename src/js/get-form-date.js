//Get Checkin & out Data

console.log("Starts Form Data");

const checkInDate = document.querySelector(".checkin-select");
const checkOutDate = document.querySelector(".checkout-select");
const noOfAdults = document.querySelector(".adult-select");
const noOfChildren = document.querySelector(".children-select");

const checkAvailiblityBtn = document.querySelector(".check-availiblity-btn");

checkAvailiblityBtn.addEventListener("click", () => {
  const bookingDetails = [];

  bookingDetails.push(
    { checkInDate: checkInDate.value },
    { checkOutDate: checkOutDate.value },
    { noOfAdults: noOfAdults.value },
    { noOfChildren: noOfChildren.value }
  );

  fetch("http://127.0.0.1:5050/submit-date", {
    method: "POST",
    headers: {
      "Contect-type": "application/json; charset=UTF-8",
    },
    body: `id=${Date.now()}&checkInDate=${checkInDate.value}&checkOutDate=${
      checkOutDate.value
    }&noOfAdults=${noOfAdults.value}&noOfChildren=${noOfChildren.value}`,
  })
    .then((res) => {
      checkAvailiblityBtn.innerHTML = "Submitted!";
      setTimeout(() => {
        checkAvailiblityBtn.innerHTML = "Check Availiblity";
      }, 2000);
    })
    .catch((err) => {
      console.log(err);
    });
});
