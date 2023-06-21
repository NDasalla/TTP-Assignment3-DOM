// Retrieve DOM elements
// TODO: Get references to the required DOM elements using document.getElementById()
const posterImage = document.getElementById("poster-image");
const posterQuote = document.getElementById("poster-quote");
const posterTitle = document.getElementById("poster-title");
const randomButton = document.getElementById("randomize");

const posterFormQuote = document.getElementById("poster-form-quote");
const posterFormTitle = document.getElementById("poster-form-title");
const posterFormImageUrl = document.getElementById("poster-form-image-url");
const submitButton = document.getElementById("submit");
// console.log(posterImage);
// console.log(posterQuote);
// console.log(posterTitle);
// console.log(randomButton);
// console.log(posterFormQuote);
// console.log(posterFormTitle);
// Array of predefined poster objects
const posters = [
  {
    image: "./images/forest.jpg",
    title: "No One Path",
    quote: `"The key to success fits many doors."`,
  },
  {
    image: "./images/malenia.jpg",
    title: "Keep Going",
    quote: `"The people who have never attempted it think you are insane. The ones that have know you are."`,
  },
  {
    image: "./images/eldenRing.jpg",
    title: "Success",
    quote: `"Don't measure it by how far you have to go, but by how far you've come."`,
  },
  {
    image: "./images/samurai.jpg",
    title: "Life and Death",
    quote: `"Fear, not death, but never having lived."`,
  },
  {
    image: "./images/america1.jpg",
    title: "Freedom",
    quote: `"It isn't free. It costs a buck-o-five."`,
  },

  // Add more poster objects as needed
];

// Event listener for randomize button
// TODO: Add an event listener to the randomizeButton that calls a function when clicked
randomButton.addEventListener("click", generateRandomPoster);

// Event listener for submit button
// TODO: Add an event listener to the submitButton that calls a function when clicked
submitButton.addEventListener("click", generateCustomPoster);

// Function to generate a random poster
function generateRandomPoster() {
  // TODO: Generate a random index within the range of the posters array length
  // TODO: Retrieve the random poster object from the posters array
  // TODO: Call the function to update the DOM with the values from the random poster object
  // Math.floor(Math.random() * (max - min) ) + min; [min, max)
  let ranNum = Math.floor(Math.random() * (posters.length - 0)) + 0;
  // console.log(ranNum);

  posterImage.setAttribute("src", posters[ranNum]["image"]);
  posterTitle.textContent = posters[ranNum]["title"];
  posterQuote.textContent = posters[ranNum]["quote"];
}

// Function to generate a custom poster
function generateCustomPoster(event) {
  event.preventDefault();

  // TODO: Retrieve the entered quote and author from the input fields
  const inputTitle = posterFormTitle.value;
  const inputQuote = posterFormQuote.value;
  const inputImageUrl = posterFormImageUrl.value;

  // console.log(inputTitle);
  // console.log(inputQuote);
  // console.log(inputImageUrl);
  // TODO: Create a custom poster object with the entered values
  const obj = {
    image: inputImageUrl,
    title: inputTitle,
    quote: inputQuote,
  };
  // TODO: Call the function to update the DOM with the values from the custom poster object
  console.log(obj.title);
  updatePoster(obj.image, obj.title, obj.quote);
}

// Function to update the poster content in the DOM
function updatePoster(imageUrl, title, quote) {
  // TODO: Update the DOM with the values provided for the poster image, title, and quote
  posterImage.setAttribute("src", imageUrl);
  posterTitle.textContent = title;
  posterQuote.textContent = `"${quote}"`;
}
