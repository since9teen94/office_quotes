function qs(selector) {
    return document.querySelector(selector);
}
let button;
async function getQuote() {
    let response = await fetch('https://www.officeapi.dev/api/quotes/random');
    let data = await response.json();
    return {'quote':`"${data.data.content}"`, 'author':`- ${data.data.character.firstname} ${data.data.character.lastname}`}
}
async function setNewQuote() {
    const res = await getQuote();
    qs('#text').innerText = res.quote;
    qs('#author').innerText = res.author;
}
document.addEventListener('DOMContentLoaded', function () {
    button = qs('#new-quote');
    button.addEventListener('click', setNewQuote);
    await setNewQuote();
});
