console.log("Starts Form Operations");

function validateEmail(email) {
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}

const subscriberEmail = document.querySelector(".subcriber-email");
const subscribeBtn = document.querySelector(".subscribe-btn");
const formContainer = document.querySelector("body");

subscribeBtn.addEventListener("click", () => {
  let subscriberEmailValue = subscriberEmail.value;
  console.log(subscriberEmailValue);
  if (validateEmail(subscriberEmailValue)) {
    subscribeBtn.innerHTML = "Submitted!";
    subscribeBtn.classList.toggle("global-message-failure");
    setTimeout(() => {
      subscribeBtn.innerHTML = "Subscribe";
      subscribeBtn.classList.toggle("global-message-failure");
    }, 2000);
    fetch("http://127.0.0.1:5050/subcribe-data", {
      method: "POST",
      headers: {
        "Contect-type": "application/json; charset=UTF-8",
      },
      body: `email=${subscriberEmailValue}`,
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
  } else {
    subscribeBtn.innerHTML = "Invalid";
    subscribeBtn.classList.toggle("global-message-failure");
    setTimeout(() => {
      subscribeBtn.innerHTML = "Subscribe";
      subscribeBtn.classList.toggle("global-message-failure");
    }, 2000);
  }
  subscriberEmail.value = "";
});
