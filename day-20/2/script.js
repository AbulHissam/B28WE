// const url = "https://yomomma-api.herokuapp.com/jokes";
const url = "https://programming-quotes-api.herokuapp.com/quotes/random";
const btn_getQuote = document.getElementById("btn-getQuote");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const getRandomUselessFacts = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    author.innerText = `Here is a Quote from ${data.author} :`;
    quote.innerHTML = `<q>${data.en}</q>`;
  } catch (e) {}
};
btn_getQuote.addEventListener("click", getRandomUselessFacts);
