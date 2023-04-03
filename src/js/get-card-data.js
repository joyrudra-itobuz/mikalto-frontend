//Function to fetch the Api

const fetchCardData = async (apiUrl) => {
  const response = await fetch(apiUrl)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
  return response;
};

//Getting Experience Matter Card Data from Backend

const experienceMatterCards = document.querySelectorAll(
  ".experience-matters-card"
);
const experienceCardImg = document.querySelectorAll(
  ".experience-matters-card img"
);
const experienceCardHeaders = document.querySelectorAll(
  ".experience-matters-card h2"
);
const experienceCardContents = document.querySelectorAll(
  ".experience-matters-card .content"
);
const experienceMatterCategory = document.querySelectorAll(
  ".experience-matters-card .category-type"
);

const getExperienceCardData = async () => {
  await fetchCardData("http://127.0.0.1:5050/get_experience-card_data")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      for (let i = 0; i < experienceMatterCards.length; i++) {
        experienceMatterCategory[i].textContent = res[i].type;
        experienceCardImg[i].src = `${res[i].imgSrc}`;
        experienceCardContents[i].textContent = res[i].content;
        experienceCardHeaders[i].textContent = res[i].header;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

//Getting Room Category Data

const roomCategoryCards = document.querySelectorAll(".room-category-card");
const roomType = document.querySelectorAll(".room-type");
const roomPrice = document.querySelectorAll(".room-price");
const bedType = document.querySelectorAll(".room-bed-type");
const roomCapacity = document.querySelectorAll(".room-capacity");
const roomSpace = document.querySelectorAll(".room-space");
const roomView = document.querySelectorAll(".room-view");
const roomCardImg = document.querySelectorAll(".room-category-card img");

const getRoomCardData = async () => {
  await fetchCardData("http://127.0.0.1:5050/get_room_data")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      for (let i = 0; i < roomCategoryCards.length; i++) {
        roomType[i].textContent = res[i].roomType;
        roomPrice[i].textContent = res[i].roomPrice;
        bedType[i].textContent = res[i].bedType;
        roomCapacity[i].textContent = res[i].capacity;
        roomSpace[i].textContent = res[i].roomSize;
        roomView[i].textContent = res[i].roomView;
        roomCardImg[i].src = res[i].imgSrc;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

//Getting Welcome Conatainer Data

const welcomeContainer = document.querySelector(".welcome");
const welcomeHeading = document.querySelector(".welcome h2");
const welcomeSubheading = document.querySelector(".welcome-sub-heading");
const welcomeContent = document.querySelector(".welcome-content");
const signatureName = document.querySelector(".signature-name");
const signature = document.querySelector(".signature");
const welcomeImgs = document.querySelectorAll(".welcome img");

const getWelcomeData = async () => {
  await fetch("http://127.0.0.1:5050/get_welcome_data")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      welcomeHeading.textContent = res[0].heading;
      welcomeSubheading.textContent = res[0].subHeading;
      welcomeContent.textContent = res[0].content;
      signature.textContent = res[0].signature;
      signatureName.textContent = res[0].signatureName;
      welcomeImgs[0].src = res[0].imgSrc1;
      welcomeImgs[1].src = res[0].imgSrc2;
      welcomeImgs[2].src = res[0].imgSrc3;
    })
    .catch((err) => {
      console.log(err);
    });
};

//Getting Other Activites Data

const otherActivityCard1 = document.querySelector(".other-activities-card");
const otherActivitySubHeading = document.querySelectorAll(
  ".other-activities .sub-heading"
);
const otherActivityHeading = document.querySelectorAll(".other-activities h2");
const otherActivityContent = document.querySelectorAll(
  ".other-activities .content"
);
const otherActivityImg = document.querySelectorAll(".other-activities-img");

const getOtherActivitiesData = async () => {
  console.log("Called!");
  await fetch("http://127.0.0.1:5050/get_other_activities_data")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      for (let i = 0; i < otherActivityHeading.length; i++) {
        otherActivityHeading[i].textContent = res[i].heading;
        otherActivitySubHeading[i].textContent = res[i].subHeading;
        otherActivityContent[i].textContent = res[i].content;
        otherActivityImg[i].src = res[i].imgSrc;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

//IIFE

(async () => {
  getExperienceCardData();
  getRoomCardData();
  getWelcomeData();
  getOtherActivitiesData();
})();
