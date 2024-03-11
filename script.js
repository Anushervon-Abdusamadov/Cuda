// script.js

document.addEventListener("DOMContentLoaded", function () {
    
    // Create elements
    var mainDiv = document.createElement("div");
    mainDiv.classList.add("asd");
  
    var innerDiv = document.createElement("div");
    innerDiv.classList.add("cuda");
  
    var nav = document.createElement("nav");
    nav.classList.add("cuda_1");
  
    var logoImg = document.createElement("img");
    logoImg.src = "assets/logo.svg";
    logoImg.alt = "";
  
    var ul = document.createElement("ul");
  

  
    // Button and link creation function
    function createButtonLink(text, href) {
      var button = document.createElement("button");
      button.classList.add("btn-1");
  
      var link = document.createElement("a");
      link.classList.add("link");
      link.href = href;
      link.textContent = text;
  
      button.appendChild(link);
  
      return button;
    }
  
    // Create buttons with links
    var homeButton = createButtonLink("HOME", "#");
    var aboutButton = createButtonLink("ABOUT", "#");
    var workButton = createButtonLink("WORK", "#");
    var contactButton = createButtonLink("CONTACT", "#");
  
    // Append buttons to the unordered list
    ul.appendChild(homeButton);
    ul.appendChild(aboutButton);
    ul.appendChild(workButton);
    ul.appendChild(contactButton);
  
    // Append elements to the DOM
    nav.appendChild(logoImg);
    nav.appendChild(ul);
  
    innerDiv.appendChild(nav);
  
    var h1 = document.createElement("h1");
    h1.classList.add("txt");
    h1.textContent =
      "Hi there! We are the new kids on the block and we build awesome websites and mobile apps.";
  
    var span = document.createElement("span");
    span.classList.add("dis");
  
    var workButtonWithUs = document.createElement("button");
    workButtonWithUs.classList.add("btn");
    workButtonWithUs.textContent = "WORK WITH US!";
  
    span.appendChild(workButtonWithUs);
  
    innerDiv.appendChild(h1);
    innerDiv.appendChild(span);
  
    mainDiv.appendChild(innerDiv);
  
    // Append the main div to the body
    document.body.appendChild(mainDiv);
    // Создаем новый элемент с классом "cuda_first"
var cudaFirstDiv = document.createElement("div");
cudaFirstDiv.classList.add("cuda_first");

// Добавляем заголовок h1 с классом "txt-1"
var h1Services = document.createElement("h1");
h1Services.classList.add("txt-1");
h1Services.textContent = "SERVICES WE PROVIDE";

// Добавляем изображение с классом "line"
var lineImg = document.createElement("img");
lineImg.src = "assets/Line.svg";
lineImg.style.marginBottom = "1%";
lineImg.alt = "";

// Добавляем абзац с текстом
var pServices = document.createElement("p");
pServices.classList.add("pod_text");
pServices.innerHTML =
  "We are working with both individuals and businesses from all over the globe <br /> to create awesome websites and applications.";

// Создаем блок с классом "dis"
var disDiv = document.createElement("div");
disDiv.classList.add("dis");

// Массив с путями к изображениям
var imagesPaths = [
  "assets/Group 1.svg",
  "assets/Group 2.svg",
  "assets/Group 3.svg",
  "assets/Group 4.svg"
];

// Добавляем изображения в блок "dis"
imagesPaths.forEach(function (path) {
  var bydDiv = document.createElement("div");
  bydDiv.classList.add("byd");

  var img = document.createElement("img");
  img.src = path;
  img.alt = "";

  bydDiv.appendChild(img);
  disDiv.appendChild(bydDiv);
});

// Добавляем элементы в DOM
cudaFirstDiv.appendChild(h1Services);
cudaFirstDiv.appendChild(lineImg);
cudaFirstDiv.appendChild(pServices);
cudaFirstDiv.appendChild(disDiv);

// Добавляем вторую часть в DOM (можно выбрать контейнер, например, body, к которому вы хотите добавить этот блок)
document.body.appendChild(cudaFirstDiv);

// Создание третьей части структуры
var cudaSecondDiv = document.createElement("div");
cudaSecondDiv.classList.add("cuda_second");

// Добавление заголовка h1
var h1Team = document.createElement("h1");
h1Team.classList.add("txt-1");
h1Team.textContent = "MEET OUR BEAUTIFUL TEAM";

// Добавление изображения с классом "line"
var lineImgSecond = document.createElement("img");
lineImgSecond.src = "assets/Line.svg";
lineImgSecond.style.marginBottom = "1%";
lineImgSecond.alt = "";

// Добавление абзаца с текстом
var pTeam = document.createElement("p");
pTeam.classList.add("pod_text");
pTeam.textContent = "We are a small team of designers and developers, who help brands with big ideas.";

// Создание блока "dis" для изображений
var disDivSecond = document.createElement("div");
disDivSecond.classList.add("dis");

// Массив с путями к изображениям
var imagesPathsSecond = [
  "assets/Group 6.svg",
  "assets/Group 7.svg",
  "assets/Group 8.svg",
  "assets/Group 10.svg"
];

// Добавление изображений в блок "dis"
imagesPathsSecond.forEach(function (path) {
  var bydDivSecond = document.createElement("div");
  bydDivSecond.classList.add("byd");

  var imgSecond = document.createElement("img");
  imgSecond.src = path;
  imgSecond.alt = "";

  bydDivSecond.appendChild(imgSecond);
  disDivSecond.appendChild(bydDivSecond);
});

// Добавление элементов в DOM
cudaSecondDiv.appendChild(h1Team);
cudaSecondDiv.appendChild(lineImgSecond);
cudaSecondDiv.appendChild(pTeam);
cudaSecondDiv.appendChild(disDivSecond);

// Добавление третьей части в DOM (можно выбрать контейнер, например, body, к которому вы хотите добавить этот блок)
document.body.appendChild(cudaSecondDiv);

  });
  