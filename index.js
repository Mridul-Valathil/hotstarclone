let movies = [
  {
    name: "falcon and the winter soldier",
    des: "lorem ipsum dolor sit amet consectetur sdipisicing elit.Velit porro eet venim excess",
    image: "images/slider 2.png",
  },
  {
    name: "loki",
    des: "lorem ipsum dolor sit amet consectetur sdipisicing elit.Velit porro eet venim excess",
    image: "images/slider 1.png",
  },
  {
    name: "wanda vision",
    des: "lorem ipsum dolor sit amet consectetur sdipisicing elit.Velit porro eet venim excess",
    image: "images/slider 3.png",
  },
  {
    name: "raya and the last dragon",
    des: "lorem ipsum dolor sit amet consectetur sdipisicing elit.Velit porro eet venim excess",
    image: "images/slider 4.png",
  },
  {
    name: "luca",
    des: "lorem ipsum dolor sit amet consectetur sdipisicing elit.Velit porro eet venim excess",
    image: "images/slider 5.png",
  },
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0; //track the current slide

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  //create DOM Elements
  let slide = document.createElement("div");
  let imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  //attaching all elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  //setting up images
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  //setting element class names
  slide.ClassName = "slider";
  content.ClassName = "slide-content";
  h1.ClassName = "movie-title";
  p.ClassName = "movie-des";

  sliders.push(slide);

  if (slide.length) {
    sliders[0].style.marginLeft =
      "calc(-${100 * (sliders.length - 2)}% -${ 30 * (sliders.length - 2)}px)";
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);
