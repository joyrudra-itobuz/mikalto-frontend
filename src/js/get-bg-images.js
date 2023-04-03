const getBgImg = async (apiUrl) => {
  const response = await fetch(apiUrl)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
  return response;
};

//Calling The Function to fetch Images

const setBgImages = async () => {
  await getBgImg("http://127.0.0.1:5050/get_bg_images")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      const hero = document.querySelector(".hero");
      const sayHello = document.querySelector(".say-hello");
      const promotion = document.querySelector(".promotion");
      const footer = document.querySelector(".footer");

      const bgElements = [hero, sayHello, promotion, footer];

      for (let i = 0; i < bgElements.length; i++) {
        bgElements[i].style.backgroundImage = `url(${res[i].imgSrc})`;
      }
    });
};

//IIFE

(async () => {
  setBgImages();
})();
