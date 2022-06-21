let buttonDOM = document.querySelector('button');
// let h2DOM = document.querySelector('h2');
let h2DOM = document.getElementById('albany');


    // Solution with array and random numbers

// buttonDOM.addEventListener('click', getQuote)

// function getQuote(){
//     const arrOfquotes = ["Genius is one percent inspiration and ninety-nine percent perspiration.", "You can observe a lot just by watching.", "A house divided against itself cannot stand.", "Difficulties increase the nearer we get to the goal.", "Fate is in your hands and no one elses"];

//     const randomNum = Math.floor(Math.random()* arrOfquotes.length)

//     h2DOM.innerText = arrOfquotes[randomNum];
// }

// // solution with fetch API 

buttonDOM.addEventListener('click', getQuote)

function getQuote(){
    fetch('https://type.fit/api/quotes')
    .then(data => data.json())
    .then(data=>{
        const randomNum = Math.floor(Math.random()* 1643)
        h2DOM.innerText = data[randomNum].text;
    })

}


