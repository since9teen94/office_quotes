async function getQuote() {
    let response = await fetch('https://www.officeapi.dev/api/quotes/random');
    let data = await response.json();
    let res = {'quote':`"${data.data.content}"`, 'fullName':`- ${data.data.character.firstname} ${data.data.character.lastname}`}
    return res;
}
document.addEventListener('DOMContentLoaded', function () {
    const quoteElement = document.getElementById('text')
    const quoteAuthor = document.getElementById('author')
    const button = document.getElementById('new-quote')

    const setNewQuote = () => {
            getQuote().then(res => {
                quoteElement.innerText = res.quote
                quoteAuthor.innerText = res.fullName
            })
        }

    setNewQuote()
    button.addEventListener('click', setNewQuote)
    }, false);