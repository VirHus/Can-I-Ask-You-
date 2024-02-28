const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, see you on March 2!";
  gif.src =
    "https://media.giphy.com/media/xWTNfEu9uAXBnFQIa5/giphy.gif";

    noBtn.remove();
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  gif.src =
    "https://media.giphy.com/media/YcDLoyFD6YAz9l85lP/giphy.gif";
  
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  // Array of alternative texts for the "No" button
  const alternativeTexts = [
    "Why! ",
    "Again!! Will you go out with me?",
    "Again and again!! Will you go out with me?"
  ];

   // Select a random alternative text and update the question
   const randomIndex = Math.floor(Math.random() * alternativeTexts.length);
   question.innerHTML = alternativeTexts[randomIndex];
});