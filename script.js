const button = document.querySelector(".btn");
const jokeText = document.querySelector(".joke");

button.addEventListener("click", async function () {
  let response = await fetch(
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
  );
  let data = await response.json();

jokeText.innerHTML = ''
  let paragraphe = document.createElement("p");
  let secondp = document.createElement("p");
  paragraphe.textContent = data.setup || data.joke;
  secondp.textContent = data.delivery;
  jokeText.appendChild(paragraphe);
  jokeText.appendChild(secondp);
});
