const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const whatsappBtn = document.getElementById('whatsapp');
const instaBtn = document.getElementById('instagram');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');


function showLoadingSpinner(){
    loader.hidden=false;
    quoteContainer.hidden=true;
}

function removeLoadingSpinner(){
    loader.hidden=true;
    quoteContainer.hidden=false;
}

// let apiQuotes=[];

//Show new Quote
function newQuote(){
    showLoadingSpinner();
    //pick random quote from apiQuotes array
    const quote= localQoutes[Math.floor(Math.random() * localQoutes.length)];
    
    if (!quote.author) {
        authorText.textContent="Unknown";
    } else {
        authorText.textContent=quote.author;
    }
    //Check Quote length to determine styling
    if (quote.text.length >120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent=quote.text;
    removeLoadingSpinner();
   
}

// Get Quote from API
// async function getQuotes(){
//     showLoadingSpinner();
//     const apiUrl="https://type.fit/api/quotes";
//     try {
//         const response= await fetch(apiUrl);
//         apiQuotes= await response.json();
//         newQuote();
//     } catch (error) {
        
//     }
// }

//Tweet Function
function tweetQuote(){
   const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
   window.open(tweetUrl, '_blank');

}

function whatsappQuote(){
    const whatsappUrl = `https://api.whatsapp.com/send?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(whatsappUrl, '_blank');
}

function instagramQuote(){
    const instagramUrl = `https://www.instagram.com/${quoteText.textContent} - ${authorText.textContent}`;
    window.open(instagramUrl, '_blank');
}


//Event Listener
newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',tweetQuote);
whatsappBtn.addEventListener('click',whatsappQuote);
instaBtn.addEventListener('click',instagramQuote);
newQuote()