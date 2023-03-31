console.log("Starts, getting Card Data");

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

const fetchCardData = (apiUrl) => {
  const response = fetch(apiUrl)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
  return response;
};

const getExperienceCardData = () => {
  fetchCardData("http://127.0.0.1:5050/get_experience-card_data")
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
  fetchCardData("http://127.0.0.1:5050/get_room_data")
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

//IIFE

(async () => {
  getExperienceCardData();
  getRoomCardData();
})();
