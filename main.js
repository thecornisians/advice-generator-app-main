//variables

document.querySelector('.icon-dice').addEventListener('click', getAdvice)
const adviceNumber = document.querySelector('.advice-number')
const adviceText = document.querySelector('.advice')

//fetch url to get random quote
const url = `https://api.adviceslip.com/advice`

function getAdvice(){
    fetch(url)
    .then(res => res.json())   
    .then(data => {
        console.log(data)
        adviceNumber.textContent = `Advice #${data.slip.id}`
        adviceText.textContent = `"${data.slip.advice}"`
    })
    .catch((error) => {
        alert(`Error ${error}`);
    });

    }
 