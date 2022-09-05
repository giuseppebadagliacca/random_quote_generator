let buttonDOM = document.querySelector('button');
// let h2DOM = document.querySelector('h2');
let h2DOM = document.getElementById('albany');



buttonDOM.addEventListener('click', getQuote)

function getQuote() {
    fetch('https://type.fit/api/quotes')
        .then(data => data.json())
        .then(data => {
            const randomNum = Math.floor(Math.random() * 1643)
            h2DOM.innerText = data[randomNum].text;
        })

}


