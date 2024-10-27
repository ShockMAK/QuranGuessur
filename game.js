const images = [
    { src: "ayahs/juz1.png", correctAnswer: "Juz 1" },
    { src: "ayahs/juz5.png", correctAnswer: "Juz 5" },
    { src: "ayahs/juz7.png", correctAnswer: "Juz 7" },
    { src: "ayahs/juz7-2.png", correctAnswer: "Juz 7" },
    { src: "ayahs/juz30.png", correctAnswer: "Juz 30" },
    { src: "ayahs/juz25.png", correctAnswer: "Juz 25" },
    { src: "ayahs/juz20.png", correctAnswer: "Juz 20" },
    { src: "ayahs/juz3.png", correctAnswer: "Juz 3" },
    { src: "ayahs/juz16.png", correctAnswer: "Juz 16" },
    { src: "ayahs/juz27-1.png", correctAnswer: "Juz 27" },
    
];

let currentImage = {};
let previousImages = []; 

function loadNewImage() {
    
    let newImage;
    do {
        newImage = images[Math.floor(Math.random() * images.length)];
    } while (previousImages.includes(newImage) && previousImages.length < images.length);

   
    if (previousImages.length === images.length) {
        previousImages = [];
    }

    currentImage = newImage;
    const imageElement = document.getElementById("random-image");
    imageElement.src = currentImage.src;

   
    document.getElementById("result").textContent = "";
    const buttons = document.querySelectorAll("#options-container button");
    buttons.forEach(button => button.disabled = false);

    
    document.getElementById("next-button").style.display = "none";

    
    previousImages.push(currentImage);
}

const optionsContainer = document.getElementById("options-container");
for (let i = 1; i <= 30; i++) {
    const button = document.createElement("button");
    button.textContent = "Juz " + i;
    button.onclick = () => checkAnswer("Juz " + i);
    optionsContainer.appendChild(button);
}

function checkAnswer(selectedAnswer) {
    const result = document.getElementById("result");
    if (selectedAnswer === currentImage.correctAnswer) {
        result.textContent = "Right!";
    } else {
        result.textContent = "Wrong";
    }

    const buttons = document.querySelectorAll("#options-container button");
    buttons.forEach(button => button.disabled = true);

    document.getElementById("next-button").style.display = "block";
}

loadNewImage();

document.getElementById("next-button").addEventListener("click", loadNewImage);



